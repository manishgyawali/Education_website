import React, { useState } from "react";
import images from "../../assets/pagebanner1.jpg";
import images1 from "../../assets/pagebanner.jpg";
import images2 from "../../assets/learning.jpg";
import { IoGrid } from "react-icons/io5";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";

const Viewmore = () => {
  const [index, setindex] = useState(3);
  const [view, setview] = useState('grid');


  const imageData = [
    {
      image: images,
      name: "Apple iPhone X - 64 GB Space Gray ",
      price: "Rs 20,000",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard ",
      rating: 5,
    },
    {
      image: images1,
      name: "Apple iPhone X - 64 GB Space Gray ",
      price: "Rs 20,000",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard ",

        rating: 5,
      },
    {
      image: images2,
      name: "Apple iPhone X - 64 GB Space Gray ",
      price: "Rs 20,000",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard ",

        rating: 5,
      },
    {
      image: images,
      name: "Apple iPhone X - 64 GB Space Gray ",
      price: "Rs 20,000",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard ",

        rating: 5,
      },
    {
      image: images1,
      name: "Apple iPhone X - 64 GB Space Gray ",
      price: "Rs 20,000",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard ",

        rating: 5,
      },
    {
      image: images2,
      name: "Apple iPhone X - 64 GB Space Gray ",
      price: "Rs 20,000",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard ",

        rating: 5,
      },
    {
      image: images,
      name: "Apple iPhone X - 64 GB Space Gray ",
      price: "Rs 20,000",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard ",

        rating: 5,
      },
    {
      image: images1,
      name: "Apple iPhone X - 64 GB Space Gray ",
      price: "Rs 20,000",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard ",

        rating: 5,
      },
    {
      image: images2,
      name: "Apple iPhone X - 64 GB Space Gray ",
      price: "Rs 20,000",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard ",

        rating: 5,
      },
  ];
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 border gap-10  ">
      <div className="flex justify-end gap-5 items-center">
      <IoGrid onClick={()=>{
        setview('grid')
      }} className="text-2xl" />
      <MdOutlineFormatLineSpacing onClick={()=>{
        setview('flex')
      }} className="text-3xl" />
      </div>
      
    <div className={` grid ${ view=='grid'?"grid-cols-3":'grid-cols-1 '} gap-10`}>
    {imageData.slice(0, index).map((val, i) => {
      let data=[];
        for(let i=0;i<val.rating;i++){
          data.push(i)
        }


        
        return (
          <div className=" p-5 bg-gray-300 grid  gap-5  ">
            <div className={`flex ${view=='grid'?"flex-col ":"flex-row "}  gap-10`}>
                <img key={i} src={val.image} alt="image" className="h-60" />
              <div className=" font-semibold">
                <h1 key={i}>{val.name}</h1>
                <p key={i}>{val.description}</p>
                {
                  data.map((item,ibn)=>{
                    return( 
                    <div className="flex">
                        <IoStarSharp  />
                    </div>
                    )
                  })
                }
                <h1 key={i}>{data}</h1>
            <h1 key={i}>{val.price}</h1>
              </div>

              {
                view!='grid'?<div>
                  kisan
                </div>:null
              }
            </div>
          </div>
        );
      })}
    </div>
      <div className="flex gap-8 mt-10 items-center ">
        <button
          onClick={() => {
            setindex(imageData.length - 1);
          }}
          className="px-4 py-2 bg-cyan-300 text-white"
        >
          Viewmore
        </button>
      </div>
    </div>
  );
};

export default Viewmore;
