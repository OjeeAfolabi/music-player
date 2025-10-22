import React from "react";

const Song = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div className="text-black text-2xl pt-6">Song : {id}</div>;
};

export default Song;
