import React from "react";

const HeroV2 = ({ title, titleHighlight, subtitle, imgURL }) => {
  return (
    <section className="max-w-[95%] sm:max-w-[85%] mx-auto">
      <div className="py-10 px-4 sm:pl-6  sm:pr-6 lg:pl-8 lg:pr-8">
        <div className="text-center max-w-3xl m-auto text-gray-800">
          <h1 className="text-5xl font-bold">
            {title} <span className="text-blue-600">{titleHighlight}</span>
          </h1>

          <p className="text-lg mt-3">{subtitle}</p>
        </div>

        <div className="relative max-w-5xl mt-10 mx-auto">
          <div
            className='bg-[url("https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80")] bg-no-repeat bg-cover object-cover w-full h-96 rounded-xl sm:h-96'
            style={{
              backgroundPosition: "50% 50%",
            }}
          />

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
