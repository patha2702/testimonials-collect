import React from "react";
import Image from "next/image";

const ThankyouPage = () => {
  return (
    <div className="max-w-5xl mx-auto h-screen text-center p-4 flex flex-col justify-center items-center gap-4">
      <Image
        src={"/assets/images/thank-you.gif"}
        width={500}
        height={500}
        alt="thank you"
      />
      <span className="text-3xl font-bold">
        🎉 Thank you for sharing your feedback!
      </span>
      <p className="text-lg font-medium">
        We appreciate you taking the time to share your experience. Your input
        helps us improve and inspire others. 😊
      </p>
    </div>
  );
};

export default ThankyouPage;
