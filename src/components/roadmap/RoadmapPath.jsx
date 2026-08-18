// components/roadmap/RoadmapPath.jsx

import PhaseNode from "./PhaseNode";
import { phases } from "../../data/phases";

export default function RoadmapPath({ completedPhases = [], currentPhaseId = null }) {
  return (
    <div className="max-w-[560px]">
      {phases.map((phase) => {
        const status = completedPhases.includes(phase.id)
          ? "done"
          : phase.id === currentPhaseId
          ? "active"
          : "locked";

        return <PhaseNode key={phase.id} phase={phase} status={status} />;
      })}
    </div>
  );
}