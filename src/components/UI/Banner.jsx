import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Background from "../../assets/pagebanner.jpg";
const Banner = ({ title }) => {
  return (
    <div className=" bg-bgmain h-96 lg:h-100 text-white absolute w-full top-0">
      <div className="flex justify-center   w-12/12 mx-auto h-full  ">
        <div
          className="h-96 lg:h-full bg-no-repeat bg-cover relative object-fill  w-full   "
          style={{
            backgroundImage: `url(${Background})`,
          }}
        >
          <div className="absolute  top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center z-10 text-4xl font-semibold ">
            {title ? title : "no title"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
