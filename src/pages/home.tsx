import { motion } from "framer-motion";
import Move from "../components/move";
import Reveal from "../components/reveal";
import { useCounter } from "../store/use-counter";

function HomePage() {
  const count = useCounter(state => state.count)
  const increment = useCounter(state => state.increment)
  const decrement = useCounter(state => state.decrement)
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
      exit="hidden"
    >
      <div className="w-full grow flex flex-col h-[70vh] max-h-[800px]">
        <div className="flex flex-col gap-10 items-center">
          <p>{count}</p>
          <motion.button className="px-5 py-2 bg-green-400" onClick={increment} whileTap={{ scale: .8 }}>👆</motion.button>
          <motion.button className="px-5 py-2 bg-orange-400" onClick={decrement} whileTap={{ scale: .8 }}>👇</motion.button>
        </div>
        <Move>
          <h1 className="page-heading">HOME PAGE</h1>
        </Move></div>
      <div className="bg-black text-white h-[100vh] w-full flex flex-col items-center gap-20 justify-center mb-[200px] p-10">
        <Reveal>
          <h1 className="text-lg font-bold max-w-[800px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, iusto exercitationem dolorem sequi natus, blanditiis quaerat omnis enim asperiores eaque nulla nemo dicta veritatis culpa. Ipsum voluptate corrupti accusamus et.</h1>
        </Reveal>
        <Reveal>
          <h1 className="text-lg font-bold max-w-[800px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, iusto exercitationem dolorem sequi natus, blanditiis quaerat omnis enim asperiores eaque nulla nemo dicta veritatis culpa. Ipsum voluptate corrupti accusamus et.</h1>
        </Reveal>
        <Reveal>
          <h1 className="text-lg font-bold max-w-[800px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, iusto exercitationem dolorem sequi natus,
            blanditiis quaerat omnis enim asperiores eaque nulla nemo dicta veritatis culpa. Ipsum voluptate corrupti accusamus et.</h1>
        </Reveal>
        <Reveal>
          <h1 className="text-lg font-bold"><div className="h-[80px] flex items-center"><p>Lorem ipsum dolor</p></div></h1>
        </Reveal>
        <Reveal>
          <h1 className="text-lg font-bold max-w-[800px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, iusto exercitationem dolorem sequi natus, blanditiis quaerat omnis enim asperiores eaque nulla nemo dicta veritatis culpa. Ipsum voluptate corrupti accusamus et.</h1>
        </Reveal>
      </div>
    </motion.div>
  );
}

export default HomePage;
