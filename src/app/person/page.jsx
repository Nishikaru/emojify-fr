import CommingSoonCard from "@/component/commingSoon/commingSoonCard/CommingSoonCard";
import Nav from "@/component/shared/nav/Nav";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Nav />
      <div className="py-24 px-6 flex flex-col gap-12 items-center h-full overflow-auto">
        <div className="relative w-full min-h-[500px] border-t-sky-300/50 border-t rounded-[100%] flex flex-col items-center mt-24 mb-[-200px]">
          <div
            style={{
              backgroundImage: `url(https://ichef.bbci.co.uk/news/976/cpsprodpb/7F80/production/_86704623_596d8549-82ee-453b-b3f9-dd7649307887.jpg)`,
            }}
            className="absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px] h-[200px] bg-cover bg-center rounded-full"
          ></div>
          <div className="mt-32 max-w-[600px] text-center flex flex-col gap-6">
            <h1 className="font-bold text-2xl">Hailee Steinfeld</h1>
            <p>
              Hailee Steinfeld is an American actress and singer. She had her
              breakthrough with the western film True Grit, which earned her
              various accolades, including nominations for an Academy Award and
              a BAFTA Award.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12 px-6">
          <h3 className="text-xl font-medium">Content</h3>
          <div className="flex flex-wrap gap-6">
            <CommingSoonCard />
            <CommingSoonCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
