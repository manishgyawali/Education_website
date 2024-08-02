import React from "react";
import { coursecard } from "./coursesdata";
const AllCourse = () => {
  return (
    <div className="text-center h-fit grid gap-10">
      <div>
        <h3 className="text-customgreen text-xl font-semibold">Courses</h3>
        <h1 className="text-4xl font-semibold">Browse Our Online Courses</h1>
      </div>

      <div className="grid grid-cols-6 border gap-2   ">
        {coursecard.map((val, i) => (
          <div className="bg-white hover:bg-customgreen cursor-pointer group flex py-8 px-6 flex-col gap-5 items-center justify-center  duration-500 shadow-md ">
            <div className="h-16 w-16 bg-mainbg">
              <img src={val.image} alt="image" />
            </div>
            <h1 key={i} className="text-md group-hover:text-white font-semibold text-black ">{val.coursename}</h1>
            <h3 key={i}  className="text-customgreen group-hover:text-white" >{val.numOfCourse}</h3>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default AllCourse;
