 import React from "react";
import { blogData } from "../../../blog";
import { IoPerson } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import Homelog from '../../assets/homebanner.jpg'
const Blog = () => {
  return (
    <div className="text-center grid gap-10 w-11/12 mx-auto">
      <div className="  ">
        <h3 className="text-customgreen text-xl font-semibold">OUR BLOG</h3>
        <h1 className="text-4xl font-semibold">Recent From Blog</h1>
      </div>

      <div className=" grid grid-cols-3  border gap-6     ">
        {blogData.map((val, i) => (
          <div className="bg-white group shadow-lg pb-6 flex flex-col gap-6  ">
            <div className="h-72 w-full overflow-clip bg-gray-300">
              <img src={val.image} className="h-full group-hover:scale-125 transition-all duration-1000 delay-100 ease-in-out object-left-top w-full object-cover" />
            </div>
            <div className="flex gap-2 items-center w-10/12 mx-auto justify-between ">
              <div className="flex items-center gap-3 ">
                <IoPerson className="text-customgreen"/>
                <h4 key={i} className="text-xs font-bold text-ftpara">
                  {val.admin}
                </h4>
              </div>

              <div className="flex items-center gap-3 ">
                <MdDateRange className="text-customgreen" />
                <h4 key={i} className="text-xs font-bold text-ftpara">
                  {val.date}
                </h4>
              </div>

              <div className="flex items-center gap-3 ">
                <FaComment className="text-customgreen" />{" "}
                <h4 key={i} className="text-customgreen flex text-xs font-bold text-ftpara">
                  {val.comments}
                </h4>
              </div>
            </div>

            <div className="w-10/12 mx-auto">
              <h2 key={i} className="text-left group-hover:text-customgreen font-semibold text-2xl">
                {val.heading}
              </h2>
              <p key={i} className="text-ftpara text-left mt-6">
                {val.parag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
