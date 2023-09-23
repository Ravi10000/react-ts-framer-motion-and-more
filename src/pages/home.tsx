import { motion } from "framer-motion";

function HomePage() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        dealy: 1.5,
        duration: 1.5,
        // dealy: .4,
        // type: "spring",
        // mass: 0.4,
        // damping: 8,
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
      className="text-red-400 flex flex-col p-10 items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1 className="text-[100px] font-bold">HOME PAGE</h1>
    </motion.div>
  );
}

export default HomePage;
