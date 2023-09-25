import { motion } from "framer-motion";
import Move from "../components/move";
import Reveal from "../components/reveal";

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
      exit="hidden"
    >
      <div className="w-full grow flex flex-col h-[70vh] max-h-[800px]"><Move>
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
          <h1 className="text-lg font-bold max-w-[800px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, iusto exercitationem dolorem sequi natus, blanditiis quaerat omnis enim asperiores eaque nulla nemo dicta veritatis culpa. Ipsum voluptate corrupti accusamus et.</h1>
        </Reveal>
        <Reveal>
          <h1 className="text-lg font-bold max-w-[800px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, iusto exercitationem dolorem sequi natus, blanditiis quaerat omnis enim asperiores eaque nulla nemo dicta veritatis culpa. Ipsum voluptate corrupti accusamus et.</h1>
        </Reveal>
      </div>
    </motion.div>
  );
}

export default HomePage;
