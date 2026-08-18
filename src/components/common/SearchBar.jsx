// components/common/SearchBar.jsx

export default function SearchBar({ value, onChange, placeholder = "Search...", className = "" }) {
  return (
    <div
      className={`flex items-center gap-2 bg-panel-2 border border-border rounded-md
        px-3 py-1.5 text-text-faint focus-within:border-blue/50 ${className}`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent outline-none text-xs text-text placeholder:text-text-faint w-full"
      />
    </div>
  );
}