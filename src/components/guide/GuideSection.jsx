// components/guide/GuideSection.jsx
// One labeled block within a Phase Guide (WHAT / WHY / HOW / etc).
// Accepts either plain text (`text`) or a list (`items`).

import Card from "../common/Card";

export default function GuideSection({ label, text, items, color = "text-blue" }) {
  return (
    <Card className="p-4">
      <div className={`font-mono text-[11px] mb-1.5 ${color}`}>{label}</div>
      {text && <p className="text-[13.5px] text-text-dim leading-relaxed m-0">{text}</p>}
      {items && (
        <ol className="text-[13.5px] text-text-dim leading-relaxed m-0 pl-4.5 pl-[18px] space-y-1.5 list-decimal">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      )}
    </Card>
  );
}