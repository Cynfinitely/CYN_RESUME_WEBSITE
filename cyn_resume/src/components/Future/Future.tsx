import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Test = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full">
      <button className=" btn1 w-full" onClick={handleOpenModal}>
        <span> Future Plans</span>
      </button>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="visible opening"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="cd-transition-background" />
            <div className="cd-modal visible">
              <div className="modal-content">
                <h1>My Future Plans</h1>
                <h3>Java Full Stack Project</h3>
                <p>
                  I am working on full-stack project which will be about library
                  management system. I will use Spring and Java in this project.
                </p>
                <h3>Youtube Channel</h3>
                <p>
                  I am planning to open youtube channel which will include HTML
                  , CSS and other web development topics.
                </p>
                <h3>StudyHelper</h3>
                <p>
                  I am planning to develop app that helps user to study more
                  with motivation tools and community support.
                </p>
              </div>
              <button className="modal-close" onClick={handleCloseModal}>
                Close Modal
              </button>
            </div>
            <div className="cd-transition-layer">
              <div className="bg-layer"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Test;
