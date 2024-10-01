import React from "react";
import Image from "next/image";
import { Video, Pencil } from "lucide-react";
import { QuestionType } from "@/schemas";

export interface TestimonialsCollectionCardProps {
  name: string;
  header: string;
  customMessage: string;
  logo: {
    url: string;
    width: number;
    height: number;
  };
  questions: QuestionType;
}

const TestimonialsCollectionCard = ({
  header,
  name,
  customMessage,
  logo,
  questions,
}: TestimonialsCollectionCardProps) => {
  return (
    <div className="w-full border border-gray-500 shadow-xl rounded-md p-2 mt-2">
      <div className="flex flex-col w-full p-2">
        <div className="flex flex-col items-center gap-1 text-center">
          <Image
            src={logo.url}
            width={logo.width}
            height={logo.height}
            className="rounded-full"
            alt={name}
          />
          <h2 className="text-3xl font-bold">{header}</h2>
          <p>{customMessage}</p>
        </div>
        <div className="py-2 flex flex-col gap-2">
          <span className="text-3xl font-bold ">Questions</span>
          <ul className="list-disc">
            {questions &&
              Object.entries(questions).map(
                ([question, answer], index) =>
                  answer !== "" && (
                    <li key={index} className="ml-4">
                      {answer}
                    </li>
                  )
              )}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <button className="px-4 py-2 w-full rounded-lg  bg-blue-600 hover:bg-blue-700 flex justify-center items-center gap-2">
            <Video className="text-white" />
            <span className="text-white text-xl font-medium">
              Record a Video
            </span>
          </button>
          <button className="px-4 py-2 w-full rounded-lg  bg-slate-800 hover:bg-slate-800 flex justify-center items-center gap-2">
            <Pencil className="text-white" />
            <span className="text-white text-xl font-medium">Send in Text</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCollectionCard;
