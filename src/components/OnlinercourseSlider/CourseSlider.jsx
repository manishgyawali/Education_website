import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LuComputer } from "react-icons/lu";

const CourseSlider = () => {
  const coursesliderData = [
    {
        logo:<LuComputer />,
        heading: 'Basic Fundamentals for Software Engineering',
        rating: 'rating',
        by : 'by John Smith',
        lectures: '50 lectures (190 hrs)',
        money  : '$100 All Course / $15 per month',
        button : 'ENROLL NOW!'
    },
    {
        logo:<LuComputer />,
        heading: 'Enhancing Adobe Photoshop CC 2020 Skills',
        rating: 'rating',
        by : 'by John Smith',
        lectures: '50 lectures (190 hrs)',
        money  : '$100 All Course / $15 per month',
        button : 'ENROLL NOW!'
    },
    {
        logo:<LuComputer />,
        heading: 'HTML, CSS, and Javascript for Web Developers',
        rating: 'rating',
        by : 'by John Smith',
        lectures: '50 lectures (190 hrs)',
        money  : '$100 All Course / $15 per month',
        button : 'ENROLL NOW!'
    },
]


const responsive = {
  superLargeDesktop: {

    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <div className="lg:w-9/12 w-11/12 mx-auto text-center h-fit grid gap-10 mt-40 ">
      <div>
        <h3 className="text-customgreen text-xl font-semibold">Our Courses</h3>
        <h1 className="text-4xl font-semibold">
          Explore Our Popular Online Courses
        </h1>
      </div>

      <Carousel
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={1500}
        infinite={true}
        responsive={responsive}
      >
        {coursesliderData.map((val, i) => (
          
          <div key={i} className="bg-white p-5 mx-5 ">
            <div className="flex gap-5  ">
                <div>
                <h1 key={i} className="text-5xl items-center flex justify-center bg-customgreen text-white w-20 h-20 rounded-full">{val.logo}</h1>

                </div>
                <div className="text-left grid gap-2 ">
                <h1 key={i} className="text-2xl font-semibold">{val.heading}</h1>
                <h1 key={i}>{val.rating}</h1>
                <h3 key={i} className="text-gray-400">{val.by}</h3>
                <h3 key={i} className="text-customgreen cursor-pointer">{val.lectures}</h3>


                </div>
            </div>
            <div className="mt-6 grid  items-center justify-center ">
              <h1 key={i} className="bg-gray-100 py-3 px-20  text-md text-customgreen rounded">{val.money}</h1>
              <button key={i} className="  bg-customgreen  text-white py-3  mt-2 text-md rounded ">{val.button}</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CourseSlider;
