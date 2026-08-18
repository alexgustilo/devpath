// pages/Templates.jsx

import PageContainer from "../components/layout/PageContainer";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { phases } from "../data/phases";

export default function Templates() {
  const templates = phases.filter((p) => p.template);

  return (
    <PageContainer>
      <div className="font-mono text-[11px] text-blue uppercase tracking-wider">Templates</div>
      <h2 className="text-[26px] font-bold mt-2 mb-6">Ready-to-use documents.</h2>

      <div className="flex flex-col gap-2.5 max-w-[640px]">
        {templates.map((phase) => (
          <Card key={phase.id} className="p-3.5 px-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-text-faint">📄</span>
              <div>
                <div className="font-mono text-[13.5px]">{phase.template}</div>
                <div className="font-mono text-[10.5px] text-text-faint mt-0.5">
                  {phase.code} · {phase.title}
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm">Download</Button>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}