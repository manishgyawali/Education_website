import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
const Newsletter = () => {
  return (
    <div className="text-white bg-customgreen py-10  ">
     <div className="w-10/12 mx-auto grid  lg:grid-cols-2 gap-4 ">
     <div>
        <h1 className="text-xl md:text-3xl font-semibold ">
          Newsletter - Stay tune and get the latest update
        </h1>
        <h3>Far far away, behind the word mountains</h3>
      </div>

      <div className="flex items-center w-full">
        <div className="flex w-full items-center bg-customgreen border-b-2 border-white pb-2  rounded">
          <input
            type="email"
            placeholder="Enter email address"
            className="bg-customgreen flex-grow text-white placeholder-white focus:outline-none "
          />
          <button className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-6 h-6"
             >
              <FaTelegramPlane />
            </svg>
          </button>
        </div>{" "}
      </div>
     </div>
    </div>
  );
};

export default Newsletter;
