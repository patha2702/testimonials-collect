import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link className="flex items-center cursor-pointer" href={"/"}>
      <Image
        src="/assets/images/logo.png"
        alt="TestiCollect Logo"
        width={50}
        height={50}
      />
      <div className="flex flex-col">
        <div className="max-sm:hidden text-2xl font-bold text-indigo-600">
          TestimonialsCollect
        </div>
        <div className="sm:hidden text-2xl font-bold text-indigo-600">
          Testimonials
        </div>
      </div>
    </Link>
  );
};

export default Logo;
