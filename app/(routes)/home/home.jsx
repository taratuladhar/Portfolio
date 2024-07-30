import React from "react";
const Home = () => {
  return (
    <div className="relative mt-36 ">
      <div className="container-margin-compact lg:container-margin ">
        <div className="flex flex-col space-x-40 w-full h-full justify-evenly items-center relative z-10 lg:flex-row ">
          <div className="flex flex-col gap-y-8 lg:gap-y-10">
            <div className="mt-52 lg:-mt-3">
              <p className="text-gray-700 text-7xl font-extrabold leading-[1.1] -mt-60 lg:text-8xl ">
                Hi,{""}
                <br /> I am{" "}
                <span className=" gradient-text text-transparent relative animate-gradient">
                  Sweta <br />
                  Tara
                  <br /> Tuladhar{" "}
                </span>
              </p>
            </div>
            <div className="flex flex-row gap-x-3 md:gap-x-7 ">
              <button className="border border-slate-800 px-2 py-3 w-[230px] rounded-full text-lg bg-[#4C4545] text-white font-semibold md:text-2xl  md:w-[350px] md:py-5 lg:w-[250px]">
                Web Developer
              </button>
              <button className="border border-slate-800 px-2 py-3 w-[230px] rounded-full text-lg bg-[#4C4545] text-white font-semibold md:text-2xl md:w-[350px] md:py-5 lg:w-[250px]">
                UI/UX designer
              </button>
            </div>
          </div>

          <img
            src="./home2.png"
            className="flex justify-center w-[400px]  md:w-[600px] lg:max-w-full "
          />
        </div>
      </div>
      <div className="absolute bottom-14 w-full md:bottom-24 lg:bottom-30 ">
        <img
          src="./blue2.png"
          alt=""
          className="w-auto h-32 md:w-full md:h-[200px] lg:h-60 "
        />
      </div>
    </div>
  );
};

export default Home;
