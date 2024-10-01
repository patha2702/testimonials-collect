import Image from "next/image";

interface CollectionHeaderProps {
  logoUrl: string;
  name: string;
  header: string;
  customMessage: string;
  questions: any;
}
const CollectionHeader = ({
  logoUrl,
  name,
  header,
  customMessage,
  questions,
}: CollectionHeaderProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center gap-2 text-center">
        <Image
          src={logoUrl}
          width={80}
          height={80}
          className="rounded-md"
          alt={name}
        />
        <h2 className="text-3xl font-bold">{header}</h2>
        <p className="font-medium">{customMessage}</p>
      </div>
      <div className="py-2 flex flex-col gap-2">
        <span className="text-3xl font-bold ">Questions</span>
        <ul className="list-disc">
          {questions &&
            questions.map(
              (
                question: {
                  question: string;
                },
                index: number
              ) =>
                question.question && (
                  <li key={index} className="ml-4">
                    {question.question}
                  </li>
                )
            )}
        </ul>
      </div>
    </div>
  );
};

export default CollectionHeader