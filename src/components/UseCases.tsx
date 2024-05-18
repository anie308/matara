import React from "react";
import book from "@/assets/svg/mbookk.svg";
import social from "@/assets/svg/msocial.svg";
import comm from "@/assets/svg/mcom.svg";
import Image from "next/image";
function UseCases() {
  return (
    <div className="mt-[50px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center 2xl:container p-[50px_20px] md:p-[50px]">
        <p className="font-montserrat font-[600] text-[30px] lg:text-[52px] text-white">
          Use Cases
        </p>
        <p className="font-montserrat font-[400] text-[18px] lg:text-[24px] text-white text-center ">
          Matara is empowering individuals to live purposeful lives through
          <br className="hidden lg:block" /> real-world examples and case
          studies in making a difference in the world.
        </p>

        <div className="mt-[40px] grid min-h-[380px] md:grid-cols-3 gap-[40px] text-white w-full lg:w-[80%] 3xl:w-[60%]">
          <div className="use border-[2px] border-[#FFFFFF80] rounded-[10px] p-[20px_10px] flex flex-col items-center justify-center space-y-[20px]">
            <div className=" h-[90px] w-[90px] bg-secondary rounded-full items-center justify-center flex">
              <Image src={book} alt="book-icon" />
            </div>
            <p className=" font-[600] font-montserrat text-white text-[20px]">
              Personal Development
            </p>
            <p className="px-[10px] text-[20px] font-montserrat text-white text-center">
              Lorem ipsum dolor sit amet consectetur. Dapibus est diam accumsan
              nunc vel lacus. Aliquet elementum mi leo arcu{" "}
            </p>
          </div>
          <div className="use border-[2px] border-[#FFFFFF80] rounded-[10px] p-[20px_10px] flex flex-col items-center justify-center space-y-[20px]">
            <div className=" h-[90px] w-[90px] bg-secondary rounded-full items-center justify-center flex">
              <Image src={social} alt="book-icon" />
            </div>{" "}
            <p className=" font-[600] font-montserrat text-white text-[20px]">
              Social Change
            </p>
            <p className="px-[10px] text-[20px] font-montserrat text-white text-center">
              Lorem ipsum dolor sit amet consectetur. Dapibus est diam accumsan
              nunc vel lacus. Aliquet elementum mi leo arcu{" "}
            </p>
          </div>
          <div className="use border-[2px] border-[#FFFFFF80] rounded-[10px] p-[20px_10px] flex flex-col items-center justify-center space-y-[20px]">
            <div className=" h-[90px] w-[90px] bg-secondary rounded-full items-center justify-center flex">
              <Image src={comm} alt="book-icon" />
            </div>{" "}
            <p className=" font-[600] font-montserrat text-white text-[20px]">
              Community
            </p>
            <p className="px-[10px] text-[20px] font-montserrat text-white text-center">
              Lorem ipsum dolor sit amet consectetur. Dapibus est diam accumsan
              nunc vel lacus. Aliquet elementum mi leo arcu{" "}
            </p>
          </div>
        </div>
        <div className="flex mt-[80px] flex-col items-center justify-center">
          <p className="font-montserrat font-[600] text-[30px] lg:text-[52px] text-white">
            What Matara Offers
          </p>
          <p className="font-montserrat font-[400] text-[18px] lg:text-[24px] text-white text-center ">
            Explore the features and benefits of joining the Matara community.
            From educational <br className="hidden lg:block" /> resources to
            community engagement initiatives, we offer a range of services to
            help <br className="hidden lg:block" /> you on your journey towards
            purposeful living.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseCases;
