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
          <WallOfFameModal
            collectionId={collectionId}
            type="wall-of-fame"
            actionButton={
              <SidebarLink icon={<BrickWall />} label="Wall of Fame" />
            }
          />
          <WallOfFameModal
            collectionId={collectionId}
            type="carousel-slider"
            actionButton={
              <SidebarLink icon={<GalleryVertical />} label="Carousel Slider" />
            }
          />

          {/* <button>
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
          </button> */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

interface WallOfFameModalProps {
  collectionId: string;
  type: string;
  actionButton: React.ReactNode;
}
const WallOfFameModal = ({
  collectionId,
  type,
  actionButton,
}: WallOfFameModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const title = type === "wall-of-fame" ? "Wall of Fame" : "Carousel Slider";
  let siteUrl = "";
  if (window?.location !== undefined) {
    siteUrl += `${window.location.protocol}//${window.location.hostname}`;
  }

  const wallOfFameEmbedCode = `
      <iframe
        id="testimonials-widget"
        src="${siteUrl}/embeds/${collectionId}/wall-of-fame"
        width="100%"
        height="500px"
      ></iframe>
      <script>
      let iframe = document.getElementById("testimonials-widget");
  window.addEventListener("message", (event) => {
    if (event.origin !== "http://localhost:3000") return;
    if (iframe && event.data.type === "RESIZE_IFRAME") {
      iframe.style.height = event.data.height + "px";
    }
    if (iframe && event.data.type === "TESTIMONIAL_TIME_SPENT") {
      const watchTime = event.data.timeSpent / 1000
      fetch("${siteUrl}/api/watch-time", {
        method: "PUT",
        data: JSON.stringify({
          id: ${collectionId},
          time: watchTime
        })
      }).then(res => {
        if (!res.ok) {
          console.error("Failed to update watch time")
        }
      })
    }
  });
      </script>
  
  `;

  const carouselEmbedCode = `
    <iframe
        id="testimonials-widget"
        src="${siteUrl}/embeds/${collectionId}/carousel-slider"
        width="100%"
        height="900px"
      ></iframe>
      <script>
      let iframe = document.getElementById("testimonials-widget");
  window.addEventListener("message", (event) => {
    if (event.origin !== "http://localhost:3000") return;
    if (iframe && event.data.type === "TESTIMONIAL_TIME_SPENT") {
      const watchTime = event.data.timeSpent / 1000
      fetch("${siteUrl}/api/watch-time", {
        method: "PUT",
        data: JSON.stringify({
          id: ${collectionId},
          time: watchTime
        })
      }).then(res => {
        if (!res.ok) {
          console.error("Failed to update watch time")
        }
      })
    }
  });
      </script>
  `;

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>{actionButton}</button>

      {isModalOpen && (
        <div className="z-20 fixed h-dvh inset-0 bg-black bg-opacity-50">
          <div className="bg-white h-screen overflow-y-scroll rounded-xl border border-black p-4 max-w-5xl scrollbar-hide mx-auto">
            <div className="relative">
              <button
                className="absolute top-0 right-0"
                onClick={() => setIsModalOpen(false)}
              >
                <X />
              </button>
              <h1 className="text-2xl font-bold text-center py-2">{title}</h1>
              <div className="flex flex-col gap-2">
                <div className="w-full h-[70vh] max-sm:h-[50vh] border border-gray-400">
                  {type === "wall-of-fame" ? (
                    <iframe
                      src={`/embeds/${collectionId}/wall-of-fame`}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    ></iframe>
                  ) : (
                    <iframe
                      src={`/embeds/${collectionId}/carousel-slider`}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    ></iframe>
                  )}
                </div>
                <div className="flex max-sm:flex-col max-sm:items-start items-center gap-2">
                  <span className="font-medium">Preview: </span>
                  <Link
                    href={`${siteUrl}/embeds/${collectionId}/${type}`}
                    target="_blank"
                    className="underline hover:no-underline max-sm:w-28"
                  >
                    <span>{`${siteUrl}/embeds/${collectionId}/${type}`}</span>
                  </Link>
                </div>
                <div>
                  <p className="text-lg font-medium leading-none py-2">
                    Add the following code to your website to display your
                    {` ${title.toLowerCase()}`}
                  </p>
                </div>
                <CopyText
                  text={
                    type === "wall-of-fame"
                      ? wallOfFameEmbedCode
                      : carouselEmbedCode
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
