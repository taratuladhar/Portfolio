const about = () => {
  return (
    <div className="relative lg:h-[600px] mt-20 ">
      <div className="container-margin-compact lg:container-margin">
        <div className="flex flex-col mt-26 gap-y-10 md:gap-y-14 lg:flex-row-reverse">
          <div className=" flex flex-col  max-w-full ">
            <h1 className="font-extrabold text-5xl text-gray-700 mb-5 md:text-6xl lg:text-7xl">
              About Me
            </h1>
            <p className="text-xl text-gray-700 max-w-full lg:w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              suscipit ipsum. Laborum dolore provident, quisquam repellat ipsum
              perspiciatis porr Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
              <br />
              <br /> Sit, voluptatum exercitationem? doloribus repellat numquam
              delectus laboriosam praesentium magni enim. amet consectetur
              adipisicing elit. Consequatur praesentium debitis aliquid iure
              deleniti Cum earum culpa corporis, magni dignissimos
              exercitationem nemo nam!
            </p>
          </div>
          <div className=" z-20 flex lg:items-center">
            <img
              src="./about.png"
              className="max-w-full h-auto lg:max-w-full "
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-9 w-full md:bottom-18 lg:-bottom-48">
        <img
          src="./blue2.png"
          alt=""
          className="w-auto h-32 md:w-full md:h-[200px] lg:h-60"
        />
      </div>
    </div>
  );
};

export default about;
