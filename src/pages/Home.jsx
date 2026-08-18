// pages/Home.jsx

import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/common/Card";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import { phases } from "../data/phases";
import { useProgress } from "../hooks/useProgress";

const FEATURES = [
  { tag: "// guides", title: "Guides", desc: "Plain-language explanation of every phase — no jargon left unexplained." },
  { tag: "// checklists", title: "Checklists", desc: "Concrete tasks you can check off, so \"done\" is never a guess." },
  { tag: "// workspace", title: "Workspace", desc: "Apply the roadmap to your own project and track it phase by phase." },
];

export default function Home() {
  const { completedPhases, currentPhase } = useProgress();

  return (
    <PageContainer>
      <div className="font-mono text-[11px] text-blue uppercase tracking-wider">DevPath</div>
      <h1 className="text-4xl font-extrabold leading-tight mt-3 mb-3.5 max-w-[600px] tracking-tight">
        Build software the way it's actually meant to be built.
      </h1>
      <p className="text-text-dim text-[15px] max-w-[480px] leading-relaxed mb-6.5 mb-[26px]">
        A guided path from idea to shipped product — 13 phases, each with what to do, why it matters,
        and how to do it. Made for students writing their first real project.
      </p>
      <div className="flex gap-2.5 mb-10">
        <Button as={Link} to={currentPhase ? `/phase/${currentPhase.id}` : "/roadmap"}>
          ▶ Start Roadmap
        </Button>
        <Button as={Link} to="/dashboard" variant="ghost">
          View Dashboard
        </Button>
      </div>

      <Card className="p-5 mb-7">
        <div className="font-mono text-[11px] text-text-faint mb-3.5">pipeline preview</div>
        <div className="flex flex-wrap gap-2">
          {phases.map((phase) => {
            const done = completedPhases.includes(phase.id);
            const active = currentPhase?.id === phase.id;
            return (
              <Badge key={phase.id} tone={done ? "done" : active ? "active" : "neutral"}>
                {phase.title}
              </Badge>
            );
          })}
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {FEATURES.map((f) => (
          <Card key={f.title} className="p-4.5 p-[18px]">
            <div className="font-mono text-green text-xs">{f.tag}</div>
            <div className="font-semibold text-[15px] mt-2 mb-1.5">{f.title}</div>
            <div className="text-text-dim text-[13px] leading-relaxed">{f.desc}</div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}