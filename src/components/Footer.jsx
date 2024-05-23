import React from "react";
import FooterBG from "../assets/FooterBG.png";
import {
  FaGooglePlusG,
  FaPinterestP,
  FaVimeoV,
  FaFacebookSquare,
  FaTwitter,
  FaRss,
  FaCcMastercard,
  FaCcDiscover,
  FaCcVisa,
  FaCcStripe,
  FaCcDinersClub,
} from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

function Footer() {
  return (
    <div className="h-[670px] max-sm:h-[1600px] bg-zinc-900 px-24 flex flex-col items-center justify-end  relative font-Poppins">
      <img
        src={FooterBG}
        className="h-full w-full object-cover absolute"
        alt=""
      />

      <div className=" w-full h-[450px] max-sm:h-[1200px] flex max-sm:flex-col  items-center justify-between max-sm:justify-evenly  px-5 z-10">
        <div className="  flex max-sm:flex-col items-center justify-between max-sm:gap-10 ">
          <div className="w-80  text-white ">
            <h1 className="text-xl font-medium uppercase text-[#3753da]  mb-8 max-sm:mb-4">
              Shops
            </h1>
            <div className="flex flex-col gap-[2px] font-light ">
              <a href="#" className=" w-fit">
                <p>New In</p>
              </a>
              <a href="#" className=" w-fit">
                <p>Women</p>
              </a>
              <a href="#" className=" w-fit">
                <p>Schuhe Shoes</p>
              </a>
              <a href="#" className=" w-fit">
                <p>Bags & Accessories</p>
              </a>
              <a href="#" className=" w-fit">
                <p>Men</p>
              </a>
              <a href="#" className=" w-fit">
                <p>Top Brands</p>
              </a>
              <a href="#" className=" w-fit">
                <p>Sale & Special Offers</p>
              </a>
              <a href="#" className=" w-fit">
                <p>Lookbook</p>
              </a>
            </div>
          </div>
          <div className="w-80 text-white">
            <h1 className="text-xl uppercase text-[#3753da] font-medium mb-8 max-sm:mb-4">
              Information
            </h1>
            <div className="flex flex-col gap-[2px] font-light">
              <a href="#" className="w-fit">
                <p>About Us</p>
              </a>
              <a href="#" className="w-fit">
                <p>Customer Service</p>
              </a>
              <a href="#" className="w-fit">
                <p>New Collection</p>
              </a>
              <a href="#" className="w-fit">
                <p>Best Sellers</p>
              </a>
              <a href="#" className="w-fit">
                <p>Manufacturers</p>
              </a>
              <a href="#" className="w-fit">
                <p>Privacy Policy</p>
              </a>
              <a href="#" className="w-fit">
                <p>Terms & Condition</p>
              </a>
              <a href="#" className="w-fit">
                <p>Blog</p>
              </a>
            </div>
          </div>
          <div className="w-80 text-white">
            <h1 className="text-xl uppercase text-[#3753da] font-medium mb-8 max-sm:mb-4">
              Customer Service
            </h1>
            <div className="flex flex-col gap-[2px] font-light">
              <a href="#" className="w-fit">
                <p>Search Terms</p>
              </a>
              <a href="#" className="w-fit">
                <p>Advanced Search</p>
              </a>
              <a href="#" className="w-fit">
                <p>Orders and Returns</p>
              </a>
              <a href="#" className="w-fit">
                <p>Contact Us</p>
              </a>
              <a href="#" className="w-fit">
                <p>RSS</p>
              </a>
              <a href="#" className="w-fit">
                <p>Help & FAQs</p>
              </a>
              <a href="#" className="w-fit">
                <p>Consultant</p>
              </a>
              <a href="#" className="w-fit">
                <p>Store Locations</p>
              </a>
            </div>
          </div>
        </div>
        <div className=" h-[250px] flex flex-col justify-between items-start gap-12 ps-12 max-sm:ps-0 max-sm:pe-8 ">
          <div className="flex flex-col items-start justify-between gap-3">
            <h1 className="text-xl font-medium uppercase text-[#3753da] ">
              Stay Connected
            </h1>
            <div className="flex w-full items-center justify-between gap-4">
              <a
                href="https://plus.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGooglePlusG
                  size="35px"
                  className="bg-white rounded-full p-2"
                />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterestP
                  size="35px"
                  className="bg-white rounded-full p-2"
                />
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaVimeoV size="35px" className="bg-white rounded-full p-2" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare
                  size="35px"
                  className="bg-white rounded-full p-2"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size="35px" className="bg-white rounded-full p-2" />
              </a>
              <a
                href="https://rss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaRss size="35px" className="bg-white rounded-full p-2" />
              </a>
            </div>
          </div>
          <div className=" flex flex-col justify-between items-start gap-4">
            <h1 className="text-xl font-medium uppercase text-[#3753da]  h-5 ms-1">
              Newsletter Sign Up
            </h1>
            <input
              input="email"
              className="bg-[#2f2f2f] text-zinc-200   tracking-wide rounded-full w-72 h-8  text-sm py-2 px-3  enabled:border-none enabled:outline-none"
            />
            <a href="#">
              <button className=" ms-1 px-6 py-2 text-white text-xs font-medium rounded-full bg-[#3954d9] mt-1  font-Montserrat">
                Shop Now
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className=" w-full h-[150px] max-sm:h-[300px] z-10 flex max-sm:flex-col items-center justify-between max-sm:justify-center max-sm:gap-10 px-5 border-t-4 border-[#ffffff33]">
        <div className="text-[#ffffff54] text-sm flex flex-col items-start gap-1">
          <p>© 2022 PSDfreebies.com | All Rights Reserved.</p>
          <p>Free PSD Themes & Templates by PSDFreebies.com.</p>
        </div>
        <div className="text-[#ffffff99] flex items-center gap-5 justify-center ">
          <FaCcMastercard size="35px" />
          <FaCcDiscover size="35px" />
          <SiAmericanexpress size="31px" className="rounded-sm " />
          <FaCcVisa size="35px" />
          <FaCcStripe size="35px" />
          <FaCcDinersClub size="35px" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
