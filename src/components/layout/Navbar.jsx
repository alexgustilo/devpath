// components/layout/Navbar.jsx

import { NavLink } from "react-router-dom";
import SearchBar from "../common/SearchBar";
import Button from "../common/Button";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/examples", label: "Examples" },
  { to: "/templates", label: "Templates" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-16 flex items-center justify-between px-6
      bg-bg/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-9">
        <NavLink to="/" className="flex items-center gap-2 font-extrabold text-[16.5px] tracking-tight">
          <span className="w-[26px] h-[26px] rounded-[7px] bg-gradient-to-br from-blue to-purple
            flex items-center justify-center font-mono font-bold text-[13px] text-[#04101c]">
            {"</>"}
          </span>
          DevPath
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `relative text-[13.5px] font-medium px-3.5 py-2 rounded-md transition-colors
                ${isActive ? "text-text bg-panel-2 after:absolute after:left-3.5 after:right-3.5 after:-bottom-[13px] after:h-0.5 after:bg-blue after:rounded-full" : "text-text-dim hover:text-text"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <SearchBar value="" onChange={() => {}} className="hidden lg:flex w-[150px]" />
        <Button size="sm">Continue Project →</Button>
      </div>
    </header>
  );
}