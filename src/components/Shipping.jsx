import React from "react";
import shipping1 from "../assets/shipping1.png";
import shipping2 from "../assets/shipping2.png";
import shipping3 from "../assets/shipping3.png";

function Shipping() {
  const arr = [
    { img: shipping1 },
    { img: shipping2 },
    { img: shipping3 },
    { img: shipping3 },
  ];
  return (
    <div className="flex max-sm:flex-wrap ">
      {arr.map((item) => (
        <div className="w-2/4  h-72  bg-white border-r-2 max-sm:border-b-2  border-zinc-300 px-12 pt-14 pb-10 flex flex-col items-center justify-between font-Montserrat ">
          <img src={item.img} className="w-8 mb-5 max-sm:w-6" alt="" />
          <h1 className="text-[#0d2e57] text-3xl font-medium uppercase max-sm:text-center font-BebasNeue max-sm:text-2xl ">
            Free Shipping
          </h1>
          <p className="text-[#8a8a8a] text-xs max-sm:text-[10px] max-sm:w-40  tracking-wide leading-5 px-1 text-pretty text-center max-sm:mt-1">
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the
          </p>
          <a href="#" className="flex items-center justify-center">
            <button className="text-[#3753da] mt-4 font-semibold text-sm">
              Click Here
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Shipping;
