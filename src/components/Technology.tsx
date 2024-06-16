import React from "react";
import MCoin from "@/assets/svg/mcoin.svg";
import SMCoin from "@/assets/svg/smcoin.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
function Technology() {
  const t = useTranslations('Index')

  return (
    <div className="flex items-center justify-center">
        <div className="relative flex flex-col-reverse md:flex-row gap-[40px] items-center  justify-between p-[50px_20px] md:p-[50px] 2xl:container">
      <div className="flex-1">
        <p className="font-inter text-[32px] lg:text-[52px] font-[600] text-white">
          {t('techTitle')}
        </p>
        <p className="font-montserrat text-[16px] lg:text-[24px] font-[400] text-[#DFDBDB]">
          {t('techSubtitle')}
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
