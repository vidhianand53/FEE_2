import React from "react";
import Navbar from "./Navbar";
import HeroImg from "../assets/HeroImg.webp";

function Landing() {
  return (
    <div className="h-screen relative flex items-center justify-center max-sm:h-[550px]">
      <span className="absolute z-10 w-full top-0">
        <Navbar />
      </span>
      <img
        src={HeroImg}
        className="absolute h-full object-cover w-full"
        alt=""
      />
      <div className="relative  text-white right-[18%] flex flex-col items-center gap-5 me-3 max-sm:me-16">
        <h1 className="text-[145px] font-Poppins leading-[110px] font-bold   text-center max-sm:text-[60px] max-sm:leading-[50px]">
          NIKE
          <br />
          SHOES
        </h1>
        <p className="text-xl  text-center font-semibold font-Montserrat  tracking-[.3em] max-sm:text-sm max-sm:tracking-[.1em]">
          SIGN UP NOW AND GET 50% OFF
        </p>
        <a href="#">
          <button className="bg-[#3954d9] px-5 py-2 rounded-full mt-5 font-Montserrat font-medium max-sm:text-xs">
            SHOP NOW
          </button>
        </a>
      </div>
    </div>
  );
}

export default Landing;
