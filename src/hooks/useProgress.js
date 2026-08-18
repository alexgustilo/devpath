// hooks/useProgress.js
// Tracks which phases are complete and which checklist items are checked.
// Powers the Roadmap, Dashboard, and PhaseGuide pages.

import { useMemo, useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { phases, totalChecklistItems } from "../data/phases";

export function useProgress() {
  const [completedPhases, setCompletedPhases] = useLocalStorage("completedPhases", []);
  const [checkedItems, setCheckedItems] = useLocalStorage("checkedItems", []);

  const isPhaseComplete = useCallback(
    (phaseId) => completedPhases.includes(phaseId),
    [completedPhases]
  );

  const isItemChecked = useCallback(
    (itemId) => checkedItems.includes(itemId),
    [checkedItems]
  );

  const toggleChecklistItem = useCallback(
    (itemId) => {
      setCheckedItems((prev) =>
        prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
      );
    },
    [setCheckedItems]
  );

  const markPhaseComplete = useCallback(
    (phaseId) => {
      setCompletedPhases((prev) => (prev.includes(phaseId) ? prev : [...prev, phaseId]));
    },
    [setCompletedPhases]
  );

  const markPhaseIncomplete = useCallback(
    (phaseId) => {
      setCompletedPhases((prev) => prev.filter((id) => id !== phaseId));
    },
    [setCompletedPhases]
  );

  // The "current" phase is the first one not yet complete.
  const currentPhase = useMemo(
    () => phases.find((p) => !completedPhases.includes(p.id)) ?? null,
    [completedPhases]
  );

  const overallPercent = useMemo(
    () => Math.round((completedPhases.length / phases.length) * 100),
    [completedPhases]
  );

  const checklistPercent = useMemo(
    () => Math.round((checkedItems.length / totalChecklistItems) * 100),
    [checkedItems]
  );

  return {
    completedPhases,
    checkedItems,
    currentPhase,
    overallPercent,
    checklistPercent,
    isPhaseComplete,
    isItemChecked,
    toggleChecklistItem,
    markPhaseComplete,
    markPhaseIncomplete,
  };
}