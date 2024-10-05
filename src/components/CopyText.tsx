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
    <div className="p-2 relative bg-slate-600 rounded-sm text-white font-medium">
      <p className="w-full text-sm text-wrap">{text}</p>
      <div className="flex items-center absolute top-2 right-2">
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
