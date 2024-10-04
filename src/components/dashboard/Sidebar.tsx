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
import CopyText from "../CopyText";

const Sidebar = ({ collectionId }: { collectionId: string }) => {
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
          <WallOfFameModal collectionId={collectionId} />
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

const WallOfFameModal = ({ collectionId }: { collectionId: string }) => {
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
              <div className="flex flex-col gap-2">
                <div className="w-full h-[70vh] max-sm:h-[50vh] border border-gray-400">
                  <iframe
                    src="http://localhost:3000/embeds/cm1rg9y2y0003cokjfycj39of/wall-of-fame"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
                <div>
                  <p className="text-lg font-medium leading-none py-2">
                    Add the following code to your website to display your
                    testimonials
                  </p>
                  <CopyText
                    text={`<iframe
                    src="http://localhost:3000/embeds/${collectionId}/wall-of-fame"
                    style={{
                      width: "100%",
                      height: "100%"
                    }}
                  ></iframe>`}
                  />
                </div>
                <div className="flex max-sm:flex-col max-sm:items-start items-center gap-2">
                  <span className="font-medium">Preview: </span>
                  <Link
                    href={`http://localhost:3000/embeds/${collectionId}/wall-of-fame`}
                    target="_blank"
                    className="underline hover:no-underline max-sm:w-28"
                  >
                    <span>{`http://localhost:3000/embeds/${collectionId}/wall-of-fame`}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
