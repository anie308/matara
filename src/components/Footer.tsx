import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <div className="footerbg p-[50px_20px] lg:p-[50px] flex flex-col justify-start space-y-[30px]">
      <div className="w-full lg:w-[50%]">
        <p className="font-montserrat text-white text-[30px] lg:text-[52px] font-[600]">
          Contact
        </p>
        <p className="text-[15px] lg:text-[20px] font-montserrat font-[400] text-white">
          Join us on this journey towards a brighter future, Where Purpose
          Guides Progress.
        </p>
      </div>
      <div className="w-full lg:w-[50%] flex-col items-start space-y-[30px]">
        <div className="flex items-start space-x-[10px]">
          <FaXTwitter className="text-secondary text-[50px]" />
          <div>
            <a className="flex items-center space-x-[5px] cursor-pointer">
              <p className="text-[18px] lg:text-[20px] font-montserrat font-[600] text-white">
                Twitter
              </p>
              <CiShare1 className="text-white text-[20px]" />
            </a>
            <p className="text-[15px] lg:text-[20px] font-montserrat font-[400] text-white">
              Follow @Mataratoken to get the latest news and updates from across
              the ecosystem.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-[10px]">
          <FaTelegramPlane className="text-secondary text-[50px]" />
          <div>
            <a className="flex items-center space-x-[5px] cursor-pointer">
              <p className="text-[18px] lg:text-[20px] font-montserrat font-[600] text-white">
                Telegram
              </p>
              <CiShare1 className="text-white text-[20px]" />
            </a>
            <p className="text-[15px] lg:text-[20px] font-montserrat font-[400] text-white">
              Join our active telegram community @Mataratoken to participate in
              discussions,
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-[10px]">
          <CiMail className="text-secondary text-[30px] lg:text-[50px]" />
          <div>
            <a href="mailto:mataratoken@gmail.com" className="flex items-center space-x-[5px] cursor-pointer">
              <p className="text-[18px] lg:text-[20px] font-montserrat font-[600] text-white">
                Gmail
              </p>
            </a>
            <p className="text-[15px] lg:text-[20px] font-montserrat font-[400] text-white text-start">
              Send us mail <br /> Mataratoken@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col space-y-[20px]">
        <div className="mt-[10px] flex items-center justify-between ">
          <div className="hidden lg:flex items-center space-x-[20px] ">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white font-[400]  font-inter hover:text-secondary transition-colors text-[16px]"
              >
                {link.title}
              </a>
            ))}
          </div>
          <button className="border-[2px] p-[5px_25px] rounded-[6px] border-white">
            <p className="text-white font-inter">ENG</p>
          </button>
        </div>
        <hr className="text-white" />
        <p>© 2023 Matara Token. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

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
