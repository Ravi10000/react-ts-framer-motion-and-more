import { motion, AnimatePresence } from "framer-motion";

interface modalProps {
  // extends React.FC
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function Modal({ showModal, setShowModal }: modalProps) {
  const containerVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const modalVarients = {
    initial: {
      y: "-100vh",
    },
    animate: {
      y: 0,
      transition: {
        delay: 0.35,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {showModal && ( // this should be here to trigger exit animation
        <motion.div
          className="fixed h-full w-full z-10 bg-[#00000065] flex items-center justify-center p-5"
          variants={containerVariant}
          initial="initial"
          animate="animate"
          exit="initial"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="p-5 bg-white rounded-md max-w-md inset-auto flex flex-col gap-5 text-center"
            variants={modalVarients}
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="font-bold text-lg text-red-400">QUOTE OF THE DAY</h1>
            <p className="text-lg">
              Life imposes things on you that you can't control, but you still
              have the choice of how you're going to live through this."
              <br />
              <i>- Celine Dion</i>
            </p>
            <motion.button
              onClick={() => setShowModal(false)}
              className="bg-red-500 p-3 rounded-md font-bold text-white"
              whileTap={{ scale: 0.9 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
