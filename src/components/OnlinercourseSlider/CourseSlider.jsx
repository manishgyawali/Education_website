import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CourseSlider = () => {
  const CourseSliderData = [
    {
      icon: "icon",
      title: "Enhancing Adobe Photoshop CC 2020 Skills",
      rating: "rating",
      image: "image",
      name: "by John Smith",
      lectures: "50 lectures (190 hrs)",
      price: "$100 All Course / $15 per month",
      button: "Enroll Now",
    },
  ];
  return (
    <div className="w-11/12 mx-auto text-center h-fit grid gap-10 mt-40">
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
        {CourseSliderData.map((val, i) => (
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
      </Carousel>
    </div>
  );
};

export default CourseSlider;
