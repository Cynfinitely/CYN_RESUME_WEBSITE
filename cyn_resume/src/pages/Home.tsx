import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import MyModal from "../components/MyModal";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Test from "./Test";

const Home = () => {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <Test/>
        <MyModal />
        <About />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
