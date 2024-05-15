import React from "react";
import pose from "@/assets/svg/mpose.svg";
import mbg from "@/assets/svg/mherobg.svg";
import Image from "next/image";
function Hero() {
  return (
    <div>
      <div className="bg-primary h-[900px]  flex items-center justify-end relative">
        <div className="absolute top-0  w-[60%] left-0 py-[40px] pl-[40px] h-full">
          <p className="gtext text-[64px] font-montserrat font-[700] leading-[72px]">
            Welcome to Matara Where Hope Lives
          </p>
          <p className="text-[24px] font-montserrat text-[#FFFFFF] mt-[50px]">
            At Matara, we believe in the power of purpose. Our mission is to
            empower individuals to discover their true essence and navigate life
            with clarity and direction.
          </p>
          <button className="gbtn p-[10px_40px] mt-[50px] rounded-[10px] text-[#10100B] font-inter text-[20px] font-[600]">
            Whitepaper
          </button>
        </div>
        <Image src={pose} className="h-[800px] z-20" alt="pose" />
        <Image src={mbg} className="absolute bottom-0 w-full "  alt="hero-bg" />
      </div>
    </div>
  );
}

export default Hero;
