"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        signIn("google", {
          callbackUrl: "/home",
        });
      }}
      className="bg-indigo-600 text-white px-4 py-2 md:px-6 md:py-4 md:text-base rounded-full text-sm font-semibold hover:bg-indigo-700 transition flex items-center"
    >
      Collect
      <ArrowRight className="ml-2 w-4 h-4" />
    </motion.button>
  );
};

export default SignIn;
