import { motion } from "framer-motion";
import Move from "../components/move";

function ContactPage() {
  const containerVariants = {
    hidden: {
      x: "100vw",
    },
    show: {
      x: 0,
      transition: {
        // dealy: 1.5,
        // duration: .75,
        type: "spring",
        mass: 0.4,
        damping: 10,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        ease: "easeInOut",
        // duration: 1,
      },
    },
  };
  return (
    <motion.div
      className="page bg-yellow-400"
      variants={containerVariants}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Move>
        <h1 className="page-heading">CONTACT PAGE</h1>
      </Move>
    </motion.div>
  );
}

export default ContactPage;
