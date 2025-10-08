import React, { ReactNode } from "react";

const MusicLayout = ({
  children,
  sidebar,
  songs,
  player,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  songs: ReactNode;
  player: ReactNode;
}) => {
  return (
    <div className="flex w-full">
      <div className="">{sidebar}</div>
      <div className="px-2 w-full">
        {songs}
        {player}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MusicLayout;
