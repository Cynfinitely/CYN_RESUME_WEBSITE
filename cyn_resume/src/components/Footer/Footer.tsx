import React from "react";
import logo from "../../img/logo.png";

const Footer = () => {
  return (
    <div className="footer bg-[#e1efc7] ">
      <div className="lg:flex justify-center lg:justify-start">
        <div className="w-full lg:flex-auto flex items-center pl-6 p-4 sm:space-x-10 justify-center lg:justify-start">
          <a href="https://github.com/Cynfinitely" className=" sm:block hidden">
            <img src={logo} alt="logo" className="object-cover h-24 w-72" />
          </a>
          <nav className="w-full flex space-x-6 lg:space-x-4 uppercase font-benton text-main lg:items-start lg:justify-start items-center justify-center text-sm">
            <a
              href="https://github.com/Cynfinitely"
              className="  rounded-full border border-black px-4 pt-1 pb-0.5  hover:bg-gray-400 "
              aria-current="page"
            >
              {" "}
              GitHub{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/celal-yasin-nari/"
              className="rounded-full border border-black px-4 pt-1 pb-0.5  hover:bg-gray-400"
            >
              {" "}
              LinkedIn{" "}
            </a>
            <a
              href="https://celalyasinnari.medium.com/"
              className="rounded-full border border-black px-4 pt-1 pb-0.5 hover:bg-gray-400"
            >
              {" "}
              Medium{" "}
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
