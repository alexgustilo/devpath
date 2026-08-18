// components/layout/Footer.jsx

import { Link } from "react-router-dom";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { to: "/roadmap", label: "Roadmap" },
      { to: "/templates", label: "Templates" },
      { to: "/examples", label: "Examples" },
    ],
  },
  {
    title: "Workspace",
    links: [
      { to: "/dashboard", label: "Dashboard" },
      { to: "/projects", label: "Projects" },
    ],
  },
  {
    title: "Info",
    links: [{ to: "/about", label: "About" }],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 pt-9 pb-6 mt-8">
      <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <Link to="/" className="flex items-center gap-2 font-extrabold text-[15px] mb-2.5">
            <span className="w-[24px] h-[24px] rounded-[6px] bg-gradient-to-br from-blue to-purple
              flex items-center justify-center font-mono font-bold text-[11px] text-[#04101c]">
              {"</>"}
            </span>
            DevPath
          </Link>
          <p className="text-[13px] text-text-faint max-w-[220px] leading-relaxed">
            A guided path from idea to shipped product, for developers starting their first real project.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="font-mono text-[11px] text-text-faint uppercase tracking-wider mb-3">
              {col.title}
            </div>
            {col.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-[13px] text-text-dim hover:text-text mb-2.5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-[1080px] mx-auto mt-6 pt-4.5 pt-[18px] border-t border-border
        text-xs text-text-faint flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} DevPath</span>
        <span>Built for students & first-time builders</span>
      </div>
    </footer>
  );
}