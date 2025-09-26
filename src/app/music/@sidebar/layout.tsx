import React, { ReactNode } from "react";

const SidebarLayout = ({
  children,
  songs,
}: {
  children: ReactNode;
  songs: ReactNode;
}) => {
  return <div className="flex w-full">
        <div>{children}</div>
        <div className="flex-1 p-6  w-[100%]">{songs}</div>
  </div>;
};

export default SidebarLayout;
