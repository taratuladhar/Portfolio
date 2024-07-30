const portfolio = () => {
  return (
    <div className="relative lg:h-[900px] top-40">
      <div className="container-margin-compact lg:container-margin ">
        <div className="flex flex-col mt-24 justify-center items-center lg:flex-row">
          <div className=" flex flex-col justify-center items-center max-w-[700px] z-10 ">
            <h1 className="font-extrabold text-5xl text-gray-700 -mb-6 md:text-6xl lg:text-7xl lg:-ml-24">
              Portfolio
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-center max-w-full gap-8 mt-12 lg:justify-start">
              <div className="border bg-gray-500 rounded-2xl w-[210px] h-[210px] text-black md:w-[270px] md:h-[270px]">
                box1
                <img src="./p4.png" alt="" />
              </div>
              <div className="border bg-red-500 rounded-2xl w-[210px] h-[210px] text-white md:w-[270px] md:h-[270px]">
                box2
              </div>
              <div className="border bg-lime-500 rounded-2xl w-[210px] h-[210px] text-white md:w-[270px] md:h-[270px]">
                box3
              </div>
              <div className="border bg-cyan-500 rounded-2xl w-[210px] h-[210px] text-white md:w-[270px] md:h-[270px]">
                box4
              </div>
            </div>
          </div>

          <div className="flex ">
            <img
              src="./portfolio.png"
              className="w-[330px] md:w-[400px] lg:w-[490px] h-auto mt-16 relative z-10 "
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10  w-full">
        <img src="./blue2.png" alt="" className="w-full h-32 lg:h-52" />
      </div>
    </div>
  );
};

export default portfolio;
