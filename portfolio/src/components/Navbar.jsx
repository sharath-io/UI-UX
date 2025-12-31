export const Navbar = () => {
  return (
    <nav className=" flex gap-4 justify-between items-center flex-wrap md:flex-row md:gap-0">
      <div className="bg-blue-500 text-white text-2xl rounded-full w-10 h-10 flex justify-center items-center">
        A
      </div>
      <ul className="flex items-center justify-center gap-8 md:flex-row">
        <li className="flex items-center justify-center gap-2 cursor-pointer hover:text-blue-500">
          <img src="/assets/home-icon.svg" alt="home-icon" />
          <span>Home</span>
        </li>
        <li className="flex items-center justify-center gap-2 cursor-pointer hover:text-blue-500">
          <img src="/assets/phone-icon.svg" alt="phone-icon" />
          <span>About Me</span>
        </li>
        <li className="flex items-center justify-center gap-2 cursor-pointer hover:text-blue-500">
          <img src="/assets/user-icon.svg" alt="user-icon" />
          <span>Contact Me</span>
        </li>
      </ul>
    </nav>
  );
};
