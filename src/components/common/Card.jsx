// components/common/Card.jsx

export default function Card({ children, className = "", as: Tag = "div", ...props }) {
  return (
    <Tag
      className={`bg-panel border border-border rounded-lg ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}