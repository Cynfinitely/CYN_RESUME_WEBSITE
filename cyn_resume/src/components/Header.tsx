import React from "react";

const Header = () => {
  const currentDate = new Date();
  let date = currentDate.getDate();
  let month = new Date().toLocaleString("en-US", { month: "long" })

  return (
    <div className="head w-full ">
      <div className="headerobjectswrapper ml-4 mt-4 flex flex-row text-center">
        <div className="box flex flex-col p-2 leading-5  border-double border-2 border-[#2f2f2f]">
          <span>Full Stack Developer</span>
          <span>Front-End Developer</span>
          <span>Back-End Developer</span>
          <span>Instructor</span>
        </div>
        <div className="grow">
          <header className="">CELAL YASIN NARI</header>
        </div>
        <div className="grow flex flex-row items-center justify-center text-center text-2xl">
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
