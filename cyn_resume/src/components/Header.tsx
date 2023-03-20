import React from "react";

const Header = () => {
  const currentDate = new Date();
  let date = currentDate.getDate();
  let month = new Date().toLocaleString("en-US", { month: "long" });

  return (
    <div className="head w-full ">
      <div className="headerobjectswrapper ml-4 mt-4 flex flex-row text-center">
        <div className="box flex flex-col p-2 leading-5  border-double border-2 border-[#2f2f2f] justify-evenly">
          <span className="mb-2 md:mb-0">Full Stack Developer</span>
          <span className="mb-2 md:mb-0">Front-End Developer</span>
          <span className="mb-2 md:mb-0">Back-End Developer</span>
          <span className="mb-2 md:mb-0"> Instructor</span>
        </div>
        <div className="grow">
          <header className="">CELAL YASIN NARI</header>
        </div>
        <div className="hidden md:flex grow flex flex-row items-center justify-center text-center text-2xl">
          {date} {month}
        </div>
      </div>
      <div className="subhead p-2 my-2 border-y-2 border-[#2f2f2f] text-center">
        When life gives you a lemons..
      </div>
    </div>
  );
};

export default Header;
