import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [showModal, setShowModal] = React.useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="w-full">
      <>
        <button className="btn1 w-full" type="button" onClick={handleOpenModal}>
          <span> Projects</span>
        </button>
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="cd-transition-layer visible opening"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="cd-transition-background" />
              <div className="cd-modal visible">
                <div className="modal-content text-center">
                  <h1>My Projects</h1>
                  <div className="project flex flex-col">
                    <h3>Lin Bags</h3>

                    <div className="flex flex-row w-full justify-evenly mt-8">
                      <a
                        href="https://github.com/Cynfinitely/fs12-fullstack/tree/main"
                        className="btn2 w-1/4 md:px-4 md:py-8"
                      >
                        GitHub Repo
                      </a>

                      <a
                        href="https://fs12-fullstack-psi.vercel.app/"
                        className="btn2 w-1/4 ml-24 md:px-4 md:py-8"
                      >
                        Project Website
                      </a>
                    </div>

                    <p>
                      This is a full stack project created using the MERN stack
                      and Tailwind CSS. The project is a simple e-commerce
                      application that allows admin to create, view, update, and
                      delete users/products. And Users can see products and add
                      to cart. It also includes authentication and authorization
                      functionality to ensure that only authorized users can
                      access certain features.
                    </p>
                    <h6>Features</h6>
                    <div>
                      The application includes the following features:
                      <ul>
                        <li>User registration and login </li>
                        <li>Product creation and deletion </li>
                        <li>Product updating </li>
                        <li>User profile editing</li>
                        <li>Authentication and authorization</li>
                        <li> Responsive design using Tailwind CSS</li>
                      </ul>{" "}
                    </div>
                  </div>
                  <div className="project flex flex-col">
                    <h3>Slush Match&ToDo</h3>
                    <div className="flex flex-row w-full justify-evenly mt-8">
                      <a
                        href="https://github.com/Cynfinitely/slush"
                        className="btn2 w-1/4 md:px-4 md:py-8"
                      >
                        GitHub Repo
                      </a>

                      <a
                        href="https://slush-todo-match.herokuapp.com/"
                        className="btn2 w-1/4 ml-24 md:px-4 md:py-8"
                      >
                        Project Website
                      </a>
                    </div>
                    <p>
                      Slush is a full-stack web application created using the
                      PERN stack (PostgreSQL, Express.js, React, and Node.js)
                      and Tailwind CSS. The application is designed to help
                      users manage their tasks by providing a simple and
                      intuitive interface for creating, editing, and deleting
                      tasks. It also includes authentication and authorization
                      functionality to ensure that only authorized users can
                      access certain features. There is also matching system
                      beyond users about their roles.
                    </p>
                    <h6>Features</h6>
                    <div>
                      The application includes the following features:
                      <ul>
                        <li>User Matching System</li>
                        <li>User registration and login </li>
                        <li>Task creation and deletion </li>
                        <li>Task updating </li>
                        <li>User profile editing</li>
                        <li>Authentication and authorization</li>
                        <li> Responsive design using Tailwind CSS</li>
                      </ul>{" "}
                    </div>
                    <h6>Tech Used</h6>
                    <ul>
                      <li>PostgreSQL</li>
                      <li>Express.js</li>
                      <li>React</li>
                      <li>Nodejs</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                  <div className="project flex flex-col">
                    <h3>Django Blog App</h3>
                    <div className="flex flex-row w-full justify-evenly mt-8">
                      <a
                        href="https://github.com/Cynfinitely/Django-Blog-App"
                        className="btn2 w-1/4 md:px-4 md:py-8 "
                      >
                        GitHub Repo
                      </a>

                    </div>
                    <p>
                      Django Blog App is a simple yet powerful blogging platform
                      built with Python and Django framework. It allows users to
                      create, publish, and manage their own blog posts. The
                      application comes with a clean, responsive UI that makes
                      it easy to use on any device with django-rest-framework.
                    </p>
                    <h6>Features</h6>
                    <p>The application includes the following features:</p>
                    <ol>
                      <li>User authentication and authorization system</li>
                      <li>User profile management</li>
                      <li>CRUD operations for blog posts</li>
                      <li>Blog post categorization and filtering</li>
                      <li>Pagination for blog posts</li>
                      <li>Search functionality for blog posts</li>
                      <li>Responsive UI design</li>
                    </ol>
                    <h6>Tech Used</h6>
                    <ul>
                      <li>Python</li>
                      <li>Django</li>
                      <li>Django Rest Framework</li>
                      <li>HTML/CSS</li>
                      <li>Bootstrap</li>
                      <li>SQLite3 (default database used by Django)</li>
                    </ul>
                  </div>
                  <div className="project flex flex-col">
                    <h3>Ronaldo Vs Messi</h3>
                    <div className="flex flex-row w-full justify-evenly mt-8">
                      <a
                        href="https://github.com/Cynfinitely/ronaldoormessi"
                        className="btn2 w-1/4 md:px-4 md:py-8"
                      >
                        GitHub Repo
                      </a>

                      <a
                        href="https://ronaldovsmessi-b7b75.web.app/"
                        className="btn2 w-1/4 ml-24 md:px-4 md:py-8"
                      >
                        Project Website
                      </a>
                    </div>
                    <p>
                      Ronaldo or Messi is a fun project that showcases my skills
                      in React, Firebase, and Tailwind CSS. This application
                      provides a platform for football fans to share their
                      opinions on who is the better player between Ronaldo and
                      Messi. This project demonstrates my ability to build a
                      responsive web application that integrates with a backend
                      service. Feel free to check out the code and let me know
                      your thoughts.
                    </p>
                    <h6>Tech Used</h6>
                    <ul>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>Redux Toolkit</li>
                      <li>Firebase</li>
                    </ul>
                  </div>
                  <div className="project flex flex-col">
                    <h3>Ducktivity</h3>
                    <div className="flex flex-row w-full justify-evenly mt-8">
                      <a
                        href="https://github.com/Project-Hunters-Works/Ducktivity"
                        className="btn2 w-1/4 md:px-4 md:py-8"
                      >
                        GitHub Repo
                      </a>

                      <a
                        href="https://ducktivity.co/"
                        className="btn2 w-1/4 ml-24 md:px-4 md:py-8"
                      >
                        Project Website
                      </a>
                    </div>
                    <p>
                      In this project, we found solutions for people who are
                      seeking study methods online. On this website, we offer
                      people scientific study methods and provide them templates
                      for that. We used SASS, Bootstrap, and Javascript. Also,
                      we used Agile methods to handle workflow. I was also part
                      of 6 member team and we pushed our work periodically to
                      GitHub. We used Gumroad interface for our
                      templates.Finally, we deploy our website by using IONOS
                      web servers.
                    </p>
                  </div>
                </div>
                <button className="modal-close" onClick={handleCloseModal}>
                  Close Modal
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </div>
  );
};

export default Projects;
