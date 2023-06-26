import Link from "next/link";
import React from "react";

const CommingSoonCard = () => {
  return (
    <Link href={"/content"} className="flex flex-col bg-slate-200 rounded-lg">
      <div
        style={{
          backgroundImage: `url(https://i0.wp.com/comicstans.com/wp-content/uploads/2022/09/maxresdefaultdp.jpeg?fit=1280%2C750&ssl=1)`,
        }}
        className="w-[300px] h-[200px] rounded-lg bg-cover bg-center"
      ></div>
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-xl font-bold">Deadpool 3</h1>
        <h3>
          <span>Release date: </span>
          <span>May 3, 2024</span>
        </h3>
      </div>
    </Link>
  );
};

export default CommingSoonCard;
