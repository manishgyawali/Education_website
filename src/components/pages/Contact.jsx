import React from "react";
import Banner from "../UI/Banner";
import ContactImg from "../../assets/contact.jpg";
const Contact = () => {
  return (
    <div>
      <div>
        <Banner title={"Contact Us"} />
      </div>

      <div className=" mt-60 md:mt-40 lg:mt-96 py-40 flex w-10/12 mx-auto gap-10 items-center justify-center">
        {/* <div className="  ">
          <img src={ContactImg} alt="image" />
        </div> */}

        <div className=" border border-white p-10 bg-white">
          <div>
            <h1 className=" text-4xl">Contact Us </h1>
            <p className="mt-4">
              We're open for any suggestion or just to have a chat
            </p>
          </div>
          <div className="grid md:grid-cols-3 mt-10 gap-5">
            <div>
              <h2 className="font-bold text-sm">ADDRESS:</h2>
              <h3 className="  mt-3 w-9/12">
                198 West 21th Street, Suite 721 New York NY 10016
              </h3>
            </div>
            <div>
              <h2 className="font-bold text-sm">EMAIL:</h2>
              <h3 className=" text-lg mt-3">info@yoursite.com</h3>
            </div>
            <div>
              <h2 className="font-bold text-sm">PHONE:</h2>
              <h3 className=" text-lg mt-3">+ 1235 2355 98</h3>
            </div>
          </div>

          <div className="mt-10 grid gap-5 w-10/12  ">
            <input className=" border  p-3" type="text" placeholder="Name" />
            <input className=" border  p-3" type="text" placeholder="Email" />
            <input className=" border  p-3" type="text" placeholder="Subject" />
            <input
              className=" border  p-3"
              type="text"
              placeholder="Create a message here"
            />

            <div>
              <button className="bg-customgreen text-white py-2 px-2 rounded text-sm font-semibold ">
                SEND MESSAGE
              </button>
            </div>
          </div>
          <div className="mt-12">
            <h1 className="text-xl">Follow us here</h1>
            <div className="text-customgreen font-semibold text-sm flex gap-4 md:gap-10 mt-3">
              <h3>FACEBOOK</h3>
              <h3>TWITTER</h3>
              <h3>INSTAGRAM</h3>
              <h3> DRIBBBLE</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
