// components/dashboard/StatCard.jsx

import Card from "../common/Card";

export default function StatCard({ label, value, subtext, tone, className = "" }) {
  return (
    <Card className={`p-4.5 p-[18px] ${className}`}>
      <div className="font-mono text-[10.5px] text-text-faint">{label}</div>
      <div className="text-[22px] font-bold mt-1.5">{value}</div>
      {subtext && (
        <div className={`text-[11.5px] mt-1 ${tone ? tone : "text-text-faint"}`}>{subtext}</div>
      )}
    </Card>
  );
}