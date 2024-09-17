import { NavLink } from "@/types";
import { BrickWall, GalleryVertical, House } from "lucide-react";

export const navLinks: NavLink[] = [
  {
    id: 0,
    label: "Home",
    href: "/home",
    icon: <House />,
  },
  {
    id: 1,
    label: "Wall of Fame",
    href: "/projects/1/wall-of-fame",
    icon: <BrickWall />,
  },
  {
    id: 2,
    label: "Carousel Slider",
    href: "/projects/1/carousel-slider",
    icon: <GalleryVertical />,
  },
];
