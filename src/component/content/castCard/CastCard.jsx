import Link from "next/link";
import React from "react";

const CastCard = () => {
  return (
    <Link
      href={"/person"}
      className="flex gap-6 items-center bg-slate-200/50 rounded-lg w-fit"
    >
      <div
        style={{
          backgroundImage: `url(https://media1.popsugar-assets.com/files/thumbor/lcn_wDi1eGsJ5E-sOnR4cfZdKJw/0x68:2312x2380/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/03/018/n/1922398/03ad07805e5ee78bbd70d3.36131857_/i/Emma-Stone.jpg)`,
        }}
        className="w-[60px] h-[100px] bg-cover bg-center rounded-lg"
      ></div>
      <div className="pr-6">
        <h3 className="font-semibold">Emma Stone</h3>
        <h4>Gwen Stacy</h4>
      </div>
    </Link>
  );
};

export default CastCard;
