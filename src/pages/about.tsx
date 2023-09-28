import { Variants, motion } from "framer-motion";
import Move from "../components/move";
import { useCounter } from "../store/use-counter";

function AboutPage() {
  const count = useCounter(state => state.count)
  const increment = useCounter(state => state.increment)
  const decrement = useCounter(state => state.decrement)
  const containerVariants: Variants = {
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
      <div className="flex flex-col gap-10 items-center">
        <p>{count}</p>
        <motion.button className="px-5 py-2 bg-green-400" onClick={increment} whileTap={{ scale: .8 }}>👆</motion.button>
        <motion.button className="px-5 py-2 bg-orange-400" onClick={decrement} whileTap={{ scale: .8 }}>👇</motion.button>
      </div>
      <Move>
        <h1 className="page-heading">ABOUT PAGE</h1>
      </Move>
    </motion.div>
  );
}

export default AboutPage;
