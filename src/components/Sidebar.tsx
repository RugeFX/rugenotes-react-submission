import { CircleStackIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type TIcon = typeof CircleStackIcon;

interface INavItem {
  label: string;
  to: string;
  Icon?: TIcon;
}

const navItems: INavItem[] = [{ label: "Notes", to: "/", Icon: ListBulletIcon }, { label: "Archived", to: "arc" }];

const NavItem = ({
  to,
  label,
  Icon = CircleStackIcon,
  active = false,
}: INavItem & { active?: boolean }) => {
  return (
    <button
      className={`group w-full px-3 py-2 flex items-center gap-5 text-xl text-white hover:bg-zinc-700 ${active && "bg-zinc-700"
        }`}
    >
      <div
        className={`rounded-xl p-2 group-hover:bg-gradient-to-br group-hover:from-emerald-300 group-hover:to-sky-400 ${active ? "bg-gradient-to-br from-emerald-300 to-sky-400" : "bg-zinc-700"
          }`}
      >
        <Icon className={`w-6 text-white group-hover:text-zinc-700 ${active && "text-zinc-700"}`} />
      </div>
      <span className={`text-base ${active && "font-semibold"}`}>{label}</span>
    </button>
  );
};

const Sidebar = ({activeIndex}: {activeIndex: number}) => {
  return (
    <aside className="w-64 py-5 px-3 flex-shrink-0 bg-zinc-800 min-h-screen flex flex-col items-center gap-3">
      <h1 className="text-3xl font-bold bg-gradient-to-br from-emerald-300 to-sky-400 bg-clip-text text-transparent">
        Ruge Notes
      </h1>
      <hr className="border-t-2 border-white" />
      <div className="w-full overflow-hidden rounded-xl border-2 border-zinc-700">
        {navItems.map((i, idx) => (
          <NavItem
            key={i.label}
            label={i.label}
            to={i.to}
            Icon={i.Icon}
            active={activeIndex === idx}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
