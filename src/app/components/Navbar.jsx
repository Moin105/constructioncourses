"use client";
import React, { useState } from "react";
import { logo, close, menu } from "../../assets";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full overflow-hidden py-[1.5%]">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-1 rounded-md cursor-pointer">
        <Image
          priority
          src={logo}
          alt="logo"
          className="sm:w-[120px] sm:h-[80px] w-[50px] object-contain"
        />
        <h4 className="hidden sm:block text-dimWhite font-bold font-poppins text-[12px] sm:text-base text-center">
          Sheikh Construction{" "}
        </h4>
      </div>

      <ul className="hidden sm:flex items-center gap-8">
        <li className="text-base font-poppins text-dimWhite cursor-pointer hover:text-white">
          <a href="#home">Home</a>
        </li>
      </ul>

      {/* mobile view */}
      <div className="sm:hidden flex flex-1 justify-end items-center gap-10 relative">
        <Image
          src={toggle ? close : menu}
          alt={toggle ? "close" : "menu"}
          className="w-[28px] h-[28px] cursor-pointer object-contain z-30"
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        />
        {toggle && (
          <div className="fixed top-14 right-0 w-1/3 h-[25vh] bg-opacity-90 bg-black-gradient sidebar flex flex-col items-center justify-center rounded-md">
            <ul className="flex flex-col items-center gap-5">
              <li className="text-lg font-poppins text-dimWhite cursor-pointer hover:text-white">
                <a href="#home">Home</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
