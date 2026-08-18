// hooks/useLocalStorage.js
// A useState-like hook that persists its value to LocalStorage.
// Every other hook (useProgress, useProjects) is built on top of this one.

import { useState, useCallback } from "react";
import { getItem, setItem } from "../utils/storage";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getItem(key, initialValue));

  const updateValue = useCallback(
    (next) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next;
        setItem(key, resolved);
        return resolved;
      });
    },
    [key]
  );

  return [value, updateValue];
}