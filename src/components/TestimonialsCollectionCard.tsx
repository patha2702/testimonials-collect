import React from "react";
import Image from "next/image";
import { Video, Pencil } from "lucide-react";

interface Question {
  question: string;
}
interface TestimonialsCollectionCardProps {
  title: string;
  customMessage: string;
  questions: Question[];
}

const TestimonialsCollectionCard = () => {
  return (
    <div className="w-full border border-gray-500 shadow-xl rounded-md p-2">
      <div className="flex flex-col w-full p-2">
        <div className="flex flex-col items-center gap-1">
          <Image
            src={"/assets/images/user.jpg"}
            width={60}
            height={60}
            className="rounded-full"
            alt="project logo"
          />
          <h2 className="text-3xl font-bold">Title</h2>
          <p>Your custom message</p>
        </div>
        <div className="py-2 flex flex-col gap-2">
          <span className="text-3xl font-bold ">Questions</span>
          <ul className="list-disc">
            {[
              "What did you enjoy the most about our service?",
              "How has our product made a difference for you?",
              "Would you recommend us to others? If yes, why?",
            ].map((question, index) => (
              <li key={index} className="ml-4">
                {question}
              </li>
            ))}
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
