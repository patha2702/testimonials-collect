"use client";
import { Trash2, X } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface DeleteProps {
  type: string;
  id: string | number;
  name: string;
}

const Delete = ({ type, id, name }: DeleteProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const handleDeleteItem = async () => {
    if (type && id) {
      const res = await fetch(`/api/${type}`, {
        method: "DELETE",
        body: JSON.stringify({
          id: id,
        }),
      });
      if (!res.ok) {
        console.error("Failed to delete collection");
      }
      router.refresh();
    }
  };
  return (
    <div>
      <button
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => {
          setIsModalVisible((prev) => !prev);
        }}
      >
        <Trash2 className="text-black/80 hover:text-black " />
      </button>
      {isModalVisible && (
        <div className="z-20 fixed h-dvh inset-0 bg-black bg-opacity-50">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[500px] relative bg-white p-4 rounded-md">
              <button
                className="absolute top-0 right-0"
                onClick={() => setIsModalVisible(false)}
              >
                <X />
              </button>
              <div className="w-full h-full">
                <form className="p-4 flex flex-col items-center gap-2">
                  <h1 className="text-center text-xl font-semibold text-red-600">{`Are you sure you want to delete ${type} ${name}? `}</h1>
                  <button
                    className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600"
                    onClick={() => {
                      handleDeleteItem();
                    }}
                  >{`Delete ${type} ${name}`}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delete;
