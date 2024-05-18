import React from "react";
import pose from "@/assets/svg/mpose.svg";
import mbg from "@/assets/svg/mherobg.svg";
import Image from "next/image";
function Hero() {
  return (
    <div className="flex items-center justify-center bg-primary relative">
      <div className=" lg:h-[900px]  flex flex-col-reverse lg:flex-row items-center justify-end relative py-[40px] lg:p-0 2xl:container">
        <div className="z-30  relative lg:absolute top-0  w-full lg:w-[60%] left-0 lg:py-[40px] lg:pl-[40px] p-[20px] h-full">
          <p className="gtext text-[30px] lg:text-[64px] font-montserrat font-[700] leading-[35px] lg:leading-[72px]">
            Welcome to Matara Where Hope Lives
          </p>
          <p className="text-[18px] lg:text-[24px] font-montserrat text-[#FFFFFF] mt-[20px] lg:mt-[50px]">
            At Matara, we believe in the power of purpose. Our mission is to
            empower individuals to discover their true essence and navigate life
            with clarity and direction.
          </p>
          <button className="gbtn p-[10px_40px] mt-[20px] lg:mt-[50px] rounded-[10px] text-[#10100B] font-inter text-[20px] font-[600]">
            Whitepaper
          </button>
        </div>
        <Image src={pose} className="lg:h-[800px] z-20 " alt="pose" />
        
      </div>
      <Image src={mbg} className="absolute bottom-0  w-full"  alt="hero-bg" />
    </div>
  );
}

export default Hero;
