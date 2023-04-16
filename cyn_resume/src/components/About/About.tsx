import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
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
        <button
          className="btn1 w-full mb-4"
          type="button"
          onClick={handleOpenModal}
        >
          <span > About Me</span>
         
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
                <div className="modal-content">
                  <h1>About Me</h1>

                  <p>
                    Celal Yasin Nari is a seasoned professional in software
                    development and project management. He has a strong
                    background in full-stack web development, which includes
                    expertise in programming languages like Java, JavaScript,
                    and Python. Celal is passionate about technology and is
                    always keeping himself up-to-date with the latest industry
                    trends. Over the years, Celal has been involved in designing
                    and implementing complex systems, leading cross-functional
                    teams, and delivering successful projects on time and within
                    budget.
                    <p>
                      His experience in project management is reflected in his
                      ability to manage projects from ideation to execution
                      while keeping a keen eye on the bottom line. Celal's
                      skills are not limited to technical abilities alone. He
                      possesses excellent communication skills and works
                      exceptionally well with others. He is known for his
                      proactive problem-solving skills, which he attributes to
                      his experience in working in fast-paced and challenging
                      environments.{" "}
                    </p>
                    <p>
                      {" "}
                      Celal thrives on challenges, and his ability to manage
                      multiple tasks and deliver exceptional results has been
                      one of his key attributes. His expertise in project
                      management extends beyond just delivering projects within
                      budget and time. He has a knack for working with diverse
                      teams and has developed an impressive track record in
                      fostering collaboration and communication within teams,
                      leading to improved productivity, employee satisfaction,
                      and better results.
                    </p>
                    <p>
                      {" "}
                      Celal is also passionate about mentoring and coaching
                      junior developers. He believes in creating a learning
                      environment where everyone can improve their skills and
                      grow as professionals. His ability to teach complex
                      concepts in simple terms has made him an invaluable mentor
                      to many young developers.{" "}
                    </p>
                    <p>
                      In summary, Celal Yasin Nari is a dynamic and
                      results-driven professional with a passion for technology
                      and a wealth of experience in software development and
                      project management. He is an exceptional leader,
                      communicator, and problem solver who excels in fast-paced
                      and challenging environments. Celal's ability to work
                      collaboratively with teams, coupled with his expertise in
                      technical and project management skills, makes him an
                      asset to any organization he works with.
                    </p>
                  </p>
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

export default About;
