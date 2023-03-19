import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import MyModal from "../components/MyModal";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Test from "./Test";

const Home = () => {
  return (
    <div className="flex flex-col grow w-screen" >
      {" "}
      <div className="flex flex-row items-center justify-center h-full">
        {" "}
        <Test/>
        <MyModal />
        <About />
        <Projects />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
