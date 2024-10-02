"use client";
import React, { useEffect, useState } from "react";
import {
  BrickWall,
  CircleCheck,
  GalleryVertical,
  Heart,
  House,
  PanelRightOpen,
  Type,
  Video,
  X,
} from "lucide-react";
import SidebarLink from "./SidebarLink";
import Link from "next/link";

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
          <Link href="/home">
            <SidebarLink icon={<House />} label="Home" />
          </Link>
          <WallOfFameModal />
          <button>
            <SidebarLink icon={<GalleryVertical />} label="Carousel Slider" />
          </button>
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

const WallOfFameModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        <SidebarLink icon={<BrickWall />} label="Wall of Fame" />
      </button>

      {isModalOpen && (
        <div className="z-20 fixed h-dvh inset-0 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl border border-black p-4 max-w-5xl h-full mx-auto">
            <div className="relative">
              <button
                className="absolute top-0 right-0"
                onClick={() => setIsModalOpen(false)}
              >
                <X />
              </button>
              <div>
                <div className="w-full h-[70vh] border border-black">
                  <iframe
                    src="http://localhost:3000/embeds/cm1rg9y2y0003cokjfycj39of/wall-of-fame"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
