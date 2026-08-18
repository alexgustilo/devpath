// pages/Roadmap.jsx

import PageContainer from "../components/layout/PageContainer";
import RoadmapPath from "../components/roadmap/RoadmapPath";
import { useProgress } from "../hooks/useProgress";

export default function Roadmap() {
  const { completedPhases, currentPhase } = useProgress();

  return (
    <PageContainer>
      <div className="font-mono text-[11px] text-blue uppercase tracking-wider">Roadmap</div>
      <h2 className="text-[26px] font-bold mt-2 mb-1">Development Pipeline</h2>
      <p className="text-text-dim text-[13.5px] mb-6.5 mb-[26px]">
        13 phases · click a phase to open its guide
      </p>
      <RoadmapPath completedPhases={completedPhases} currentPhaseId={currentPhase?.id} />
    </PageContainer>
  );
}