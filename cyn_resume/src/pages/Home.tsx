import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Test from "../components/Future/Future";
import g1 from "../img/g1.png";

const Home = () => {
  return (
    <div className="flex flex-col grow w-screen mt-2">
      {" "}
      <div className=" flex flex-col   md:grid  md:h-min md:gap-6 md:grid-cols-5 md:divide-x">
        <div>
          <About />
          <div className="px-4 text-center pt-2">
            Meet Celal Yasin Nari! With experience in software development and
            project management, he's a tech enthusiast who loves staying
            up-to-date with the latest trends. Celal is a skilled full-stack web
            developer, working with Java, JavaScript, and Python. He has a track
            record of delivering successful projects on time and within budget
            while leading cross-functional teams. He enjoys a challenge and
            excels in fast-paced environments. Celal is a proactive problem
            solver and a great communicator, making him a valuable asset to any
            team.
          </div>
        </div>
        <div className="flex flex-col ">
          <Skills />
          <ul className="text-center mt-6">
            <li className="mb-2 font-extrabold">Front-End Skills: </li>
            <ol className="mb-2">
              <li>
                React Js,TypeScript ,HTML, CSS, SASS ,Bootstrap, Tailwind ,
                Redux / Toolkit{" "}
              </li>
            </ol>
            <li className="mb-2 font-extrabold">Back-End Skills: </li>
            <ol className="mb-2">
              <li>NodeJs, Express , REST API , Django , Java</li>
            </ol>
            <li className="mb-2 font-extrabold">Databases: </li>
            <ol className="mb-2">
              <li>PostgreSQL, MongoDB , Mongoose, Firebase </li>
            </ol>
            <li className="mb-2 font-extrabold">DEVOPS: </li>
            <ol className="mb-2">
              <li>Docker, Netlify , Heroku , Vercel</li>
            </ol>
            <li className="mb-2 font-extrabold">Cloud: </li>
            <ol className="mb-2">
              <li>AWS, Azure</li>
            </ol>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={g1}
            className=""
            alt="logo"
          />
        </div>
        <div>
          <Projects />
          <div className=" flex flex-col mt-4 items-center ">
            <a
              href="https://fs12-fullstack-psi.vercel.app/ "
              className="underline underline-offset-8 decoration-2 decoration-wavy  hover:decoration-green-900 m-4 uppercase hover:no-underline hover:border-y-2 hover:border-black">
              Lin Bags
            </a>

            <a
              href="https://slush-todo-match.herokuapp.com/"
              className="underline underline-offset-8 decoration-2 decoration-wavy hover:decoration-green-900 m-4 uppercase hover:no-underline hover:border-y-2 hover:border-black">
              Slush Match-ToDo
            </a>

            <a
              href="https://github.com/Cynfinitely/Django-Blog-App"
              className="underline underline-offset-8 decoration-2 decoration-wavy hover:decoration-green-900 m-4 uppercase hover:no-underline hover:border-y-2 hover:border-black">
              Django Blog App
            </a>

            <a
              href="https://ronaldovsmessi-b7b75.web.app/"
              className="underline underline-offset-8 decoration-2 decoration-wavy hover:decoration-green-900 m-4 uppercase hover:no-underline hover:border-y-2 hover:border-black">
              Ronaldo Vs Messi
            </a>

            <a
              href="https://github.com/Project-Hunters-Works/Ducktivity"
              className="underline underline-offset-8 decoration-2 decoration-wavy hover:decoration-green-900 m-4 uppercase hover:no-underline hover:border-y-2 hover:border-black">
              Ducktivity
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <Test />
          <div className="flex flex-col mt-4 justify-venter items-center grow ">
            <ul className="">
              <li className="my-4">Java Full Stack App</li>
              <li className="my-4">Youtube Channel</li>
              <li className="my-4">StudyHelper</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
