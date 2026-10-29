// Synthetische Navigationstöne im Stil der PSP — kein Audio-Asset nötig.
export type Sfx = "move" | "confirm" | "back";

let ctx: AudioContext | null = null;

function tone(ac: AudioContext, start: number, from: number, to: number, length: number, volume: number) {
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(from, start);
  osc.frequency.exponentialRampToValueAtTime(to, start + length);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + length);
  osc.connect(gain).connect(ac.destination);
  osc.start(start);
  osc.stop(start + length + 0.02);
}

export function playSfx(kind: Sfx) {
  try {
    ctx ??= new AudioContext();
    if (ctx.state === "suspended") void ctx.resume();
    const t = ctx.currentTime;
    if (kind === "move") {
      tone(ctx, t, 1500, 1150, 0.05, 0.05);
    } else if (kind === "confirm") {
      tone(ctx, t, 990, 990, 0.06, 0.045);
      tone(ctx, t + 0.055, 1480, 1480, 0.09, 0.045);
    } else {
      tone(ctx, t, 760, 520, 0.09, 0.05);
    }
  } catch {
    // Kein Web Audio verfügbar
  }
}
