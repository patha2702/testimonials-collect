import React from "react";

interface SidebarLinkProps {
  label: string;
  icon: React.ReactNode;
}
const SidebarLink = ({ label, icon }: SidebarLinkProps) => {
  return (
    <div className="flex justify-start items-center gap-4 px-4 py-2 rounded-lg hover:bg-slate-100 hover:font-medium">
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default SidebarLink;
