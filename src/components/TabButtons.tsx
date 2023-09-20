import { ArchiveBoxIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import React from "react";

const TabButtons = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex overflow-hidden border-2 border-primary rounded-xl w-fit">
      <button
        className={`group ${
          activeTab === "notes" ? "text-background bg-primary" : "text-white"
        } hover:bg-primary hover:text-background flex items-center gap-2 px-3 py-2 transition-all duration-200`}
        onClick={() => setActiveTab("notes")}
      >
        <ListBulletIcon
          className={`w-5 ${
            activeTab !== "notes" && "text-primary"
          } group-hover:text-background pointer-events-none transition-all duration-200`}
        />
        <span className="pointer-events-none">Notes</span>
      </button>
      <button
        className={`group ${
          activeTab === "archived" ? "text-background bg-primary" : "text-white"
        } hover:bg-primary hover:text-background flex items-center gap-2 px-3 py-2 transition-all duration-200`}
        onClick={() => setActiveTab("archived")}
      >
        <ArchiveBoxIcon
          className={`w-5 ${
            activeTab !== "archived" && "text-primary"
          } group-hover:text-background pointer-events-none transition-all duration-200`}
        />
        <span className="pointer-events-none">Archived</span>
      </button>
    </div>
  );
};

export default TabButtons;
