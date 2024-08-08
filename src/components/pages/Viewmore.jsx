import React, { useState } from "react";
import images from "../../assets/pagebanner1.jpg";
import images1 from "../../assets/pagebanner.jpg";
import images2 from "../../assets/learning.jpg";

const Viewmore = () => {
    const [index,setindex] = useState(3)


  const imageData = [
    {
      image: images,
      name: "image1",
    },
    {
      image: images1,
      name: "image1",
    },
    {
      image: images2,
      name: "image1",
    },
    {
      image: images,
      name: "image2",
    },
    {
      image: images1,
      name: "image1",
    },
    {
      image: images2,
      name: "image2",
    },
    {
      image: images,
      name: "image1",
    },
    {
      image: images1,
      name: "image2",
    },
    {
      image: images2,
      name: "image2",
    },
  ];
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 border gap-10  ">
     
       {imageData.slice(0,index).map((val,i)=>{
        return(
            <div className=" p-5 bg-gray-300 grid gap-5 items-center ">
       
            <div>
               <img key={i} src={val.image} alt="image" className="h-60" />
             </div>
             <div>
               <h1 key={i}>{val.name}</h1>
             </div>
            </div>
        )
       })}
       <div className='flex gap-8 mt-10 items-center '>
        <button onClick={()=>{
            setindex(imageData.length-1 )
        }} className="px-4 py-2 bg-cyan-300 text-white">Viewmore</button>
       </div>
     

  
  </div>
  
  );
};

export default Viewmore;
