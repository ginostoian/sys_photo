import React from "react";

const HeroV2 = () => {
  return (
    <section className="max-w-[95%] sm:max-w-[85%] mx-auto">
      <div className="py-10 px-4 sm:pl-6  sm:pr-6 lg:pl-8 lg:pr-8">
        <div className="text-center max-w-2xl m-auto text-gray-800">
          <h1 className="text-5xl font-bold">
            Designed for you to get more{" "}
            <span className="text-blue-600">simple</span>
          </h1>

          <p className="text-lg mt-3">
            Build your business here. Take it anywhere.
          </p>
        </div>

        <div className="relative max-w-5xl mt-10 mx-auto">
          <div
            className='bg-[url("https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80")] bg-no-repeat bg-cover object-cover w-full h-96 rounded-xl sm:h-96'
            style={{
              backgroundPosition: "50% 50%",
            }}
          />

          <div className="bottom-0 left-0 absolute top-0 w-full h-full text-sm text-gray-800 font-medium">
            <div className="items-center flex-col justify-center flex w-full h-full">
              <a
                className="bg-white items-center gap-x-2 py-3 px-4 inline-flex border-2 border-gray-200 border-solid rounded-full"
                href="https://preline.co/#"
              >
                <svg
                  className="cursor-pointer w-4 h-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    fill="none"
                    points="5 3 19 12 5 21 5 3"
                    stroke="#1f2937"
                  />
                </svg>
                Play the overview
              </a>
            </div>
          </div>

          <div className="bg-[linear-gradient(rgb(249,_115,_22),_rgb(255,_255,_255))] bottom-[3.00rem] absolute z-[-1] w-48 h-48 rounded-lg p-1">
            <div className="bg-white w-48 h-48 rounded-lg" />
          </div>

          <div className="bg-gradient-to-t from-blue-600 to-cyan-400 absolute top-[-3.00rem] z-[-1] w-48 h-48 rounded-full p-1">
            <div className="bg-white w-48 h-48 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
