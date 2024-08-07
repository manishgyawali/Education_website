import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Background from "../../assets/homebanner.png";
const Homebanner = () => {
  return (
    <div className="  bg-bgmain h-fit lg:h-100 text-white relative md:absolute w-full top-0">
      <div className="flex flex-col lg:flex-row justify-center   w-10/12 mx-auto h-full  ">
          <div className="  pt-28 relative z-10 flex justify-center flex-col gap-9">
            <div>
              <h3 className="font-medium">WELCOME TO ACADEMIA</h3>
              <h1 className="font-bold text-4xl mt-2">
                Best Online Education Expertise
              </h1>
            </div>
            <p className="">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
        
          <div className="flex gap-4 items-center">
            <button className="bg-customgreen px-3 h-fit flex items-center gap-1 py-3 font-medium rounded ">
              GET STARTED NOW! <FaArrowRight className="text-sm" />
            </button>

            <button className="bg-white flex h-fit items-center gap-1 text-customgreen px-3 py-2 font-medium rounded">
              VIEW COURSE <FaArrowRight className="text-sm" />
            </button>
          </div>
          </div>
        <div
          className=" md:h-100  lg:h-full  bg-cover h-96 top-0 left-0 right-0  w-full"
          style={{
            backgroundImage: `url(${Background})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Homebanner;
