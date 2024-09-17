"use client";
import { useRef } from "react";

import React from "react";

const ImageUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileUpload = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
      />
      <button
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        onClick={handleFileUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default ImageUpload;
