// pages/Projects.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import ProgressBar from "../components/common/ProgressBar";
import { useProjects } from "../hooks/useProjects";

export default function Projects() {
  const { projects, createProject, deleteProject, getProjectProgress, getProjectCurrentPhase } = useProjects();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    createProject(name);
    setName("");
    setShowForm(false);
  };

  return (
    <PageContainer>
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="font-mono text-[11px] text-blue uppercase tracking-wider">Projects</div>
          <h2 className="text-[26px] font-bold mt-2">Your workspace.</h2>
        </div>
        <Button onClick={() => setShowForm((s) => !s)}>+ New Project</Button>
      </div>

      {showForm && (
        <Card className="p-4 mb-4 max-w-md">
          <form onSubmit={handleCreate} className="flex gap-2">
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Project name"
              className="flex-1 bg-panel-2 border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-blue/50"
            />
            <Button type="submit" size="sm">Create</Button>
          </form>
        </Card>
      )}

      {projects.length === 0 ? (
        <Card className="p-8 text-center max-w-md">
          <p className="text-text-dim text-sm mb-3">No projects yet.</p>
          <p className="text-text-faint text-xs">
            Create one to start applying the roadmap to your own work.
          </p>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {projects.map((project) => {
            const pct = getProjectProgress(project);
            const current = getProjectCurrentPhase(project);
            return (
              <Card key={project.id} className="p-4.5 p-[18px] flex justify-between items-center gap-4">
                <Link to={`/projects/${project.id}`} className="flex-1">
                  <div className="font-semibold text-[15px] mb-1.5">{project.name}</div>
                  <div className="font-mono text-[11px] text-yellow">
                    ● {current ? current.title : "All phases complete"}
                  </div>
                </Link>
                <div className="flex items-center gap-3">
                  <div className="w-[120px]">
                    <ProgressBar percent={pct} />
                  </div>
                  <span className="font-mono text-xs text-text-faint w-9">{pct}%</span>
                  <Button variant="ghost" size="sm" onClick={() => deleteProject(project.id)}>
                    Delete
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </PageContainer>
  );
}