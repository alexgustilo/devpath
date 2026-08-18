// components/guide/ChecklistItem.jsx

export default function ChecklistItem({ label, checked, onToggle }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer select-none group">
      <span
        className={`w-[15px] h-[15px] rounded border flex-shrink-0 transition-colors
          ${checked ? "bg-green border-green" : "border-border group-hover:border-text-faint"}`}
      >
        {checked && (
          <svg viewBox="0 0 24 24" fill="none" stroke="#04170a" strokeWidth="3.5">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onToggle} className="sr-only" />
      <span className={`text-[13px] ${checked ? "text-text-faint line-through" : "text-text"}`}>
        {label}
      </span>
    </label>
  );
}