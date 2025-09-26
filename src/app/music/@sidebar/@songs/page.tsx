import React from "react";
import Image from "next/image";
import { Clock, Heart } from "lucide-react";

const Songs = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading... ");
    }, 3000)
  );

  const songs = [
    {
      id: 1,
      artist: "The Weeknd",
      title: "Blinding Lights",
      duration: "3:20",
    },
    {
      id: 2,
      artist: "Dua Lipa",
      title: "Levitating",
      duration: "3:23",
    },
    {
      id: 3,
      artist: "Ed Sheeran",
      title: "Shape of You",
      duration: "3:54",
    },
    {
      id: 4,
      artist: "Adele",
      title: "Easy On Me",
      duration: "3:45",
    },
    {
      id: 5,
      artist: "Drake",
      title: "God's Plan",
      duration: "3:19",
    },
    {
      id: 6,
      artist: "Billie Eilish",
      title: "Bad Guy",
      duration: "3:14",
    },
  ];

  return (
    <div className="w-full px-4">
      <h2 className="text-3xl text-white mt-8 font-fold mb-6">
        Songs Collection
      </h2>
      <ul className="space-y-4">
        {songs.map((song) => (
          <li
            key={song.id}
            className="flex items-center justify-between p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center gap-5">
              <Image
                width={40}
                height={40}
                src="https://images.unsplash.com/photo-1723961617032-ef69c454cb31?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div>
                <p className="text-white font-medium">{song.artist}</p>
                <p className="text-gray-400 text-sm">{song.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{song.duration}</span>
              </div>
              <Heart size={16} className="cursor-pointer hover:text-red-500" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
