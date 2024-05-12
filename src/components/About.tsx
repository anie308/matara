import Image from "next/image";
import MABout from "@/assets/svg/mabout.svg";
import SMABout from "@/assets/svg/smabout.svg";
function About() {
  return (
    <div className="bg-[#D9D9D90F] flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-[40px] lg:gap-0 items-center  p-[50px_20px] md:p-[50px] 2xl:container">
      <div className="w-full md:w-[40%]  flex items-center justify-center">
        <Image src={MABout} alt="" className="hidden lg:flex" />
        <Image src={SMABout} alt="" className="lg:hidden" />
      </div>
      <div className="text-white flex-1 w-full md:w-[60%]  h-full">
        <p className="font-inter text-[32px] lg:text-[52px] font-[600] text-white">
          About Matara
        </p>
        <p className="font-montserrat text-[16px] lg:text-[24px] font-[400] text-[#DFDBDB]">
          In its true Essence, Matara is the leader of the brave community of
          people striving to become better everyday and head towards fulfilling
          their purpose. It is an open-source peer-to-peer cryptocurrency that
          harnesses blockchain technology, a robust decentralised system for
          storing data in a publicly accessible ledger. This ledger is upheld by
          a network of computers known as nodes, ensuring high levels of
          security and transparency. Beyond this, In its true form, Matara is
          the leader of the future where its followers and community are made up
          of people like you living out their true self in a community of like
          minds.
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;
