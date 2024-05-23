import React from "react";
import SplOfferImage from "../assets/SplOfferImage.png";

function SplOffers() {
  const arr = [
    { number: "09", clock: "HOURS" },
    { number: "56", clock: "MINUTES" },
    { number: "11", clock: "SECONDS" },
  ];
  return (
    <div className="bg-[#f2f0f0]  flex max-sm:flex-col-reverse items-center">
      <div className="w-1/2 max-sm:w-full h-auto flex flex-col items-center justify-between  px-28 pt-[84px] pb-16 font-Montserrat max-sm:gap-2">
        <h2 className="text-[#616161] font-semibold text-lg max-sm:text-base font-Poppins">
          OFFER OF THE MONTH
        </h2>
        <h1 className="text-[#0d2e57] font-bold text-[43px] max-sm:text-[30px]  max-sm:w-[350px] max-sm:text-center font-BebasNeue ">
          PHANTOM VISION ELITE DYNAMIC
        </h1>
        <p className="text-[#8a8a8a] text-center   w-[500px]   font-light  text-balance  max-sm:text-sm ">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply
          dummy text of the printing
        </p>
        <div className="flex items-center gap-10  my-4 max-sm:my-3 max-sm:gap-5">
          <h1 className="text-[#3954d9] font-bold text-4xl max-sm:text-2xl">
            $500
          </h1>
          <h2 className="text-[#121212] line-through text-2xl font-semibold max-sm:text-lg">
            $1000
          </h2>
        </div>
        <div className="h-28 max-sm:h-24 flex justify-center gap-10 mt-4">
          {arr.map((item) => (
            <div className="h-full  w-24 max-sm:w-20 bg-white rounded-2xl font-semibold flex flex-col items-center justify-center pb-2 ">
              <h1 className="text-4xl max-sm:text-3xl relative top-2 font-semibold max-sm:font-medium">
                {item.number}
              </h1>
              <p className=" text-sm max-sm:text-xs ">...</p>
              <h2 className="text-sm max-sm:text-xs font-semibold ">
                {item.clock}
              </h2>
            </div>
          ))}
        </div>
        <a href="#">
          <button className=" mt-4 px-4 py-2 text-white text-sm max-sm:text-xs font-medium rounded-full bg-[#3954d9]">
            SHOP NOW
          </button>
        </a>
      </div>
      <div className="w-1/2 max-sm:w-full bg-red-100 h-full ">
        <img
          src={SplOfferImage}
          className="w-full h-full object cover "
          alt=""
        />
      </div>
    </div>
  );
}

export default SplOffers;
