import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Skills = () => {
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
          <span> Skills</span>
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
                  <h1>My Skills</h1>

                  <p>
                    Celal Yasin Nari has a diverse skill set that encompasses
                    web development, programming, database management, and more.
                    He is a skilled full-stack web developer with expertise in
                    technologies like React.js, Node.js, and Express, as well as
                    front-end frameworks like Bootstrap and Tailwind. Celal is
                    also proficient in programming languages like JavaScript,
                    TypeScript, Python, and C, and has experience working with
                    databases like MongoDB and PostgreSQL using tools like
                    Mongoose.
                  </p>
                  <p>
                    Additionally, he has experience working with REST APIs and
                    has a strong understanding of Git/Github for version
                    control. Celal is well-versed in the Agile methodology and
                    has experience working with tools like Figma for design and
                    Netlify and Heroku for deployment. He also has experience
                    with Redux/Toolkit for state management and has a keen focus
                    on accessibility in his work.
                  </p>
                  <p>
                    Celal has a passion for technology and is constantly
                    learning new skills to stay up-to-date with the latest
                    trends in the industry. He is an excellent problem solver
                    and is committed to delivering high-quality work that meets
                    the needs of his clients. Overall, Celal's diverse skill set
                    and commitment to excellence make him a valuable asset to
                    any team.
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

export default Skills;
