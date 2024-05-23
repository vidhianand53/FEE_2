import React from "react";
import ProductBanner from "../assets/ProductBanner.webp";

function ProductBanner2() {
  return (
    <div className="relative  h-[375px] max-sm:h-[300px] w-1/2 max-sm:w-full  bg-zinc-300  flex flex-col items-start justify-center  text-white ">
      <img src={ProductBanner} className="h-full w-full absolute " alt="" />
      <h1 className="z-10 font-bold text-5xl max-sm:text-3xl ms-16 max-sm:ms-12 font-Poppins italic ">
        RUN,
        <br /> EAT, SLEEP
        <br /> AND REPEAT
      </h1>
      <a href="#" className="z-10">
        <button className=" ms-16 max-sm:ms-12 z-10 mt-8 bg-[#65cbff] uppercase text-black text-sm max-sm:text-xs px-4 py-2 rounded-full font-semibold font-Montserrat">
          SHOP NOW
        </button>
      </a>
    </div>
  );
}

export default ProductBanner2;
