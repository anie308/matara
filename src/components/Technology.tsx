import React from "react";
import MCoin from "@/assets/svg/mcoin.svg";
import SMCoin from "@/assets/svg/smcoin.svg";
import Image from "next/image";
function Technology() {
  return (
    <div className="flex items-center justify-center">
        <div className="relative flex flex-col-reverse md:flex-row gap-[40px] items-center  justify-between p-[50px_20px] md:p-[50px] 2xl:container">
      <div className="flex-1">
        <p className="font-inter text-[32px] lg:text-[52px] font-[600] text-white">
          Technology
        </p>
        <p className="font-montserrat text-[16px] lg:text-[24px] font-[400] text-[#DFDBDB]">
          Matara leverages blockchain technology to create a decentralised
          ecosystem where transparency, security, and trust are paramount. Built
          on the Binance Smart Chain (BSC), our $MAT token serves as the native
          currency and utility token of the ecosystem, enabling users to access
          premium features, participate in governance processes, and engage in
          transactions within the community.
        </p>
      </div>
      <div className="flex-1 relative items-center justify-center">
        <div className="bg-[#FFFFFF1A] h-[600px] w-[600px] rounded-full  absolute right-[-50px] blur-3xl hidden lg:block"></div>
        <Image src={SMCoin} alt="" className="lg:hidden" />

        <Image src={MCoin} alt="" className="hidden lg:flex h-[600px]" />
      </div>
    </div>
    </div>
  );
}

export default Technology;
