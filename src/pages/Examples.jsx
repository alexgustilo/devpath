// pages/Examples.jsx

import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/common/Card";
import Badge from "../components/common/Badge";
import { phases } from "../data/phases";

export default function Examples() {
  return (
    <PageContainer>
      <div className="font-mono text-[11px] text-blue uppercase tracking-wider">Examples</div>
      <h2 className="text-[26px] font-bold mt-2 mb-6">Practical examples, per phase.</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {phases.map((phase) => (
          <Card key={phase.id} className="p-4">
            <Badge tone="info">{phase.code} · {phase.title}</Badge>
            <div className="font-semibold text-[14.5px] mt-2.5 mb-1.5">{phase.example.title}</div>
            <p className="text-[12.5px] text-text-dim leading-relaxed mb-3">{phase.example.summary}</p>
            <Link to={`/phase/${phase.id}`} className="text-[12px] text-blue hover:underline">
              Open {phase.title} guide →
            </Link>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}