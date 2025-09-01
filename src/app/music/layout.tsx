import React, { ReactNode } from "react";

const MusicLayout = ({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) => {
  return (
    <div className="flex">
      {sidebar}
      <div>{children}</div>
    </div>
  );
};

export default MusicLayout;
