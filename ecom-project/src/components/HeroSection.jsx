export const HeroSection = () => {
  return (
    <div className="flex justify-center items-center gap-8 lg:gap-0 lg:justify-between w-[82%] m-auto mt-28 flex-wrap lg:flex-nowrap ">
      <div className="flex flex-col gap-8 w-full">
        <h1 className="text-4xl font-bold">Shop Smarter. Shop Better.</h1>
        <p className="w-full lg:w-[38rem]">
          Discover thousand of products,each carefully selected for quality,
          style and value bringing everything you need and love into one
          convenient place
        </p>
        <div className=" flex gap-4">
          <button className="bg-black text-white py-3 px-8 rounded-md hover:text-black hover:bg-white cursor-pointer border">
            Shop Now
          </button>
          <button className="bg-black text-white py-3 px-8 rounded-md hover:text-black hover:bg-white cursor-pointer border">
            Explore Deals
          </button>
        </div>
      </div>
      <img
        src="/assets/hero-image.png"
        alt="hero-img"
        className="w-[20rem] lg:w-[30rem] lg:h-[25rem]"
      />
    </div>
  );
};
