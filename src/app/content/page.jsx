import ContentSide from "@/component/content/contentSide/ContentSide";
import Nav from "@/component/shared/nav/Nav";
import RateIt from "@/component/rateIt/RateIt";
import React from "react";
import CastCard from "@/component/content/castCard/CastCard";

const page = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Nav />
      <div className="h-full flex flex-row-reverse">
        <ContentSide />
        <div className="w-full h-full overflow-auto">
          <div>
            <div
              style={{
                backgroundImage:
                  "url(data:image/jpeg;base64,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EREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX//2Q==)",
              }}
              className="relative w-full h-[400px] bg-cover"
            >
              <div
                style={{
                  backgroundImage:
                    "url(https://d1csarkz8obe9u.cloudfront.net/posterpreviews/american-pie-design-template-62fde1de84d67ffd3c2d49b2d10cef75_screen.jpg?ts=1645622800)",
                }}
                className="absolute translate-x-[-50%] translate-y-[-50%] top-[100%] left-[10%] bg-cover bg-center w-[200px] h-[350px]"
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-12 items-center">
            <div>
              <h1 className="text-3xl">American Pie</h1>
            </div>
            <div className="text-4xl">
              <span>😃</span>
              <span>90%</span>
            </div>
            <div>
              <p className="flex gap-3">
                <span>Genres:</span>
                <span>Comedy</span>
                <span>Sex Comedy</span>
                <span>Romance</span>
                <span>Teen</span>
              </p>
            </div>
            <div className="max-w-[800px]">
              <p className="text-center">
              <span>Plot: </span>
              <span>
              A riotous and raunchy exploration of the most eagerly anticipated -- and most humiliating -- rite of adulthood, known as losing one s virginity. In this hilarious lesson in life, love and libido, a group of friends, fed up with their well-deserved reputations as sexual no-hitters, decide to take action.
              </span>
              </p>
            </div>
          </div>
          <hr />
          <div>
            <RateIt/>
          </div>
          <hr />
          <div className="pt-6 flex flex-col items-center">
                <h1 className='text-lg font-semibold'>Cast</h1>
          <div className="flex flex-wrap gap-6 p-6">
            <CastCard/>
            <CastCard/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
