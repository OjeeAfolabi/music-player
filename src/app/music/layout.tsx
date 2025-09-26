import React, { ReactNode } from "react";

const MusicLayout = ({
  children,
  sidebar,
  songs,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  songs: ReactNode;
}) => {
  return (
    <div className="">
      <div>{children}</div>
      <div>{sidebar}</div>
      <div className="px-2">{songs}</div>
    </div>
  );
};

export default MusicLayout;
