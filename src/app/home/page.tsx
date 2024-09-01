"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const Home = () => {
  const session = useSession();
  return (
    <div>
      Home
      {session.data?.user && (
        <button
          className="px-4 py-2 rounded-md bg-red-400"
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;
