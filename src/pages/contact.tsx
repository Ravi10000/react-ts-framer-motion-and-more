import { motion } from "framer-motion";

function ContactPage() {
  const containerVariants = {
    hidden: {
      x: "100vw",
    },
    show: {
      x: 0,
      transition: {
        dealy: 1.5,
        duration: 1.5,
        // type: "spring",
        // mass: 0.4,
        // damping: 8,
      },
    },
    exit: {
      x: "-70vw",
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      className="text-yellow-400 flex flex-col p-10 items-center justify-center"
      variants={containerVariants}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <h1 className="text-[100px] font-bold" >CONTACT PAGE</h1>
    </motion.div>
  );
}

export default ContactPage;
