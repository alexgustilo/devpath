// pages/PhaseGuide.jsx

import { useParams, Link, Navigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/common/Card";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import GuideSection from "../components/guide/GuideSection";
import ChecklistItem from "../components/guide/ChecklistItem";
import { getPhaseById } from "../data/phases";
import { useProgress } from "../hooks/useProgress";

export default function PhaseGuide() {
  const { phaseId } = useParams();
  const phase = getPhaseById(phaseId);
  const {
    isPhaseComplete,
    isItemChecked,
    toggleChecklistItem,
    markPhaseComplete,
    markPhaseIncomplete,
  } = useProgress();

  if (!phase) return <Navigate to="/roadmap" replace />;

  const done = isPhaseComplete(phase.id);
  const checkedCount = phase.checklist.filter((item) => isItemChecked(item.id)).length;
  const allChecked = checkedCount === phase.checklist.length;

  return (
    <PageContainer>
      <div className="font-mono text-[11.5px] text-text-faint mb-2.5">
        <Link to="/roadmap" className="hover:text-text">Roadmap</Link>
        {" / "}
        <span className="text-blue">{phase.code} · {phase.title}</span>
      </div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="font-mono text-[11px] text-blue uppercase tracking-wider">
            Phase {String(phase.order).padStart(2, "0")}
          </div>
          <h2 className="text-[28px] font-bold mt-1.5">{phase.title}</h2>
          <p className="text-text-dim text-sm mt-1">{phase.tagline}</p>
        </div>
        <Badge tone={done ? "done" : "neutral"}>{done ? "DONE" : "NOT STARTED"}</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <div className="flex flex-col gap-3">
          <GuideSection label="WHAT" text={phase.what} />
          <GuideSection label="WHY" text={phase.why} />
          <GuideSection label="HOW" items={phase.how} />

          <Card className="p-4">
            <div className="font-mono text-[11px] text-blue mb-1.5">EXAMPLE</div>
            <div className="text-sm font-semibold mb-1">{phase.example.title}</div>
            <p className="text-[13.5px] text-text-dim leading-relaxed m-0">{phase.example.summary}</p>
          </Card>

          <Card className="p-4">
            <div className="font-mono text-[11px] text-blue mb-2">
              CHECKLIST ({checkedCount}/{phase.checklist.length})
            </div>
            <div className="flex flex-col gap-2.5">
              {phase.checklist.map((item) => (
                <ChecklistItem
                  key={item.id}
                  label={item.label}
                  checked={isItemChecked(item.id)}
                  onToggle={() => toggleChecklistItem(item.id)}
                />
              ))}
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-3">
          <Card className="p-4">
            <div className="font-mono text-[10.5px] text-text-faint">DELIVERABLE</div>
            <div className="text-[13.5px] mt-1.5">{phase.deliverable}</div>
          </Card>

          {phase.template && (
            <Card className="p-4">
              <div className="font-mono text-[10.5px] text-text-faint">TEMPLATE</div>
              <Link to="/templates" className="block text-[13.5px] mt-1.5 text-blue hover:underline">
                → {phase.template}
              </Link>
            </Card>
          )}

          {phase.nextStep && (
            <Card className="p-4">
              <div className="font-mono text-[10.5px] text-text-faint">NEXT STEP</div>
              <Link to={`/phase/${phase.nextStep}`} className="block text-[13.5px] mt-1.5 hover:text-blue">
                {getPhaseById(phase.nextStep)?.code} · {getPhaseById(phase.nextStep)?.title}
              </Link>
            </Card>
          )}

          <Button
            variant={done ? "ghost" : "primary"}
            onClick={() => (done ? markPhaseIncomplete(phase.id) : markPhaseComplete(phase.id))}
            disabled={!done && !allChecked}
          >
            {done ? "Mark as incomplete" : "Mark phase complete"}
          </Button>
          {!done && !allChecked && (
            <p className="text-[11.5px] text-text-faint -mt-1.5">
              Check off every item to complete this phase.
            </p>
          )}
        </div>
      </div>
    </PageContainer>
  );
}