"use client";
import { Copy, CopyCheck } from "lucide-react";
import React, { useState } from "react";

const CopyText = ({ text }: { text: string }) => {
  const [textCopied, setTextCopied] = useState(false);
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
    setTextCopied(true);
    setTimeout(() => {
      setTextCopied(false);
    }, 2000);
  };
  return (
    <div className="p-2 bg-gray-300 rounded-sm font-medium flex justify-start items-center gap-2">
      <span>{text}</span>
      <div className="flex items-center">
        {textCopied ? (
          <CopyCheck />
        ) : (
          <button onClick={copyToClipboard}>
            <Copy className="animate-in" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CopyText;
