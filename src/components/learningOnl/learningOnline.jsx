import React from "react";
import { onlineLearnData } from "../../../onlineLearning";
import Learningbg from "../../assets/learning.jpg";

const LearningOnline = () => {
  return (
    <div className="grid lg:grid-cols-2  h-fit justify-between w-11/12  mx-auto gap-10 ">
      <div className="h-full w-full ">
        <img src={Learningbg } className="h-full  w-full object-cover" alt="learningphoto" />
      </div>

      <div className="  gap-6 flex justify-center flex-col">
        <div className="">
          <h3 className="font-semibold text-customgreen ">LEARN ANYTHING</h3>
          <h1 className="text-5xl font-semibold mt-4">
            Benefits About Online Learning Expertise
          </h1>
        </div>

        <div className="flex flex-col gap-4 mt-10  ">
          {onlineLearnData.map((val, i) => (
            <div key={i} className="flex gap-3 group h-fit rounded-md bg-white shadow-sm p-6
             text-customgreen   hover:bg-customgreen">
              <div className="text-5xl group-hover: relative ">
               <div className="absolute text-3xl -top-2 right-0 left-0 mx-auto group-hover:text-white">{val.icon}</div>
               <div className=" mt-1 group-hover:text-white ">
               {val.icontwo}
               </div>

              </div>
              <div className="flex  flex-col h-fit ml-6  gap-5">
                <h1 key={i} className="text-3xl group-hover:text-white font-semibold">
                  {val.title}
                </h1>
                <p key={i} className="group-hover:text-white">
                  {val.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningOnline;
