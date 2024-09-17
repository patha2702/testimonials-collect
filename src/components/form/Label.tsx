import React from "react";

interface LabelProps {
  label: string;
  required: boolean;
}
const Label = ({ label, required }: LabelProps) => {
  return (
    <label className="text-xl font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;
