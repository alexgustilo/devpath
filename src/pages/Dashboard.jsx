// pages/Dashboard.jsx

import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/common/Card";
import Badge from "../components/common/Badge";
import ProgressBar from "../components/common/ProgressBar";
import StatCard from "../components/dashboard/StatCard";
import { useProgress } from "../hooks/useProgress";
import { useProjects } from "../hooks/useProjects";
import { totalChecklistItems } from "../data/phases";

export default function Dashboard() {
  const { completedPhases, checkedItems, currentPhase, overallPercent } = useProgress();
  const { projects, getProjectProgress, getProjectCurrentPhase } = useProjects();

  const activeProject = projects[0];

  return (
    <PageContainer>
      <div className="font-mono text-[11px] text-blue uppercase tracking-wider">Dashboard</div>
      <h2 className="text-[26px] font-bold mt-2 mb-6">Welcome back, builder.</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-4">
        <Card className="p-4.5 p-[18px] flex items-center gap-4">
          <svg width="64" height="64" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="27" fill="none" stroke="var(--color-panel-2)" strokeWidth="6" />
            <circle
              cx="32" cy="32" r="27" fill="none" stroke="var(--color-green)" strokeWidth="6"
              strokeDasharray="170" strokeDashoffset={170 - (170 * overallPercent) / 100}
              strokeLinecap="round" transform="rotate(-90 32 32)"
            />
          </svg>
          <div>
            <div className="font-mono text-[10.5px] text-text-faint">PROGRESS</div>
            <div className="text-[22px] font-bold">{overallPercent}%</div>
            <div className="text-[11.5px] text-text-faint">{completedPhases.length} of 13 phases</div>
          </div>
        </Card>

        <StatCard
          label="TASKS DONE"
          value={<>{checkedItems.length}<span className="text-sm text-text-faint">/{totalChecklistItems}</span></>}
        />

        <StatCard
          label="ACTIVE PROJECT"
          value={activeProject ? activeProject.name : "No project yet"}
          subtext={
            activeProject
              ? `● ${getProjectCurrentPhase(activeProject)?.title ?? "Complete"}`
              : "Start one in Projects"
          }
          tone="text-yellow"
        />
      </div>

      {currentPhase && (
        <Card className="p-5 mb-4">
          <div className="font-mono text-[10.5px] text-text-faint mb-3">
            CURRENT PHASE — {currentPhase.code}
          </div>
          <div className="flex justify-between items-center mb-2.5">
            <Link to={`/phase/${currentPhase.id}`} className="text-[17px] font-semibold hover:text-blue">
              {currentPhase.title}
            </Link>
            <Badge tone="active">IN PROGRESS</Badge>
          </div>
          <ProgressBar percent={40} color="var(--color-green)" />
          <div className="text-[11.5px] text-text-faint mt-1.5">
            Keep going — check off tasks on the Phase Guide.
          </div>
        </Card>
      )}

      <Card className="p-5">
        <div className="font-mono text-[10.5px] text-text-faint mb-3">ACTIVITY</div>
        <div className="flex flex-col gap-2.5">
          {projects.length === 0 && completedPhases.length === 0 ? (
            <div className="text-[13px] text-text-faint">
              No activity yet — check off your first checklist item to see it here.
            </div>
          ) : (
            completedPhases
              .slice()
              .reverse()
              .map((phaseId) => (
                <div key={phaseId} className="flex justify-between items-center border-b border-border pb-2.5 last:border-0 last:pb-0">
                  <div className="flex gap-2.5 items-center">
                    <Badge tone="info">{phaseId.toUpperCase()}</Badge>
                    <span className="text-[13px] text-text-dim">Marked phase complete</span>
                  </div>
                </div>
              ))
          )}
        </div>
      </Card>
    </PageContainer>
  );
}