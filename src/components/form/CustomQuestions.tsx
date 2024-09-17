import React from "react";
import Label from "./Label";
import Input from "./Input";

const CustomQuestion = () => {
  return (
    <fieldset className="flex flex-col">
      <Label label="Questions" required={false} />
      <div className="flex flex-col gap-2">
        <Input
          name="q1"
          type="text"
          placeholder="What did you enjoy the most about our service/product?"
        />
        <Input
          name="q2"
          type="text"
          placeholder="How has our product made a difference for you?"
        />
        <Input
          name="q3"
          type="text"
          placeholder="Would you recommend us to others? If yes, why?"
        />
      </div>
    </fieldset>
  );
};

export default CustomQuestion;
