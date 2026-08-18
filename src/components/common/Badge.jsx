// components/common/Badge.jsx

const tones = {
  done: "bg-green/15 text-green",
  active: "bg-yellow/15 text-yellow",
  locked: "bg-panel-2 text-text-faint border border-border",
  info: "bg-blue/15 text-blue",
  neutral: "bg-panel-2 text-text-dim border border-border",
};

export default function Badge({ children, tone = "neutral", className = "" }) {
  return (
    <span
      className={`inline-flex items-center font-mono text-[11px] font-semibold
        px-2.5 py-0.5 rounded-full ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}