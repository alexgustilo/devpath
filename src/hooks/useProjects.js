// hooks/useProjects.js
// Manages the list of projects in the user's workspace. Each project tracks
// its own completed phases, independent of the global roadmap progress.

import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { phases } from "../data/phases";

const makeId = () => `proj_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

export function useProjects() {
  const [projects, setProjects] = useLocalStorage("projects", []);

  const createProject = useCallback(
    (name) => {
      const project = {
        id: makeId(),
        name: name?.trim() || "Untitled Project",
        completedPhases: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setProjects((prev) => [...prev, project]);
      return project;
    },
    [setProjects]
  );

  const deleteProject = useCallback(
    (projectId) => {
      setProjects((prev) => prev.filter((p) => p.id !== projectId));
    },
    [setProjects]
  );

  const togglePhaseForProject = useCallback(
    (projectId, phaseId) => {
      setProjects((prev) =>
        prev.map((p) => {
          if (p.id !== projectId) return p;
          const has = p.completedPhases.includes(phaseId);
          return {
            ...p,
            completedPhases: has
              ? p.completedPhases.filter((id) => id !== phaseId)
              : [...p.completedPhases, phaseId],
            updatedAt: new Date().toISOString(),
          };
        })
      );
    },
    [setProjects]
  );

  const getProjectProgress = useCallback(
    (project) => Math.round((project.completedPhases.length / phases.length) * 100),
    []
  );

  const getProjectCurrentPhase = useCallback(
    (project) => phases.find((p) => !project.completedPhases.includes(p.id)) ?? null,
    []
  );

  return {
    projects,
    createProject,
    deleteProject,
    togglePhaseForProject,
    getProjectProgress,
    getProjectCurrentPhase,
  };
}