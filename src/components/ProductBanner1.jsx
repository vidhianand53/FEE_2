import React from "react";

function ProductBanner1() {
  return (
    <div className="h-[375px] max-sm:h-[330px] w-1/4 max-sm:w-1/2 bg-[#232323] text-white  ps-12 flex flex-col items-start justify-center gap-3">
      <h1 className="uppercase font-bold text-5xl max-sm:text-3xl font-BebasNeue ">
        Men's Running Shoes
      </h1>
      <p className=" tracking-widest max-sm:tracking-[.2em] text-sm max-sm:text-xs font-medium font-Montserrat pe-14">
        SIGN UP NOW AND GET 50% OFF
      </p>
      <a href="#">
        <button className="mt-6 max-sm:mt-3 bg-[#3954d9] uppercase text-xs max-sm:text-[10px] px-4 py-2 rounded-full font-medium font-Montserrat ">
          Click Here
        </button>
      </a>
    </div>
  );
}

export default ProductBanner1;
