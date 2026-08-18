// components/common/Button.jsx

const variants = {
  primary: "bg-green text-[#04170a] hover:brightness-110",
  ghost: "bg-transparent text-text border border-border hover:bg-panel-2",
  danger: "bg-red/10 text-red border border-red/30 hover:bg-red/20",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  as: Tag = "button",
  ...props
}) {
  const sizeClasses = size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm";

  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-md font-semibold font-sans
        transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}