import "./styles.css";
const contact = () => {
  return (
    <div className="relative h-[1000px] top-56">
      <div className="container-margin-compact lg:container-margin">
        <div className="flex flex-col-reverse lg:flex-row mt-24 lg:items-center lg:justify-evenly lg:-mt-4">
          <div className=" ">
            <img
              src="./contact.png"
              className="w-[270px] mt-24 ml-20 flex justify-center h-[500px] relative z-10 md:ml-60 md:w-[300px] md:h-[530px] lg:ml-12 lg:h-[780px] lg:w-[420px]"
            />
          </div>
          <div className=" flex flex-col   z-10 ">
            <h1 className="font-extrabold text-5xl text-gray-700  -mb-6 flex justify-center">
              Let's connect
            </h1>
            <div className="flex flex-wrap items-start justify-center max-w-full gap-10 mt-12">
              <form>
                <div className="flex flex-col gap-3 items-center lg:gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-[450px] h-12 md:w-[650px] md:h-14 rounded-full pl-10 text-xl font-light border-2 border-slate-950 placeholder-black bg-[#F4EEE9] hover:border-[#FA8316]  focus:border-[#FA8316] focus:border-2  focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className=" w-[450px] h-12 md:w-[650px] md:h-14 rounded-full pl-10 text-xl font-light border-2 border-slate-950 placeholder-black bg-[#F4EEE9] hover:border-[#FA8316]  focus:border-[#FA8316] focus:border-2  focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Contact No."
                    className=" w-[450px] h-12 md:w-[650px] md:h-14 rounded-full pl-10 text-xl font-light border-2 border-slate-950 placeholder-black bg-[#F4EEE9] hover:border-[#FA8316]  focus:border-[#FA8316] focus:border-2  focus:outline-none"
                  />
                  <textarea
                    placeholder="Message"
                    className="  w-[450px] h-32 md:w-[650px] rounded-3xl md:h-[120px] px-10 py-4 text-xl font-light border-2 border-slate-950 placeholder-black bg-[#F4EEE9] hover:border-[#FA8316]  focus:border-[#FA8316] focus:border-2  focus:outline-none"
                  ></textarea>

                  <div className="flex lg:justify-end">
                    <button className="bg-orange-400 text-white text-xl font-semibold w-[450px] h-16 rounded-2xl flex items-center justify-center hover:bg-orange-400 lg:w-[160px] ">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-14 w-full md:-bottom-24">
        <img src="./blue2.png" alt="" className="w-full h-auto  " />
      </div>
    </div>
  );
};

export default contact;
