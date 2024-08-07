import React from "react";
import LearningOnline from "../learningOnl/learningOnline";
import Banner from "../UI/Banner";
import Testimonial from "../Testimonial/Testimonial";

const About = () => {
  return (
    <div className="">
      <Banner title={"About us"} />

      <div className="mt-60 pt-28 md:mt-20 lg:mt-96">
        <LearningOnline/>
        <Testimonial/>
      </div>
    </div>
  );
};

export default About;
