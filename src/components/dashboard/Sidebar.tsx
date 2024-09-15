"use client";
import React, { useState } from "react";
import {
  CircleCheck,
  Heart,
  PanelRightOpen,
  Text,
  Type,
  Video,
} from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/constants";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);
  return (
    <div>
      <button
        className="sm:hidden"
        onClick={() => {
          setIsSidebarHidden(!isSidebarHidden);
        }}
      >
        <PanelRightOpen />
      </button>
      <nav
        className={`py-2 px-4 flex flex-col gap-4 max-sm:${
          isSidebarHidden ? "hidden" : ""
        } transition-all`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>
                <SidebarLink icon={link.icon} label={link.label} />
              </Link>
            </li>
          ))}
          <button>
            <SidebarLink icon={<CircleCheck />} label="All" />
          </button>
          <button>
            <SidebarLink icon={<Type />} label="Text" />
          </button>
          <button>
            <SidebarLink icon={<Video />} label="Video" />
          </button>
          <button>
            <SidebarLink icon={<Heart />} label="Loved" />
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
