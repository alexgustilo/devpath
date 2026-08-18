// components/common/ProgressBar.jsx

export default function ProgressBar({ percent = 0, color = "var(--color-green)", height = 6 }) {
  const clamped = Math.min(100, Math.max(0, percent));

  return (
    <div
      className="w-full bg-panel-2 rounded-full overflow-hidden"
      style={{ height }}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full transition-all duration-300"
        style={{ width: `${clamped}%`, backgroundColor: color }}
      />
    </div>
  );
}