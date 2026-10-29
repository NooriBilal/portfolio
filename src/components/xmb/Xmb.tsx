"use client";

import {
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type TouchEvent,
  type WheelEvent,
} from "react";
import { useRouter } from "next/navigation";
import styles from "./xmb.module.css";
import XmbWave from "./XmbWave";
import { Icon, XmbDefs } from "./icons";
import { buildMenu, resolveTheme, DEFAULT_THEME, type InfoData, type TileData, type XmbEntry } from "./menu";
import { usePersisted } from "./store";
import { playSfx, type Sfx } from "./sound";

// ── Geometrie in PSP-Pixeln (Bildschirm 480 × 272), --u skaliert auf den Viewport ──
const CAT_X = 109.5;
const CAT_Y = 70;
const CAT_LABEL_Y = 98.5;
const ITEM_Y = 136.5;
const ITEM_STEP = 66;
const ITEM_ABOVE_Y = 14;
const LABEL_DX = 33;
const PARENT_X = 60;
const GAMES_PARENT_X = 20;
const ARROW_X = 98;
const GAMES_ARROW_X = 42;
const SUB_ICON_X = 140;
const SUB_LABEL_X = 172;
const TILE_X = 113;
const TILE_TEXT_X = 189;
const START_CATEGORY = 4; // „Projekte" — wie im Referenzbild steht „Game" im Fokus

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");
const u = (n: number) => `calc(var(--u) * ${n})`;
const at = (x: number, y: number, scale = 1): CSSProperties => ({
  transform: `translate(${u(x)}, ${u(y)}) translate(-50%, -50%) scale(${scale})`,
});
const atLeft = (x: number, y: number): CSSProperties => ({
  transform: `translate(${u(x)}, ${u(y)}) translateY(-50%)`,
});
const shown = (visible: boolean): CSSProperties => ({
  opacity: visible ? 1 : 0,
  pointerEvents: visible ? undefined : "none",
});
const hasDetail = (e: XmbEntry) => e.subtitle !== undefined || e.level !== undefined;
// Breite von x bis kurz vor den rechten Bildschirmrand
const toRight = (x: number) => `calc(var(--vw) - var(--u) * (${x} + var(--stage-dx) + 22))`;

function catOffset(d: number) {
  return d === 0 ? 0 : Math.sign(d) * (86 + (Math.abs(d) - 1) * 81);
}
function itemY(d: number) {
  if (d === 0) return ITEM_Y;
  if (d > 0) return ITEM_Y + d * ITEM_STEP;
  // Bereits durchlaufene Einträge wandern über die Kategorieleiste
  return ITEM_ABOVE_Y + (d + 1) * ITEM_STEP;
}
function subY(d: number, tracks: boolean) {
  if (d === 0) return ITEM_Y;
  const first = tracks ? 48 : 58;
  const step = tracks ? 44 : 52;
  return ITEM_Y + Math.sign(d) * (first + (Math.abs(d) - 1) * step);
}
function tileY(d: number) {
  if (d === 0) return ITEM_Y;
  return ITEM_Y + Math.sign(d) * (61.5 + (Math.abs(d) - 1) * 42);
}

// ── Uhr + Batterie für die Statusleiste ──
function subscribeClock(cb: () => void) {
  const id = window.setInterval(cb, 1000);
  return () => window.clearInterval(id);
}
const readClock = () => {
  const d = new Date();
  return `${d.getDate()}/${d.getMonth() + 1} ${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
};
const readMonth = () => new Date().getMonth();

interface BatteryLike {
  level: number;
  addEventListener: (type: string, cb: () => void) => void;
  removeEventListener: (type: string, cb: () => void) => void;
}

function useBattery() {
  const [level, setLevel] = useState(1);
  useEffect(() => {
    const nav = navigator as Navigator & { getBattery?: () => Promise<BatteryLike> };
    if (!nav.getBattery) return;
    let battery: BatteryLike | null = null;
    let alive = true;
    const update = () => {
      if (alive && battery) setLevel(battery.level);
    };
    nav
      .getBattery()
      .then((b) => {
        battery = b;
        update();
        b.addEventListener("levelchange", update);
      })
      .catch(() => {});
    return () => {
      alive = false;
      battery?.removeEventListener("levelchange", update);
    };
  }, []);
  return level;
}

interface XmbOption {
  label: string;
  run: () => void;
}

function Tile({ tile }: { tile: TileData }) {
  return (
    <div className={styles.tile} style={{ "--h": tile.hue } as CSSProperties}>
      {tile.badge && <span className={styles.tileBadge}>{tile.badge}</span>}
      <span className={styles.tileName}>{tile.title}</span>
      <span className={styles.tileCaption}>{tile.caption}</span>
    </div>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 6 8" className={styles.arrowGlyph} aria-hidden="true">
      <path d="M6 0v8L0 4z" fill="currentColor" />
    </svg>
  );
}

function ButtonGlyph({ kind }: { kind: "triangle" | "circle" }) {
  return (
    <svg viewBox="0 0 12 12" className={styles.pillGlyph} aria-hidden="true">
      {kind === "triangle" ? (
        <path d="M6 1.6 10.8 10H1.2z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      ) : (
        <circle cx="6" cy="6" r="4.3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      )}
    </svg>
  );
}

/** Titel über der Linie, darunter Untertitel/Meta — wie „Remote Play" in der PSP-XMB */
function LabelBlock({ entry, x, focused }: { entry: XmbEntry; x: number; focused: boolean }) {
  const detailed = focused && hasDetail(entry);
  if (!detailed) {
    return (
      <span className={styles.labelText} style={{ maxWidth: toRight(x) }}>
        {entry.label}
      </span>
    );
  }
  return (
    <span className={styles.labelBlock} style={{ width: toRight(x) }}>
      <span className={styles.labelTitle}>{entry.label}</span>
      <span className={styles.labelRule} />
      <span className={styles.labelMeta}>
        {entry.level !== undefined ? (
          <>
            <span>Kenntnisstand</span>
            <span className={styles.levelBar}>
              <span style={{ width: `${entry.level}%` }} />
            </span>
          </>
        ) : (
          <span className={styles.labelSub}>{entry.subtitle}</span>
        )}
        {entry.tag && <span className={styles.labelTag}>{entry.tag}</span>}
      </span>
    </span>
  );
}

/** embedded: stumme Live-Vorschau (z. B. im PSP-Bildschirm auf der Startseite) — ohne Eingabe und Fokus */
export default function Xmb({ embedded = false }: { embedded?: boolean }) {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const infoBodyRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef({ acc: 0, last: 0 });
  const touchRef = useRef<{ x: number; y: number } | null>(null);

  const clock = useSyncExternalStore(subscribeClock, readClock, () => "");
  const month = useSyncExternalStore(subscribeClock, readMonth, () => 11);
  const battery = useBattery();

  const [theme, setTheme] = usePersisted("xmb-theme", DEFAULT_THEME);
  const [sound, setSound] = usePersisted("xmb-sound", "on");
  const [preview, setPreview] = useState<string | null>(null);

  const categories = useMemo(() => buildMenu({ theme, sound, month }), [theme, sound, month]);

  const [cat, setCat] = useState(START_CATEGORY);
  const [itemIdx, setItemIdx] = useState<number[]>(() => categories.map(() => 0));
  const [level, setLevel] = useState<0 | 1>(0);
  const [subIdx, setSubIdx] = useState<Record<string, number>>({});

  const [options, setOptions] = useState<XmbOption[]>([]);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [optionIdx, setOptionIdx] = useState(0);
  const [info, setInfo] = useState<InfoData | null>(null);
  const [infoOpen, setInfoOpen] = useState(false);
  const [picKey, setPicKey] = useState<string | null>(null);
  const [exitOpen, setExitOpen] = useState(false);
  const [exitYes, setExitYes] = useState(true);

  const category = categories[cat];
  const sel = itemIdx[cat] ?? 0;
  const entry = category.items[sel];
  const subKey = `${category.id}/${entry.id}`;
  const subList = entry.children ?? [];
  const subSel = subIdx[subKey] ?? 0;
  const layout = entry.layout ?? "list";
  const inSub = level === 1 && subList.length > 0;
  const focused = inSub ? subList[subSel] : entry;
  const activeTheme = resolveTheme(preview ?? theme, month);

  // PIC1: Hintergrundbild eines Projekts blendet nach kurzer Verweildauer ein
  const focusKey = inSub && layout === "games" ? `${subKey}/${subSel}` : null;
  useEffect(() => {
    if (!focusKey) return;
    const id = window.setTimeout(() => setPicKey(focusKey), 1100);
    return () => window.clearTimeout(id);
  }, [focusKey]);
  const showPic = focusKey !== null && picKey === focusKey && !infoOpen;
  const picEntry = layout === "games" ? subList[subSel] : undefined;

  useEffect(() => {
    if (!embedded) rootRef.current?.focus();
  }, [embedded]);

  const sfx = (kind: Sfx) => {
    if (sound === "on") playSfx(kind);
  };

  // ── Aktionen ──
  const openLink = (e: XmbEntry) => {
    if (!e.href) return;
    if (e.download) {
      const a = document.createElement("a");
      a.href = e.href;
      a.download = "";
      a.click();
    } else if (e.href.startsWith("/") && !e.href.includes(".")) {
      router.push(e.href);
    } else if (e.href.startsWith("mailto:")) {
      window.location.assign(e.href);
    } else {
      window.open(e.href, "_blank", "noopener,noreferrer");
    }
  };

  const openInfo = (data: InfoData) => {
    setInfo(data);
    setInfoOpen(true);
    setOptionsOpen(false);
  };

  const optionsFor = (e: XmbEntry): XmbOption[] => {
    const list: XmbOption[] = [];
    const data = e.info;
    if (data) list.push({ label: "Information", run: () => openInfo(data) });
    if (e.href) {
      const href = e.href;
      const label = href.startsWith("mailto:") ? "E-Mail schreiben" : e.download ? "Herunterladen" : "Öffnen";
      list.push({ label, run: () => openLink(e) });
      list.push({
        label: href.startsWith("mailto:") ? "Adresse kopieren" : "Link kopieren",
        run: () => {
          const text = href.startsWith("mailto:") ? href.slice(7) : new URL(href, window.location.href).href;
          void navigator.clipboard?.writeText(text).catch(() => {});
        },
      });
    }
    return list;
  };
  const focusedOptions = optionsFor(focused);

  const moveCat = (d: number) => {
    const next = Math.min(categories.length - 1, Math.max(0, cat + d));
    if (next === cat) return;
    setCat(next);
    sfx("move");
  };

  const moveItem = (d: number) => {
    const next = Math.min(category.items.length - 1, Math.max(0, sel + d));
    if (next === sel) return;
    setItemIdx((arr) => arr.map((v, i) => (i === cat ? next : v)));
    sfx("move");
  };

  const selectSub = (next: number) => {
    setSubIdx((m) => ({ ...m, [subKey]: next }));
    const target = subList[next];
    if (target?.setting?.key === "theme") setPreview(target.setting.value);
  };

  const moveSub = (d: number) => {
    const next = Math.min(subList.length - 1, Math.max(0, subSel + d));
    if (next === subSel) return;
    selectSub(next);
    sfx("move");
  };

  const enter = () => {
    // Bei Einstellungen steht der Cursor auf dem aktuell gewählten Wert
    const current = subList.findIndex(
      (c) => c.setting && c.setting.value === (c.setting.key === "theme" ? theme : sound),
    );
    if (current >= 0) {
      setSubIdx((m) => ({ ...m, [subKey]: current }));
      if (subList[current].setting?.key === "theme") setPreview(theme);
    }
    setLevel(1);
    sfx("confirm");
  };

  const activate = (e: XmbEntry) => {
    if (e.setting) {
      if (e.setting.key === "theme") setTheme(e.setting.value);
      else setSound(e.setting.value);
      if (e.setting.key === "sound" && e.setting.value === "on") playSfx("confirm");
      else sfx("confirm");
      setPreview(null);
      setLevel(0);
      return;
    }
    if (e.info) {
      openInfo(e.info);
      sfx("confirm");
      return;
    }
    if (e.href) {
      sfx("confirm");
      openLink(e);
    }
  };

  const confirm = () => {
    if (exitOpen) {
      setExitOpen(false);
      if (exitYes) {
        sfx("confirm");
        router.push("/");
      } else {
        sfx("back");
      }
      return;
    }
    if (optionsOpen) {
      options[optionIdx]?.run();
      setOptionsOpen(false);
      sfx("confirm");
      return;
    }
    if (infoOpen) return;
    if (level === 0 && subList.length > 0) {
      enter();
      return;
    }
    activate(focused);
  };

  const back = () => {
    if (exitOpen) {
      setExitOpen(false);
      sfx("back");
    } else if (optionsOpen) {
      setOptionsOpen(false);
      sfx("back");
    } else if (infoOpen) {
      setInfoOpen(false);
      sfx("back");
    } else if (level === 1) {
      setLevel(0);
      setPreview(null);
      sfx("back");
    } else {
      // ○ auf oberster Ebene: wie HOME auf der PSP — nachfragen, ob verlassen werden soll
      setExitYes(true);
      setExitOpen(true);
      sfx("confirm");
    }
  };

  const toggleOptions = () => {
    if (infoOpen || exitOpen) return;
    if (optionsOpen) {
      setOptionsOpen(false);
      sfx("back");
      return;
    }
    if (focusedOptions.length === 0) return;
    setOptions(focusedOptions);
    setOptionIdx(0);
    setOptionsOpen(true);
    sfx("confirm");
  };

  const vertical = (d: number) => {
    if (exitOpen) return;
    if (optionsOpen) {
      const next = Math.min(options.length - 1, Math.max(0, optionIdx + d));
      if (next !== optionIdx) {
        setOptionIdx(next);
        sfx("move");
      }
    } else if (infoOpen) {
      infoBodyRef.current?.scrollBy({ top: d * 48, behavior: "smooth" });
    } else if (inSub) {
      moveSub(d);
    } else {
      moveItem(d);
    }
  };

  const horizontal = (d: number) => {
    if (exitOpen) {
      setExitYes(d < 0);
      sfx("move");
      return;
    }
    if (optionsOpen || infoOpen) return;
    if (level === 1) {
      if (d < 0) back();
    } else {
      moveCat(d);
    }
  };

  // ── Eingabe ──
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    switch (key) {
      case "ArrowLeft":
        horizontal(-1);
        break;
      case "ArrowRight":
        horizontal(1);
        break;
      case "ArrowUp":
        vertical(-1);
        break;
      case "ArrowDown":
        vertical(1);
        break;
      case "Enter":
      case " ":
      case "x":
        confirm();
        break;
      case "Escape":
      case "Backspace":
      case "o":
        back();
        break;
      case "t":
        toggleOptions();
        break;
      default:
        return;
    }
    e.preventDefault();
  };

  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (infoOpen) return; // Infotext scrollt nativ
    const w = wheelRef.current;
    const sideways = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;
    w.acc += sideways ? e.deltaX || e.deltaY : e.deltaY;
    const now = e.timeStamp;
    if (Math.abs(w.acc) < 40 || now - w.last < 110) return;
    const dir = Math.sign(w.acc);
    w.acc = 0;
    w.last = now;
    if (sideways) horizontal(dir);
    else vertical(dir);
  };

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const start = touchRef.current;
    touchRef.current = null;
    if (!start || infoOpen) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 28) return; // Tippen → onClick
    if (Math.abs(dx) > Math.abs(dy)) {
      horizontal(dx < 0 ? 1 : -1);
    } else {
      const steps = Math.max(1, Math.round(Math.abs(dy) / 60));
      for (let i = 0; i < steps; i++) vertical(dy < 0 ? 1 : -1);
    }
  };

  // Klick verschiebt den Fokus nicht vom Root weg (Tastatursteuerung bleibt aktiv)
  const keepFocus = (e: MouseEvent) => e.preventDefault();

  const onCategoryClick = (ci: number) => {
    if (ci === cat) {
      if (level === 1) back();
      return;
    }
    setOptionsOpen(false);
    setLevel(0);
    setPreview(null);
    setCat(ci);
    sfx("move");
  };

  const onItemClick = (ii: number) => {
    if (level === 1) {
      back();
      return;
    }
    if (ii !== sel) {
      setItemIdx((arr) => arr.map((v, i) => (i === cat ? ii : v)));
      sfx("move");
      return;
    }
    confirm();
  };

  const onSubClick = (j: number) => {
    if (j !== subSel) {
      selectSub(j);
      sfx("move");
      return;
    }
    activate(subList[j]);
  };

  // ── Positionen ──
  const parentX = layout === "games" ? GAMES_PARENT_X : PARENT_X;
  const shift = level === 1 ? parentX - CAT_X : 0;
  const tracks = layout === "tracks";
  const batteryBars = battery > 0.66 ? 3 : battery > 0.33 ? 2 : battery > 0.1 ? 1 : 0;

  const themeVars = {
    "--theme-top": activeTheme.top,
    "--theme-mid": activeTheme.mid,
    "--theme-bottom": activeTheme.bottom,
  } as CSSProperties;

  return (
    <div
      ref={rootRef}
      className={cx(styles.root, embedded && styles.embedded)}
      style={themeVars}
      {...(embedded
        ? { "aria-hidden": true }
        : {
            tabIndex: 0,
            role: "application",
            "aria-roledescription": "XMB-Menü",
            "aria-label": "Portfolio von Bilal Noori",
            onKeyDown,
            onWheel,
            onTouchStart,
            onTouchEnd,
            onContextMenu: (e: MouseEvent) => {
              e.preventDefault();
              back();
            },
          })}
    >
      <XmbDefs />
      <div className={styles.bg} />
      <XmbWave className={styles.canvas} />

      {/* PIC1 — Hintergrundbild des fokussierten Projekts */}
      <div
        className={cx(styles.pic1, showPic && styles.pic1Show)}
        style={{ "--h": picEntry?.tile?.hue ?? 0 } as CSSProperties}
        aria-hidden="true"
      >
        {picEntry?.tile && (
          <div className={styles.pic1Art}>
            <div className={styles.pic1Title}>{picEntry.tile.title}</div>
            <div className={styles.pic1Caption}>{picEntry.tile.caption}</div>
            {picEntry.summary && <p className={styles.pic1Summary}>{picEntry.summary}</p>}
          </div>
        )}
      </div>

      {/* Statusleiste */}
      <div className={styles.status}>
        <span suppressHydrationWarning>{clock}</span>
        <svg viewBox="0 0 22 10" className={styles.battery} aria-hidden="true">
          <rect x="0" y="3" width="2" height="4" rx="0.5" fill="#fff" />
          <rect x="2.6" y="0.6" width="18.8" height="8.8" rx="1.4" fill="none" stroke="#fff" strokeWidth="1.2" />
          {[0, 1, 2].map((b) => (
            <rect key={b} x={15.6 - b * 5.6} y="2.4" width="4.6" height="5.2" rx="0.4" fill="#fff" opacity={b < batteryBars ? 1 : 0} />
          ))}
        </svg>
      </div>

      <div className={cx(styles.stage, infoOpen && styles.stageHidden)}>
        {categories.map((c, ci) => {
          const d = ci - cat;
          const isSel = d === 0;
          const x = CAT_X + catOffset(d) + shift;
          const catOpacity = level === 0 || isSel ? 1 : 0;
          const labelOpacity = isSel && !(level === 1 && layout === "games") ? 1 : 0;
          const s = itemIdx[ci] ?? 0;

          return (
            <Fragment key={c.id}>
              <button
                type="button"
                tabIndex={-1}
                className={cx(styles.abs, styles.cat, isSel && level === 0 ? styles.glow : styles.soft)}
                style={{ ...at(x, CAT_Y, isSel ? 1 : 0.66), ...shown(catOpacity === 1) }}
                onMouseDown={keepFocus}
                onClick={() => onCategoryClick(ci)}
                aria-label={c.label}
              >
                <Icon name={c.icon} className={styles.icon} />
              </button>
              <span className={cx(styles.abs, styles.catLabel)} style={{ ...at(x, CAT_LABEL_Y), opacity: labelOpacity }}>
                {c.label}
              </span>

              {Math.abs(d) <= 1 &&
                c.items.map((it, ii) => {
                  const di = ii - s;
                  const isFocus = isSel && di === 0;
                  const visible = isSel && (level === 0 || di === 0);
                  const y = itemY(di);
                  const showLabel = isSel && level === 0 && (isFocus || c.showAllLabels === true);
                  return (
                    <Fragment key={it.id}>
                      <button
                        type="button"
                        tabIndex={-1}
                        className={cx(styles.abs, styles.item, isFocus && level === 0 ? styles.glow : styles.soft)}
                        style={{ ...at(x, y, isFocus && level === 0 ? 1 : 0.68), ...shown(visible) }}
                        onMouseDown={keepFocus}
                        onClick={() => onItemClick(ii)}
                        aria-label={it.label}
                      >
                        {it.icon && <Icon name={it.icon} className={styles.icon} />}
                      </button>
                      <span
                        className={cx(styles.abs, styles.label, isFocus ? styles.labelFocus : styles.labelIdle)}
                        style={{ ...atLeft(x + LABEL_DX, isFocus && hasDetail(it) ? y + 2 : y), ...shown(showLabel) }}
                        onMouseDown={keepFocus}
                        onClick={() => onItemClick(ii)}
                      >
                        <LabelBlock entry={it} x={x + LABEL_DX} focused={isFocus} />
                      </span>
                    </Fragment>
                  );
                })}
            </Fragment>
          );
        })}

        {/* Pfeil zwischen Elternspalte und Unterliste */}
        <span
          className={cx(styles.abs, styles.arrow)}
          style={{ ...at(layout === "games" ? GAMES_ARROW_X : ARROW_X, ITEM_Y), ...shown(inSub) }}
          onMouseDown={keepFocus}
          onClick={back}
        >
          <Arrow />
        </span>

        {/* Unterliste der fokussierten Kategorie-Zeile */}
        <div className={cx(styles.sub, inSub && styles.subOpen)} aria-hidden={!inSub}>
          {subList.map((s, j) => {
            const dj = j - subSel;
            const isFocus = dj === 0;

            if (layout === "games" && s.tile) {
              const y = tileY(dj);
              return (
                <Fragment key={s.id}>
                  <button
                    type="button"
                    tabIndex={-1}
                    className={cx(styles.abs, styles.tileButton, isFocus && styles.tileFocus)}
                    style={at(TILE_X, y, isFocus ? 0.89 : 0.5)}
                    onMouseDown={keepFocus}
                    onClick={() => onSubClick(j)}
                    aria-label={s.label}
                  >
                    <Tile tile={s.tile} />
                  </button>
                  {isFocus && (
                    <span
                      className={cx(styles.abs, styles.label, styles.labelFocus)}
                      style={{ ...atLeft(TILE_TEXT_X, y + 2), ...shown(!showPic) }}
                    >
                      <LabelBlock entry={s} x={TILE_TEXT_X} focused />
                    </span>
                  )}
                </Fragment>
              );
            }

            const y = subY(dj, tracks);
            return (
              <Fragment key={s.id}>
                <button
                  type="button"
                  tabIndex={-1}
                  className={cx(styles.abs, styles.subIcon, isFocus ? styles.glow : styles.soft)}
                  style={at(SUB_ICON_X, y, isFocus ? 1 : 0.74)}
                  onMouseDown={keepFocus}
                  onClick={() => onSubClick(j)}
                  aria-label={s.label}
                >
                  {s.number ? (
                    <span className={styles.trackBox}>{s.number}</span>
                  ) : s.swatch ? (
                    <span
                      className={styles.swatch}
                      style={{ background: `linear-gradient(180deg, ${s.swatch.top}, ${s.swatch.mid} 55%, ${s.swatch.bottom})` }}
                    />
                  ) : (
                    s.icon && <Icon name={s.icon} className={styles.icon} />
                  )}
                </button>
                <span
                  className={cx(styles.abs, styles.label, isFocus ? styles.labelFocus : styles.labelIdle)}
                  style={atLeft(SUB_LABEL_X, isFocus && hasDetail(s) ? y + 2 : y)}
                  onMouseDown={keepFocus}
                  onClick={() => onSubClick(j)}
                >
                  <LabelBlock entry={s} x={SUB_LABEL_X} focused={isFocus} />
                </span>
              </Fragment>
            );
          })}
        </div>
      </div>

      {/* △ Optionen */}
      <button
        type="button"
        tabIndex={-1}
        className={cx(styles.pill, focusedOptions.length > 0 && !optionsOpen && !infoOpen && !exitOpen && styles.pillShow)}
        onMouseDown={keepFocus}
        onClick={toggleOptions}
      >
        <ButtonGlyph kind="triangle" />
        Optionen
      </button>

      {/* Optionsmenü */}
      <div className={cx(styles.options, optionsOpen && styles.optionsOpen)} aria-hidden={!optionsOpen}>
        {options.map((o, i) => (
          <button
            key={o.label}
            type="button"
            tabIndex={-1}
            className={cx(styles.option, i === optionIdx && styles.optionFocus)}
            onMouseDown={keepFocus}
            onClick={() => {
              o.run();
              setOptionsOpen(false);
              sfx("confirm");
            }}
          >
            {o.label}
          </button>
        ))}
      </div>

      {/* Information */}
      <div className={cx(styles.info, infoOpen && styles.infoOpen)} onClick={back} aria-hidden={!infoOpen}>
        {info && (
          <div className={styles.infoPanel} onClick={(e) => e.stopPropagation()}>
            <div className={styles.infoHead}>
              {info.tile ? (
                <div className={styles.infoTile}>
                  <Tile tile={info.tile} />
                </div>
              ) : (
                info.icon && <Icon name={info.icon} className={cx(styles.infoIcon, styles.glow)} />
              )}
              <div className={styles.infoHeadText}>
                <div className={styles.infoTitle}>{info.title}</div>
                <div className={styles.infoRule} />
                {info.subtitle && <div className={styles.infoSub}>{info.subtitle}</div>}
              </div>
            </div>
            <dl className={styles.infoRows}>
              {info.rows.map((r) => (
                <div key={r.label} className={styles.infoRow}>
                  <dt>{r.label}</dt>
                  <dd>
                    {r.href ? (
                      <a href={r.href} target={r.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
                        {r.value}
                      </a>
                    ) : (
                      r.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            {info.body && (
              <div ref={infoBodyRef} className={styles.infoBody}>
                {info.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            )}
          </div>
        )}
        <button
          type="button"
          tabIndex={-1}
          className={cx(styles.pill, styles.pillShow)}
          onMouseDown={keepFocus}
          onClick={back}
        >
          <ButtonGlyph kind="circle" />
          Zurück
        </button>
      </div>

      {/* Systemdialog: PSP-Modus verlassen */}
      <div className={cx(styles.dialog, exitOpen && styles.dialogOpen)} aria-hidden={!exitOpen}>
        <div className={styles.dialogBand} role="alertdialog" aria-label="PSP-Modus verlassen">
          <p>Möchtest du den PSP-Modus verlassen und zum Portfolio zurückkehren?</p>
          <div className={styles.dialogButtons}>
            {[true, false].map((yes) => (
              <button
                key={String(yes)}
                type="button"
                tabIndex={-1}
                className={cx(styles.dialogButton, exitYes === yes && styles.dialogButtonFocus)}
                onMouseDown={keepFocus}
                onClick={() => {
                  setExitOpen(false);
                  if (yes) router.push("/");
                }}
              >
                {yes ? "Ja" : "Nein"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {!embedded && (
        <div className="sr-only" aria-live="polite">
          {exitOpen ? "PSP-Modus verlassen? Ja oder Nein" : infoOpen && info ? info.title : focused.label}
        </div>
      )}
    </div>
  );
}
