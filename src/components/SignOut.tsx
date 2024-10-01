"use client";
import React from "react";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button
      className="px-4 py-2 bg-red-400 rounded-lg"
      onClick={() => {
        signOut({
          callbackUrl: "/",
        });
      }}
    >
      Sign out
    </button>
  );
};

export default SignOut;
