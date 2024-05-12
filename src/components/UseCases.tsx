import React from "react";

function UseCases() {
  return (
    <div className="mt-[20px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center 2xl:container p-[50px_20px] md:p-[50px]">
        <p className="font-montserrat font-[600] text-[30px] lg:text-[52px] text-white">
          Use Cases
        </p>
        <p className="font-montserrat font-[400] text-[18px] lg:text-[24px] text-white text-center ">
          Matara is empowering individuals to live purposeful lives through
          <br className="hidden lg:block" /> real-world examples and case
          studies in making a difference in the world.
        </p>

        <div className="mt-[40px] grid min-h-[380px] md:grid-cols-3 gap-[40px] text-white w-full lg:w-[70%] 3xl:w-[60%]">
          <div className="border">loll</div>
          <div className="border">loll</div>
          <div className="border">loll</div>
        </div>
        <div className="flex mt-[60px] flex-col items-center justify-center">
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
