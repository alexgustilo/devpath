// components/layout/PageContainer.jsx
// Consistent width/padding wrapper used by every page. Keeps layout rules
// (max-width, gutters, top spacing) in one place instead of repeated per page.

export default function PageContainer({ children, className = "", wide = false }) {
  return (
    <main
      className={`mx-auto px-6 pt-11 pb-8 min-h-[60vh] ${wide ? "max-w-[1280px]" : "max-w-[1080px]"} ${className}`}
    >
      {children}
    </main>
  );
}