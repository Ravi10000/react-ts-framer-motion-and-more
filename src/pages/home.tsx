import { motion } from "framer-motion";
import Move from "../components/move";

function HomePage() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        // dealy: 1.5,
        // duration: 0.75,
        // dealy: .4,
        type: "spring",
        mass: 0.4,
        damping: 8,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
        // duration: 1,
      },
    },
  };
  // const textVariant = {
  //   hidden: {
  //     x: "10vw",
  //   },
  //   show: {
  //     x: 0,
  //     transition: {
  //       type: "spring",
  //       mass: 0.4,
  //       damping: 8,
  //     },
  //   },
  // }
  return (
    <motion.div
      className="page bg-red-400"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Move>
        <h1 className="page-heading">HOME PAGE</h1>
      </Move>
    </motion.div>
  );
}

export default HomePage;
