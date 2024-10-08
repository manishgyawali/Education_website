import React from "react";
import Banner from "../UI/Banner";
import { teamData } from "./../../team";

const Team = () => {
  return (
    <div className="py-36 mt-44 md:mt-20 lg:mt-80">
      <Banner title={"Our Team"} />
      <div className="bg-white mt-14  w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-md">
        {teamData.map((val, i) => {
          return (
            <div className="   group ">
             <div className="group-hover:bg-customgreen duration-150">
             <img src={val.imageTeam} alt="image" />
              <div className="mt-5 px-10 pb-5 " >
                <h1 className="text-2xl group-hover:text-white " key={i}>{val.nameTm}</h1>

                <h1 className="text-gray-400 text-sm group-hover:text-white " key={i}>{val.jonTm}</h1>
              </div>
             </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
