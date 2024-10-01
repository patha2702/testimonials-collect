"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

interface ImageUploadProps {
  onFileSelect: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileUpload = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative w-[60px] h-[60px]">
        {previewUrl ? (
          <Image
            src={previewUrl}
            alt="Selected project logo"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        ) : (
          <div className="w-full h-full rounded-full border bg-gray-400"></div>
        )}
      </div>
      <div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          onClick={handleFileUpload}
        >
          {selectedFile ? "Change Image" : "Upload Image"}
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
