import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Background from "../../assets/homebanner.png";
const Banner = ({title}) => {
  return (
    <div className=" bg-bgmain h-100 text-white absolute w-full top-0">
      <div className="flex justify-center  w-10/12 mx-auto h-full  ">
          
        <div
          className="h-full bg-no-repeat  w-full  "
          style={{
            backgroundImage: `url(${Background})`,
          }}
        >
{title?title:"no title"}
        </div>
      </div>
    </div>
  );
};

export default Banner;
