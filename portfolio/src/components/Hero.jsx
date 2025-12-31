export const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-wrap mt-8 md:justify-between md:mt-10">
      <div class="flex flex-col gap-10">
        <p className="text-blue-400 text-xl">Welcome to my site</p>
        <div className="text-blue-500 text-5xl md:text-7xl leading-tight">
          Hi, I'm John Doe, a <br /> UI UX{" "}
          <span className="text-blue-600">Designer</span>
        </div>
        <p className="text-gray-600 text-xl flex md:w-140">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          commodi, laudantium perspiciatis adipisci reiciendis ex suscipit
          consequuntur ipsa, similique, ratione sint{" "}
        </p>
        <div className="flex gap-5">
          <button className="bg-blue-500 text-white text-xl px-6 py-2 rounded-md cursor-pointer hover:bg-blue-600">
            Hire Me
          </button>
          <button className="bg-blue-500 text-white text-xl px-6 py-2 rounded-md cursor-pointer hover:bg-blue-600">
            View Resume
          </button>
        </div>
      </div>
      <img
        src="/assets/hero-image.png"
        alt="hero-img"
        className="h-[25rem] w-[25rem] mt-16 md:mt-0"
      />
    </div>
  );
};
