import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  const testimonialData = [
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Name: "ROGER SCOTT",
      position: "Marketing Manager",

      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Name: "ROGER SCOTT",
      position: "Marketing Manager",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Name: "ROGER SCOTT",
      position: "Marketing Manager",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Name: "ROGER SCOTT",
      position: "Marketing Manager",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <div className="w-11/12 mx-auto text-center h-fit grid gap-10 mt-40 ">
      <div>
        <h3 className="text-customgreen text-xl font-semibold">Testimonial</h3>
        <h1 className="text-4xl font-semibold">Our Successful Students</h1>
      </div>
{/* 
      <Carousel
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={1500}
        infinite={true}
        responsive={responsive}
      
      >
        {testimonialData.map((val, i) => (
          <div key={i} className="bg-customgreen p-5 mx-4  ">
            <div key={i} className="flex gap-7  ">
              <img src={val.image} alt="image"  className="h-20 w-20  rounded-full  object-cover"/>
              <div className="flex flex-col h-fit ">
                <h1 className="text-white text-2xl font-semibold">{val.Name}</h1>
                <h1 className=" text-white">{val.position}</h1>
              </div>
            </div>
            <p className="mt-5 text-white  text-left ml-6">{val.para}</p>
          </div>
        ))}
      </Carousel> */}
    </div>
  );
};

export default Testimonial;
