import { Clock, HomeIcon, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const Sidebar = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading... ");
    }, 2000)
  );
  return (
    <aside className="w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen">
      <section>
        <h2 className="text-xl font-bold">MENU</h2>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <HomeIcon />
              Discover
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <TrendingUp />
              Trending
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Clock />
              Recent
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2 className="mt-6 text-xl font-bold">FAVORITE</h2>
        <ul className="mt-2 mb-[2rem]">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex mt-[2rem] gap-4">
              <Image
                src="https://plus.unsplash.com/premium_photo-1682125488670-29e72e5a7672?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={`Favorite ${i}`}
                width={30}
                height={10}
              />
              <div>
                <p className="text-white">Random</p>
                <p className="text-gray-500 text-sm">Artist</p>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
