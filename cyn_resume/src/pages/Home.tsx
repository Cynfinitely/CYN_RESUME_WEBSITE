import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Test from "./Test";
import g1 from "../img/g1.png";

const Home = () => {
  return (
    <div className="flex flex-col grow w-screen">
      {" "}
      <div className="flex flex-row items-center justify-center h-full">
        <div className="flex flex-col h-full justify-evenly">
          {" "}
          <Test />
          <About />
        </div>
        <div>
          <img src={g1} className="" alt="logo"/>
        </div>
        <div className="flex flex-col h-full justify-evenly">
          {" "}
          <Projects />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Home;
