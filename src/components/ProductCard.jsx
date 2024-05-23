import React from "react";

function ProductCard({ img, productName }) {
  return (
    <div className="h-[375px] max-sm:h-[330px] w-1/4 max-sm:w-2/4  flex flex-col items-start justify-end px-1 pb-5 border">
      <img src={img} className="object-contain ps-3 " alt="" />
      <div className="p-8">
        <h1 className="text-[#0d2e57]  font-medium     text-2xl font-BebasNeue">
          {productName}
        </h1>
        <div className="flex items-center justify-start gap-2 font-Montserrat text-sm">
          <h2 className="text-[#3753da] font-semibold  ">$100.00</h2>
          <h3 className="text-[#616161] font-semibold text-xs  line-through">
            $200
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
