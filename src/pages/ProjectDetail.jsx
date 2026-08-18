// pages/ProjectDetail.jsx

import { useParams, Link, Navigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/common/Card";
import Badge from "../components/common/Badge";
import ProgressBar from "../components/common/ProgressBar";
import { phases } from "../data/phases";
import { useProjects } from "../hooks/useProjects";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const { projects, togglePhaseForProject, getProjectProgress } = useProjects();
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <Navigate to="/projects" replace />;

  const pct = getProjectProgress(project);

  return (
    <PageContainer>
      <div className="font-mono text-[11.5px] text-text-faint mb-2.5">
        <Link to="/projects" className="hover:text-text">Projects</Link>
        {" / "}
        <span className="text-blue">{project.name}</span>
      </div>

      <h2 className="text-[26px] font-bold mb-1">{project.name}</h2>
      <p className="text-text-faint text-xs mb-5">
        Created {new Date(project.createdAt).toLocaleDateString()}
      </p>

      <Card className="p-4 mb-6 max-w-[560px]">
        <div className="flex justify-between text-xs text-text-faint mb-2 font-mono">
          <span>PROGRESS</span>
          <span>{pct}%</span>
        </div>
        <ProgressBar percent={pct} />
      </Card>

      <div className="max-w-[560px] flex flex-col gap-2.5">
        {phases.map((phase) => {
          const done = project.completedPhases.includes(phase.id);
          return (
            <Card
              key={phase.id}
              className="p-3.5 px-4 flex justify-between items-center cursor-pointer hover:border-blue/40"
              onClick={() => togglePhaseForProject(project.id, phase.id)}
            >
              <div className="flex items-center gap-3">
                <span className={`font-mono text-[13px] w-4 ${done ? "text-green" : "text-text-faint"}`}>
                  {done ? "✓" : "○"}
                </span>
                <span className="text-sm font-medium">{phase.title}</span>
              </div>
              <Badge tone={done ? "done" : "neutral"}>{done ? "DONE" : "PENDING"}</Badge>
            </Card>
          );
        })}
      </div>
    </PageContainer>
  );
}