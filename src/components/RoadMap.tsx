import Image from "next/image";
import React from "react";
import roadmap from '@/assets/svg/mroad.svg'
function RoadMap() {
  return (
    <div className="container p-[50px_20px] md:p-[50px]">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        Roadmap
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Track our progress and upcoming milestones
      </p>
      <div className=" w-full flex items-center justify-center">
        <Image src={roadmap} alt="" />
      </div>
    </div>
  );
}

export default RoadMap;
