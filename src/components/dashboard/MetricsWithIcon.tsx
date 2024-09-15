import React from "react";
import { MetricsWithIconProps } from "@/types";

const MetricsWithIcon = ({ label, icon, value }: MetricsWithIconProps) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#ADC7D9]/20 p-2 rounded-lg">
      <div className="flex justify-start items-center gap-2">
        {icon}
        <span className="text-xl sm:text-2xl font-semibold text-blue-600">
          {label}
        </span>
      </div>
      <span className="text-[#6497B1] text-xl sm:text-3xl font-bold">
        {value}
      </span>
    </div>
  );
};

export default MetricsWithIcon;
