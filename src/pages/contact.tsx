import { Variants, motion } from "framer-motion";
import Move from "../components/move";

function ContactPage() {
  const containerVariants: Variants = {
    hidden: {
      // x: "100vw",
      scale: 0,
      opacity: 0,
    },
    show: {
      // x: 0,
      scale: 1,
      opacity: 1,
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
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Move>
        <h1 className="page-heading">CONTACT PAGE</h1>
      </Move>
    </motion.div>
  );
}

export default ContactPage;
