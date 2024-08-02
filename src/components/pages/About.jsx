import React from "react";
import LearningOnline from "../learningOnl/learningOnline";
import Banner from "../UI/Banner";
import Testimonial from "../Testimonial/Testimonial";

const About = () => {
  return (
    <div className="">
      <Banner title={"About us"} />

      <div className="mt-96 pt-28">
        <LearningOnline/>
        <Testimonial/>
      </div>
    </div>
  );
};

export default About;
