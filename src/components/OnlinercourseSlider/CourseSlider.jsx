import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CourseSlider = () => {
  const coursesliderData = [
    {
        logo:'logo',
        heading: 'Basic Fundamentals for Software Engineering',
        rating: '',
        by : 'by John Smith',
        lectures: '50 lectures (190 hrs)',
        money  : '$100 All Course / $15 per month',
        button : 'ENROLL NOW!'
    },
    {
        logo:'logo',
        heading: 'Enhancing Adobe Photoshop CC 2020 Skills',
        rating: '',
        by : 'by John Smith',
        lectures: '50 lectures (190 hrs)',
        money  : '$100 All Course / $15 per month',
        button : 'ENROLL NOW!'
    },
    {
        logo:'logo',
        heading: 'HTML, CSS, and Javascript for Web Developers',
        rating: '',
        by : 'by John Smith',
        lectures: '50 lectures (190 hrs)',
        money  : '$100 All Course / $15 per month',
        button : 'ENROLL NOW!'
    },
]
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
    <div className="w-11/12 mx-auto text-center h-fit grid gap-10 mt-40">
      <div>
        <h3 className="text-customgreen text-xl font-semibold">Our Courses</h3>
        <h1 className="text-4xl font-semibold">
          Explore Our Popular Online Courses
        </h1>
      </div>

      {/* <Carousel
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={1500}
        infinite={true}
        responsive={responsive}
      >
        {coursesliderData.map((val, i) => (
          <div key={i}>
            <div>
                <div>
                <h1>{val.icon}</h1>

                </div>
                <div>
                <h1>{val.title}</h1>
                <h1>{val.rating}</h1>

                </div>
            </div>
          </div>
        ))}
      </Carousel> */}
    </div>
  );
};

export default CourseSlider;
