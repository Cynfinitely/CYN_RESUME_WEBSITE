import "./styles.css";
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
    <div>
      <button
        className=" btn1"
        onClick={handleOpenModal}
      >
        Open Modal
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
                <h1>My Modal Content</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  modi repellendus, optio eveniet eligendi molestiae? Fugiat,
                  temporibus! A rerum pariatur neque laborum earum, illum
                  voluptatibus eum voluptatem fugiat, porro animi tempora? Sit
                  harum nulla, nesciunt molestias, iusto aliquam aperiam est qui
                  possimus reprehenderit ipsam ea aut assumenda inventore iste!
                  Animi quaerat facere repudiandae earum quisquam accusamus
                  tempora, delectus nesciunt, provident quae aliquam, voluptatum
                  beatae quis similique in maiores repellat eligendi voluptas
                  veniam optio illum vero! Eius, dignissimos esse eligendi
                  veniam.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis saepe amet sit fugit rerum, corporis minus vitae
                  officia quaerat incidunt voluptate, blanditiis ea est
                  quibusdam voluptas animi quasi totam magni, commodi
                  praesentium. Possimus quam illo ipsam iste unde totam
                  cupiditate deleniti, impedit assumenda hic eligendi natus
                  tempora dolores quod mollitia ab non sunt eaque adipisci,
                  suscipit quas aliquid officiis beatae. Necessitatibus
                  voluptatibus, perferendis tenetur perspiciatis adipisci
                  nesciunt eum ex fuga commodi iure numquam enim rem ullam
                  labore nisi magni sint voluptatem quos! Eum iure
                  exercitationem voluptates repellendus culpa doloremque laborum
                  animi illum, sint fugit soluta possimus a fuga veritatis
                  molestias corporis placeat illo pariatur dolor reiciendis
                  earum, sapiente omnis. Placeat maiores omnis, porro officia,
                  laborum eos. Fugiat mollitia inventore consequuntur odit
                  eaque, rerum recusandae, eum sint molestiae consequatur culpa
                  deserunt quae aliquid dolor tempora tenetur architecto
                  repellendus enim quasi atque, odio voluptas. Tenetur
                  repellendus explicabo ipsum inventore quia aut eos expedita
                  necessitatibus asperiores blanditiis! Delectus nisi laudantium
                  ipsum! Quasi blanditiis corrupti dicta maiores placeat
                  laboriosam delectus ipsum facere voluptas, magnam
                  voluptatibus, perferendis alias ullam saepe, perspiciatis
                  recusandae voluptates, dolores praesentium?
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
