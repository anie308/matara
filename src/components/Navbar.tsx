"use client";

import React, { useState } from "react";
import logo from "@/assets/svg/mlogo.svg";
import mlogo from "@/assets/svg/mmlogo.svg";
import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { SlGlobe } from "react-icons/sl";



function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <div className="bg-primary w-full flex items-center justify-center sticky top-0 z-40">
            <div className=" text-white  md:p-[15px_50px] justify-between flex items-center xl:container w-full">
          <div className="w-full lg:w-fit items-center justify-between lg:justify-start flex p-[10px] lg:p-0">
            <Link href="/">
              <Image src={logo} alt="logo" className="hidden lg:block h-[70px] w-[70px]" />
              <Image src={mlogo} alt="logo" className="lg:hidden" />
            </Link>
            <div className="flex items-center space-x-[10px] lg:hidden">
              <button className="border-[2px] p-[5px_25px] rounded-[6px] border-secondary">
                <p className="text-secondary text-[12px] lg:text-[16px] font-inter">ENG</p>
              </button>
              <div
                onClick={() => setShow(!show)}
                className="w-[25px] lg:w-[30px] h-[20px] lg:h-[28px] flex flex-col justify-between items-center"
              >
                <div className="h-[3px] w-full rounded-full bg-white"></div>
                <div className="h-[3px] w-full rounded-full bg-white"></div>
                <div className="h-[3px] w-full rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div
            className={`${
              show ? "left-0" : "left-[-100%]"
            } lg:hidden fixed top-0 h-screen bg-primary w-[100%] p-[20px] transition-all`}
          >
            <div className=" w-full justify-end flex" onClick={() => setShow(!show)}>
              <FiPlus className="text-[35px] rotate-45"/>
            </div>
            <div className="flex-col flex items-start space-y-[20px]">
            {links.map((link, index) => (
              <div
              onClick={() => setShow(!show)}
                key={index}
               
                className="text-white font-[400]  font-inter hover:text-secondary transition-colors text-[20px]"
              >
                {link.title}
              </div>
            ))}
          </div>
          </div>
          <div className="hidden lg:flex items-center mr-[-3%]">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white font-[400] p-[6px_20px] font-inter hover:text-secondary transition-colors text-[16px]"
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center space-x-[8px]">
            <button className="gbtn p-[6px_20px] font-[600] rounded-[5px] text-black font-inter">
              Docs
            </button>
            <button className="flex items-center space-x-[10px] border-[2px] p-[5px_20px] rounded-[6px] border-secondary">
              <p className="text-secondary font-inter text-[16px]">ENG</p>
              <SlGlobe className="text-secondary text-[20px]" />
            </button>
          </div>
        </div>
        </div>
      );
}

export default Navbar


const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
  {
    title: "Tokenomics",
    href: "/",
  },
  {
    title: "Roadmap",
    href: "/",
  },
  {
    title: "Blog",
    href: "/",
  },
];
