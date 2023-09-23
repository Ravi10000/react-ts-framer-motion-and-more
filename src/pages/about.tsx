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
        // type: "spring",
        // mass: 0.4,
        // damping: 8,
        dealy: 1.5,
        duration: 1.5,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      className="text-green-400 flex flex-col p-10 items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1 className="text-[100px] font-bold">ABOUT PAGE</h1>
    </motion.div>
  );
}

export default AboutPage;
