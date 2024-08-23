import React, { useState } from "react";

import { IoGrid } from "react-icons/io5";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { blogData } from "../Data/Blogdata";
import Blogdesign from "../UI/Blogdesign";
const Blog = ({ lastindex,isJournalPage }) => {
  const [index, setindex] = useState(3);
  const [view, setview] = useState('grid');
  return (
    <div className="text-center grid gap-10 w-11/12 mx-auto mt-60">
      <div className="  ">
        <h3 className="text-customgreen text-xl font-semibold">OUR BLOG</h3>
        <h1 className="text-4xl font-semibold">Recent From Blog</h1>
       
 { isJournalPage &&    <div className="flex justify-end gap-5 items-center">
        <IoGrid
          onClick={() => {
            setview("grid");  
          }}
          className="text-2xl"
        />
        <MdOutlineFormatLineSpacing
          onClick={() => {
            setview("flex");
          }}
          className="text-3xl"
        />
      </div>}
      </div>

      <div className=" grid md:grid-cols-2 lg:grid-cols-3  border gap-6     ">
        {blogData.slice(0, lastindex).map((val, i) => (
          <Blogdesign key={i} val={val} />
        ))}
      </div>
      <div className="flex gap-8  items-center ">
        <button
          onClick={() => {
            setindex(imageData.length - 1);
          }}
          className="px-4 py-2 bg-customgreen text-white"
        >
          Viewmore
        </button>
      </div>
    </div>
  );
};

export default Blog;
