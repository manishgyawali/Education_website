import React from "react";
import Homebanner from "../banner/Homebanner";
import LearningOnline from "../learningOnl/learningOnline";
import AllCourse from "../AllCourses/AllCourse";
import Pricing from "../pricing&Packages/pricingData";
import Blog from "../Blog/Blog";
import Testimonial from "../Testimonial/Testimonial";
import CourseSlider from "../OnlinercourseSlider/CourseSlider";

const Home = () => {
  
  return (
    <div className="">
       <Homebanner />
        <div className=" md:pt-96 md:mt-[30rem] lg:mt-[9rem] pt-5 mx-auto">
          <LearningOnline />
          <CourseSlider/>
        </div>
    l
         <Testimonial />
      <div className="w-11/12  pt-20 grid gap-14 mx-auto">
        <AllCourse />
        <Pricing />
        <Blog />
      </div>
    
    </div>
  );
};

export default Home;
