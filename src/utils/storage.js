// utils/storage.js
// Raw LocalStorage helpers. No React here — just get/set/remove with safe
// JSON parsing, so hooks (useLocalStorage, useProgress, useProjects) can
// build on top of a single, predictable layer.

const PREFIX = "devpath:";

const withPrefix = (key) => `${PREFIX}${key}`;

export function getItem(key, fallback = null) {
  try {
    const raw = window.localStorage.getItem(withPrefix(key));
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`[storage] Failed to read "${key}":`, err);
    return fallback;
  }
}

export function setItem(key, value) {
  try {
    window.localStorage.setItem(withPrefix(key), JSON.stringify(value));
    return true;
  } catch (err) {
    console.warn(`[storage] Failed to write "${key}":`, err);
    return false;
  }
}

export function removeItem(key) {
  try {
    window.localStorage.removeItem(withPrefix(key));
    return true;
  } catch (err) {
    console.warn(`[storage] Failed to remove "${key}":`, err);
    return false;
  }
}

export function clearAll() {
  try {
    Object.keys(window.localStorage)
      .filter((k) => k.startsWith(PREFIX))
      .forEach((k) => window.localStorage.removeItem(k));
    return true;
  } catch (err) {
    console.warn("[storage] Failed to clear:", err);
    return false;
  }
}