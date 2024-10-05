"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";
import React from "react";

const SignIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        signIn("google", {
          callbackUrl: "/home",
        });
      }}
      className="bg-indigo-600 text-white px-4 py-3 md:px-6 md:text-base rounded-xl text-sm font-semibold hover:bg-indigo-700 transition flex items-center"
    >
      {children}
      <ArrowRight className="ml-2 w-4 h-4" />
    </motion.button>
  );
};

export default SignIn;
