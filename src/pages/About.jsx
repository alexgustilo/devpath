// pages/About.jsx

import PageContainer from "../components/layout/PageContainer";
import Card from "../components/common/Card";

export default function About() {
  return (
    <PageContainer>
      <div className="font-mono text-[11px] text-blue uppercase tracking-wider">About</div>
      <h2 className="text-[26px] font-bold mt-2 mb-4">Why DevPath exists.</h2>
      <p className="text-text-dim text-sm leading-relaxed max-w-[560px] mb-4.5 mb-[18px]">
        Most beginners learn syntax before they learn process — so their first real project falls
        apart somewhere between "it works on my machine" and "how do I even test this." DevPath is
        the missing map: the same 13-phase process working developers actually follow, explained in
        plain language.
      </p>
      <Card className="p-4.5 p-[18px] max-w-[560px]">
        <div className="font-mono text-[11px] text-text-faint mb-2">BUILT WITH</div>
        <div className="text-[13px] text-text-dim">
          React · Vite · Tailwind CSS · React Router · LocalStorage
        </div>
      </Card>
    </PageContainer>
  );
}