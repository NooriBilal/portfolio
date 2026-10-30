import { useCallback, useSyncExternalStore } from "react";

// Kleine Einstellungs-Ablage: localStorage, mit Speicher-Fallback falls der
// Browser den Zugriff blockiert (privates Fenster o. Ä.).
const memory = new Map<string, string>();
const listeners = new Set<() => void>();

function read(key: string): string | null {
  if (memory.has(key)) return memory.get(key) ?? null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function usePersisted(key: string, fallback: string) {
  const value = useSyncExternalStore(
    subscribe,
    () => read(key) ?? fallback,
    () => fallback,
  );

  const set = useCallback(
    (next: string) => {
      memory.set(key, next);
      try {
        window.localStorage.setItem(key, next);
      } catch {
        // Nur im Speicher behalten
      }
      listeners.forEach((l) => l());
    },
    [key],
  );

  return [value, set] as const;
}
