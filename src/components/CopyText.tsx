"use client";
import { Copy, CopyCheck } from "lucide-react";
import React, { useState } from "react";
import { Prism } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
    <div className="relative">
      <Prism language={"javascript"} style={dark}>
        {text}
      </Prism>
      <div className="flex items-center absolute top-2 right-2">
        {textCopied ? (
          <CopyCheck className="text-white" />
        ) : (
          <button onClick={copyToClipboard}>
            <Copy className="animate-in text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CopyText;
