import React from "react";
import mfltd from "@/assets/svg/mftld.svg";
import mlogo from "@/assets/svg/mlogo2.svg";
import mlogo3 from "@/assets/svg/mlogo3.svg";
import mlogo4 from "@/assets/svg/mlogo4.svg";
import mlogo5 from "@/assets/svg/mlogo5.svg";
import mlogo6 from "@/assets/svg/mlogo6.svg";
import mlogo7 from "@/assets/svg/mlogo7.svg";

import Image from "next/image";
function BackedBy() {
  return (
    <div className="bg-[#D9D9D90F]  text-white mt-[100px] flex items-center justify-center">
      <div className="p-[50px_20px] lg:p-[50px] 2xl:container flex flex-col items-center justify-center">
        <p className="font-montserrat font-[600] text-[30px] lg:text-[52px] text-white">
          Backed by
        </p>
        <p className="font-montserrat font-[400] text-[18px] lg:text-[24px] text-white text-center ">
          Our strategic partnerships and collaborations that enhance the Matara
          ecosystem.
        </p>

        <div className="mt-[40px] flex flex-row lg:justify-between w-full flex-wrap gap-[10px]">
          <Image className="h-[32px] lg:h-full" src={mfltd} alt="mfltd" />
          <Image className="h-[32px] lg:h-full" src={mlogo} alt="mfltd" />
          <Image className="h-[32px] lg:h-full" src={mlogo3} alt="mfltd" />
          <Image className="h-[32px] lg:h-full" src={mlogo4} alt="mfltd" />
          <Image className="h-[32px] lg:h-full" src={mlogo5} alt="mfltd" />
          <Image className="h-[32px] lg:h-full" src={mlogo6} alt="mfltd" />
          <Image className="h-[32px] lg:h-full" src={mlogo7} alt="mfltd" />
        </div>
      </div>
    </div>
  );
}

export default BackedBy;
