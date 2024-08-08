import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillFlag } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";


const Footer = () => {
  const footerData = [
    {
      explore: "About Us",
      quickLinks: "Contact Us",
      questions: "203 Fake St. Mountain View, San Francisco, California, USA",
      rPimg: "image",
      rPdate: "Jan 18, 2021",
      rPadmin: "Admin",
      rPtitle: "Creativity and Inspiration",
    },
    {
      explore: "Services",
      quickLinks: "Pricing",
      questions: "	+2 392 3929 210",
      rPimg: "image",
      rPdate: "Jan 18, 2021",
      rPadmin: "Admin",
      rPtitle: "Creativity and Inspiration",
    },
    {
      explore: "Courses",
      quickLinks: "Terms & Conditions",
      questions: "",
      rPimg: "image",
      rPdate: "Jan 18, 2021",
      rPadmin: "Admin",
      rPtitle: "Creativity and Inspiration",
    },
    // {
    //   explore: "Blog",
    //   quickLinks: "Privacy",
    // },
    // {
    //   explore: "Contact us",
    //   quickLinks: "Feedbacks",
    // },
  ];
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-8 lg:gap-3  ">
      <div className="col-span-2 md:col-span-3 lg:col-span-2">
        <h1 className="font-bold text-2xl ">ACADEMIA</h1>
        <h3 className="text-sm text-customgreen font-medium">
          ONLINE EDUCATION & LEARNING
        </h3>
        <p className="mt-9 text-ftpara w-8/12">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia
        </p>
        <div className="flex gap-2 mt-5 cursor-pointer">
          <FaFacebookF className="border rounded-full text-xl  text-white bg-customgreen bg-opacity-70 h-9 w-9 p-2 " />
          <CiTwitter className="border rounded-full text-xl  text-white bg-customgreen bg-opacity-70  h-9 w-9 p-2 " />
          <FaInstagram className="border rounded-full text-xl   text-white bg-customgreen bg-opacity-70  h-9 w-9 p-2 " />
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Explore</h2>
        <div className="mt-9 ">
          <ul>
            {footerData.map((val, i) => {
              return (
                <div className="flex items-center gap-3 mt-3 ">
                  <div className="text-customgreen text-sm ">
                    <FaArrowRightLong />
                  </div>
                  <div>
                    <li>{val.explore}</li>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Quick Links</h2>
        <div className="mt-9 ">
          <ul>
            {footerData.map((val, i) => {
              return (
                <div className="flex items-center gap-3 mt-3 ">
                  <div className="text-customgreen text-sm ">
                    <FaArrowRightLong />
                  </div>
                  <div>
                    <li>{val.quickLinks}</li>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="col-span-2">
        <h2 className="font-semibold text-lg">Recent Posts</h2>
        <div className="mt-9">
          {footerData.map((val, i) => {
            return (
              <div key={i} className="flex gap-10 items-center ">
                <div>
                  <h1 key={i}>{val.rPimg}</h1>
                </div>
                <div className="grid gap-2">
                  <div className="flex gap-5">
                    <div className="flex gap-2 items-center">
                      <MdOutlineDateRange className="text-customgreen text-xl " />
                      <h1
                        key={i}
                        className="text-customgreen font-semibold text-sm  "
                      >
                        {val.rPdate}
                      </h1>
                    </div>
                    <div className="flex gap-2 items-center">
                      <IoPersonSharp className="text-customgreen " />
                      <h1
                        key={i}
                        className="text-customgreen font-semibold text-sm"
                      >
                        {val.rPadmin}
                      </h1>
                    </div>
                  </div>
                  <div className="">
                    <h1 key={i} className="">
                      {val.rPtitle}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-span-2">
        <h2 className="font-semibold text-lg">Have a Questions?</h2>
        <div className="mt-9">
          <div className="flex items-center gap-8 ">
            <AiFillFlag className="text-customgreen text-5xl" />
            <h4> 203 Fake St. Mountain View, San Francisco, California, USA</h4>
          </div>
          <div className="flex items-center gap-8 mt-3">
            <IoIosCall className="text-customgreen text-xl" />
            <h4> +2 392 3929 210</h4>
          </div>
          <div className="flex items-center gap-8 mt-3">
            <FaTelegramPlane className="text-customgreen text-xl" />
            <h4> info@yourdomain.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
