import React from "react";
import Homebanner from "../banner/Homebanner";
import LearningOnline from "../learningOnl/learningOnline";
import AllCourse from "../AllCourses/AllCourse";
import Pricing from "../pricing&Packages/pricing";
import Blog from "../Blog/Blog";
import HBanner from "../horizontalbanner/hBanner";
import Testimonial from "../Testimonial/Testimonial";
import CourseSlider from "../OnlinercourseSlider/CourseSlider";

const Home = () => {
  
  return (
    <div className="">
       {/* <Homebanner />
       <div className="w- mt-96  pt-20 mx-auto">
         <LearningOnline />
         <CourseSlider/>
       </div> */}
    
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
