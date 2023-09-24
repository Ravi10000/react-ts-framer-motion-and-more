import { motion } from "framer-motion";

function AboutPage() {
  const containerVariants = {
    hidden: {
      x: "100vw",
    },
    show: {
      x: 0,
      transition: {
        // dealy: .4,
        type: "spring",
        mass: 0.4,
        damping: 8,
        // dealy: 1.5,
        // duration: .75,
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
  return (
    <motion.div
      className="page bg-green-400"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1 className="page-heading">ABOUT PAGE</h1>
    </motion.div>
  );
}

export default AboutPage;
