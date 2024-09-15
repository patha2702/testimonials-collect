import React from "react";
import Logo from "./Logo";
import Image from "next/image";

const Header = () => {
  return (
    <header className="z-10 sticky top-0 max-w-5xl mx-auto py-2 pr-4 flex justify-between items-center bg-white/20 backdrop-blur-sm border-b border-b-[#B3CDE0]">
      <Logo />
      <Image
        src={"/assets/images/user.jpg"}
        width={50}
        height={50}
        alt="user avatar"
        className="rounded-full"
      />
    </header>
  );
};

export default Header;
