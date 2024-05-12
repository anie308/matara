function Blog() {
  return (
    <div className="bg-primary flex flex-col items-center justify-center mt-[40px] p-[50px_20px] lg:p-[50px]">
      <p className="font-montserrat font-[600] text-[30px] lg:text-[52px] text-white">Blog</p>
      <p className="font-montserrat font-[400] text-[18px] lg:text-[24px] text-white text-center ">
        Stay updated with the latest news and articles on purpose-driven{" "}
        <br className="hidden lg:block" /> living, blockchain technology, and
        community empowerment.
      </p>

      <div className="mt-[40px] grid min-h-[380px] md:grid-cols-3 gap-[40px] text-white w-full lg:w-[75%]">
        <div className="bg-[#D9D9D90A] bcard p-[15px] ">
          <div className="h-[200px]  w-full border rounded-[10px]"></div>
          <div className="mt-[20px]">
            <p className="text-secondary font-inter text-[16px]">Blog</p>
            <p className="text-white font-montserrat font-[600] text-[20px]">
              Introducing Matara
            </p>
            <p className="text-[#DFDBDB] font-montserrat font-[400] text-[16px] leading-[21px]">
              Matara is the leader of the future where its followers.
            </p>
          </div>
        </div>
        <div className="bg-[#D9D9D90A] bcard p-[15px]">
          <div className="h-[200px] w-full border rounded-[10px]"></div>
          <div className="mt-[20px]">
            <p className="text-secondary font-inter text-[16px]">Blog</p>
            <p className="text-white font-montserrat font-[600] text-[20px]">
              Introducing Matara
            </p>
            <p className="text-[#DFDBDB] font-montserrat font-[400] text-[16px] leading-[21px]">
              Matara is the leader of the future where its followers.
            </p>
          </div>
        </div>
        <div className="bg-[#D9D9D90A] bcard p-[15px]">
          <div className="h-[200px] w-full border rounded-[10px]"></div>
          <div className="mt-[20px]">
            <p className="text-secondary font-inter text-[16px]">Blog</p>
            <p className="text-white font-montserrat font-[600] text-[20px]">
              Introducing Matara
            </p>
            <p className="text-[#DFDBDB] font-montserrat font-[400] text-[16px] leading-[21px]">
              Matara is the leader of the future where its followers.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Blog;
