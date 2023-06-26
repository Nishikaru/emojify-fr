"use client";

import { useState } from "react";

const RateIt = () => {
  const [rated, setRated] = useState(null);
  const emos = [
    {
      emo: "🤮",
      value: 1,
    },
    {
      emo: "🙄",
      value: 2,
    },
    {
      emo: "😐",
      value: 3,
    },
    {
      emo: "🙂",
      value: 4,
    },
    {
      emo: "😃",
      value: 5,
    },
  ];
  return (
    <div className="flex flex-col items-center gap-6 py-6">
      <h3 className="text-lg font-semibold">Whats Your feeling?</h3>
      <form className="flex flex-col gap-6 items-center">
        <div className="h-[50px] text-5xl flex items-center">
          {emos.map((item, index) => (
            <span
              onClick={() => {
                setRated(item.value);
              }}
              key={index}
              className="cursor-pointer hover:text-6xl transition-all"
            >
              {item.emo}
            </span>
          ))}
        </div>
        <textarea
          className="border border-black rounded-md"
          name="comment"
          id="comment"
          cols="50"
          rows="5"
        ></textarea>
        <button
          className={`px-6 py-2 rounded-md font-semibold ${
            rated ? "bg-blue-400" : "bg-slate-400"
          }`}
          disabled={!rated}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RateIt;
