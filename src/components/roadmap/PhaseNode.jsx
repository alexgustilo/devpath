// components/roadmap/PhaseNode.jsx

import { Link } from "react-router-dom";
import Card from "../common/Card";
import Badge from "../common/Badge";

export default function PhaseNode({ phase, status }) {
  // status: "done" | "active" | "locked"
  const iconByStatus = { done: "✓", active: "●", locked: "○" };
  const colorByStatus = {
    done: "text-green",
    active: "text-yellow",
    locked: "text-text-faint",
  };
  const badgeToneByStatus = { done: "done", active: "active", locked: "locked" };
  const badgeLabelByStatus = { done: "DONE", active: "IN PROGRESS", locked: "LOCKED" };

  return (
    <Card
      as={Link}
      to={`/phase/${phase.id}`}
      className={`flex items-center justify-between px-4 py-3.5 mb-2.5 hover:border-blue/40 transition-colors
        ${status === "locked" ? "opacity-50 pointer-events-none" : ""}`}
    >
      <div className="flex items-center gap-3">
        <span className={`font-mono text-[13px] w-4 ${colorByStatus[status]}`}>
          {iconByStatus[status]}
        </span>
        <div>
          <div className="font-semibold text-sm">{phase.title}</div>
          <div className="font-mono text-[10.5px] text-text-faint mt-0.5">{phase.code}</div>
        </div>
      </div>
      <Badge tone={badgeToneByStatus[status]}>{badgeLabelByStatus[status]}</Badge>
    </Card>
  );
}