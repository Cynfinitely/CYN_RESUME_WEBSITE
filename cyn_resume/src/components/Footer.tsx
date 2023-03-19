import React from "react";
import logo from "../img/logo.png";

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
              className="!border-main router-link-exact-active rounded-full border px-4 pt-1 pb-0.5 transition-colors ease-in-out duration-200 border-main/10 hover:border-main"
              aria-current="page"
            >
              {" "}
              GitHub{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/celal-yasin-nari/"
              className="rounded-full border px-4 pt-1 pb-0.5 transition-colors ease-in-out duration-200 border-main/10 hover:border-main"
            >
              {" "}
              LinkedIn{" "}
            </a>
            <a
              href="https://celalyasinnari.medium.com/"
              className="rounded-full border px-4 pt-1 pb-0.5 transition-colors ease-in-out duration-200 border-main/10 hover:border-main"
            >
              {" "}
              Medium{" "}
            </a>
          </nav>
        </div>
        <div className="lg:flex-1 lg:flex items-center px-4 pb-2 lg:px-0 justify-center lg:justify-end lg:pr-4 lg:py-2 text-right">
          <div className="hidden lg:block xl:hidden"></div>
          <div>
            <a
              href="https://opensea.io/collection/grand-leisure"
              target="_blank"
              className="group min-w-[300px] text-cream text-2xl font-editorial pt-1 relative h-[48px] rounded-2xl bg-main w-full flex items-center justify-center px-4 flex-shrink-0"
            >
              <span className="flex-1 text-center px-4">View on OpenSea</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
