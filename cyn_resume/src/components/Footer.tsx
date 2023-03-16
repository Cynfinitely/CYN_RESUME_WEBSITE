import React from "react";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <div className="footer bg-grain">
      <div className="lg:flex justify-center lg:justify-start">
        <div className="w-full lg:flex-auto flex items-center pl-6 p-4 sm:space-x-10 justify-center lg:justify-start">
          <a
            href="https://github.com/Cynfinitely"
            className=" sm:block hidden"
          >
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
              href="/faqs"
              className="rounded-full border px-4 pt-1 pb-0.5 transition-colors ease-in-out duration-200 border-main/10 hover:border-main"
            >
              {" "}
              FAQ{" "}
            </a>
            <div className="hidden lg:block lg:flex-grow"></div>
            <a href="https://demo.grandleisure.org/" target="_blank">
              <div className="uppercase font-benton text-main text-sm rounded-full border px-4 pt-1 pb-0.5 transition-colors ease-in-out duration-200 border-main/10 hover:border-main">
                {" "}
                Demo{" "}
              </div>
            </a>
          </nav>
        </div>
        <div className="pointer-events-none lg:block hidden max-w-[205px] absolute bottom-0 left-1/2 transform -translate-x-1/2 aspect-square">
          <img src={logo} className="" />
        </div>
        <div className="lg:flex-1 lg:flex items-center px-4 pb-2 lg:px-0 justify-center lg:justify-end lg:pr-4 lg:py-2 text-right">
          <div className="hidden lg:block xl:hidden"></div>
          <div>
            <a
              href="https://opensea.io/collection/grand-leisure"
              target="_blank"
              className="group min-w-[300px] text-cream text-2xl font-editorial pt-1 relative h-[48px] rounded-2xl bg-main w-full flex items-center justify-center px-4 flex-shrink-0"
            >
              <svg
                className="-mt-1 group-hover:running animate-spin pause"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.32029 6.01315C3.4653 5.21566 5.15556 3.47263 5.98393 1.32787C6.76259 3.47069 8.44806 5.20673 10.6285 6.00608C8.50531 6.81309 6.83388 8.54857 6.01315 10.6797C5.21472 8.53217 3.46852 6.84046 1.32029 6.01315Z"
                  stroke="#E7E2D8"
                ></path>
              </svg>
              <span className="flex-1 text-center px-4">View on OpenSea</span>
              <svg
                className="-mt-1 group-hover:running animate-spin pause"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.32029 6.01315C3.4653 5.21566 5.15556 3.47263 5.98393 1.32787C6.76259 3.47069 8.44806 5.20673 10.6285 6.00608C8.50531 6.81309 6.83388 8.54857 6.01315 10.6797C5.21472 8.53217 3.46852 6.84046 1.32029 6.01315Z"
                  stroke="#E7E2D8"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
