import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import cart from "../assets/cart.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleHamburgerMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="bg-[#212121b3] w-full h-16 flex items-center justify-between text-white relative">
      <div className="flex w-full items-center">
        <span
          className="w-2/12 sm:hidden h-16 flex items-center justify-center border-r-2 border-[#ffffff33] cursor-pointer"
          onClick={handleHamburgerMenu}
        >
          <IoMdMenu size="36px" />
        </span>
        <span className="w-1/12 max-sm:hidden h-16 flex items-center justify-center border-r-2 border-[#ffffff33] cursor-pointer">
          <IoMdMenu size="36px" />
        </span>

        <h1 className="font-extrabold w-2/12 max-sm:w-5/12 font-Poppins flex items-center justify-center text-3xl h-16 border-r-2 border-[#ffffff33]">
          PORTPRO
        </h1>
        <ul className="hidden sm:flex items-center justify-around w-6/12 h-16 text-sm font-semibold font-Montserrat">
          <li>
            <a href="#featProd">MEN</a>
          </li>
          <li>
            <a href="#featProd">WOMEN</a>
          </li>
          <li>
            <a href="#featProd">KIDS</a>
          </li>
          <li>
            <a href="#featProd">SPORTS</a>
          </li>
          <li>
            <a href="#featProd">BRANDS</a>
          </li>
          <li>
            <a href="#featProd">CUSTOMIZE</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center h-16 border-l-2 border-[#ffffff33]">
        <div className="hidden sm:flex gap-8 w-60 justify-center items-center">
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebookF size={"19px"} />
          </a>
          <a href="https://twitter.com" target="_blank">
            <FaTwitter size={"20px"} />
          </a>
          <a href="https://plus.google.com" target="_blank">
            <FaGooglePlusG size={"25px"} />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram size={"21px"} />
          </a>
        </div>
        <div className="h-16 border-l-2 border-[#ffffff33] flex items-center w-16 justify-center">
          <a href="#">
            <img src={cart} alt="Cart" className="w-5" />
          </a>
        </div>
        <div className="h-16 border-l-2 border-[#ffffff33] flex items-center w-16 justify-center">
          <a href="#">
            <span>
              <IoSearchSharp size={"20px"} />
            </span>
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <ul className="flex flex-col items-center justify-evenly font-semibold font-Montserrat w-full border-t-2 border-[#455863] bg-[#212121b9] absolute top-16 left-0 text-center h-[422px]  sm:hidden">
          <li className="">
            <a href="#featProd">MEN</a>
          </li>
          <li className="">
            <a href="#featProd">WOMEN</a>
          </li>
          <li className="">
            <a href="#featProd">KIDS</a>
          </li>
          <li className="">
            <a href="#featProd">SPORTS</a>
          </li>
          <li className="">
            <a href="#featProd">BRANDS</a>
          </li>
          <li className="py-2">
            <a href="#featProd">CUSTOMIZE</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
