import React from "react";
import ProductCard from "./ProductCard.jsx";
import Product1 from "../assets/Product1.webp";
import Product2 from "../assets/Product2.webp";
import Product3 from "../assets/Product3.webp";
import Product4 from "../assets/Product4.webp";
import Product5 from "../assets/Product5.webp";
import Product6 from "../assets/Product6.webp";
import Product7 from "../assets/Product7.webp";
import Product8 from "../assets/Product8.webp";
import Product9 from "../assets/Product9.webp";
import ProductBanner from "../assets/ProductBanner.webp";
import ProductBanner1 from "./ProductBanner1.jsx";
import ProductBanner2 from "./ProductBanner2.jsx";

function FeatureProduct() {
  const arr = [
    { img: Product1, productName: "Stefan Janoski Max" },
    { img: Product2, productName: "Vandal High Supreme" },
    { img: Product3, productName: "New Zoom" },
    { img: Product4, productName: "Fit Shoes" },
    {},
    { img: Product5, productName: "Free Shipping" },
    {},
    { img: Product6, productName: "Apple Watch" },
    { img: Product7, productName: "Sports Shoes" },
    { img: Product8, productName: "Men Shoes" },
    { img: Product9, productName: "Girl Shoe" },
  ];
  return (
    <div id="featProd" className="h-[1205px] max-sm:h-[2000px] flex flex-wrap">
      {arr.map((item, index) => {
        if (index === 6) {
          return <ProductBanner2 />;
        } else if (index === 4) {
          return <ProductBanner1 />;
        }
        return <ProductCard img={item.img} productName={item.productName} />;
      })}
      <a href="#" className="m-auto">
        <button className="h-[80px] max-sm:h-[55px] max-sm:text-sm  font-Montserrat  text-[#3753da] font-semibold m-auto  ">
          Click Here
        </button>
      </a>
    </div>
  );
}

export default FeatureProduct;
