import React from "react";
import Input from "./Input";
import Label from "./Label";

interface InputWithLabelProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}
const InputWithLabel = ({
  name,
  label,
  placeholder,
  type,
  required,
}: InputWithLabelProps) => {
  return (
    <fieldset className="flex flex-col">
      <Label label={label} required={required} />
      <Input name={name} placeholder={placeholder} type={type} />
    </fieldset>
  );
};

export default InputWithLabel;
