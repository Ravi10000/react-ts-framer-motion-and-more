import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useState } from "react";
// import { Button } from './components/button'
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import { Fragment } from "react";
import Modal from "./components/modal";

const links = [
  {
    name: "Home",
    path: "/",
    color: "red-400",
  },
  {
    name: "About",
    path: "/about",
    color: "green-400",
  },
  {
    name: "Contact",
    path: "/contact",
    color: "yellow-400",
  },
] as const;

function App() {
  // const containerVariants = {
  //   hidden: {
  //     x: "-100vw",
  //   },
  //   show: {
  //     x: 0,
  //     transition: {
  //       type: "spring",
  //       // stiffness: 50,
  //       mass: .5,
  //       damping: 8,
  //       when: "beforeChildren",
  //       staggerChildren: .2
  //     }
  //   }
  // }
  // const imagesVariants = {
  //   hidden: {
  //     x: "-100vw",
  //     y: "-50vh",
  //   },
  //   show: {
  //     x: 0,
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       // stiffness: 120
  //       mass: .75,
  //       damping: 10,
  //     }
  //   }
  // }

  // const buttonVariants = {
  //   onHover: {
  //     // scale: [1, 1.1, 1],
  //     scale: 1.1,
  //     transition: {
  //       type: "tween",
  //       duration: .5,
  //       repeat: 10,
  //       // repeatDelay: .5,
  //       // yoyo: 10
  //     }
  //   },
  //   onClick: {
  //     scale: .8
  //   }
  // }
  // const [showTitle, setShowTitle] = useState(true)
  const location = useLocation();
  console.log({ location });
  const [showModal, setShowModal] = useState(false);
  const svgVarients = {
    initial: {
      // opacity: 0,
      // rotate: "360deg",
    },
    animate: {
      // opacity: 1,
      // rotate: 0,
      transition: {
        // duration: 0.5,
        staggerChildren: 2,
      },
    },
  };
  const pathVarients = {
    initial: {
      pathLength: 0,
      // strokeWidth: 10,
    },
    animate: {
      pathLength: 1,
      // strokeWidth: 10,
      transition: {
        repeat: Infinity,
        duration: 2,
        // repeat: Infinity,
      },
    },
  };
  return (
    // <div>
    //   <motion.div className='flex gap-5 flex-col w-full h-[100vh] items-center justify-center overflow-hidden max-w-[100vw]'
    //     variants={containerVariants}
    //     initial="hidden"
    //     animate="show"
    //   >
    //     {/* <AnimatePresence>
    //       {showTitle && <motion.h2
    //         className='text-4xl w-fit'
    //         initial={{ opacity: 0, x: "-100vw" }}
    //         animate={{ opacity: 1, x: "-20vw", color: "red" }}
    //         transition={{
    //           type: "spring",
    //           stiffness: 120
    //         }}
    //         exit={{ x: "-100vw" }}
    //       >
    //         Page Title
    //       </motion.h2>}
    //     </AnimatePresence> */}
    //     <motion.div variants={buttonVariants} whileHover="onHover" whileTap="onClick">
    //       <Button size="lg" variant="success">primary</Button>
    //       {/* <Button size="lg" variant="success" onClick={() => setShowTitle(prevState => !prevState)}>primary</Button> */}
    //     </motion.div>
    //     <div className='flex items-center gap-5 w-full justify-center h-[500px] overflow-hidden'>
    //       <motion.img variants={imagesVariants} className='w-[200px] aspect-square rounded-md' src="https://images.unsplash.com/photo-1682685797886-79020b7462a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
    //       <motion.img variants={imagesVariants} className='w-[200px] aspect-square rounded-md' src="https://images.unsplash.com/photo-1682685797886-79020b7462a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
    //       <motion.img variants={imagesVariants} className='w-[200px] aspect-square rounded-md' src="https://images.unsplash.com/photo-1682685797886-79020b7462a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
    //       <motion.img variants={imagesVariants} className='w-[200px] aspect-square rounded-md' src="https://images.unsplash.com/photo-1682685797886-79020b7462a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
    //     </div>
    //   </motion.div>
    // </div >

    <div className="flex flex-col overflow-hidden min-h-[100vh]">
      <motion.svg
        width="105"
        height="286"
        viewBox="0 0 105 286"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVarients}
        initial="initial"
        animate="animate"
        className="h-fit self-center m-2 rotate-90"
      >
        <motion.path
          d="M16.0289 72.5L55 5L93.9711 72.5H16.0289Z"
          stroke="#3C8DA5"
          // strokeWidth="10"
          variants={pathVarients}
        />
        <motion.circle
          cx="55"
          cy="136"
          r="37.5"
          stroke="#FC6541"
          // strokeWidth="10"
          variants={pathVarients}
        />
        <motion.rect
          x="17.5"
          y="196.5"
          width="75"
          height="75"
          stroke="#8BCF69"
          // strokeWidth="10"
          variants={pathVarients}
        />
      </motion.svg>

      <motion.button
        className="fixed right-2 bottom-2 bg-white text-gray px-5 py-3 rounded-md font-medium uppercase text-sm z-10"
        onClick={() => setShowModal(true)}
        whileTap={{ scale: 0.9 }}
      >
        Toggle Modal
      </motion.button>
      <Modal setShowModal={setShowModal} showModal={showModal} />
      <ul className="flex justify-center gap-5 font-bold p-5 ">
        {links?.map((link, index) => {
          return (
            <Fragment key={link?.name}>
              <motion.p
                whileHover={{
                  y: -5,
                }}
                whileTap={{
                  scale: 0.75,
                }}
              >
                <Link
                  to={link?.path}
                  className={`hover:text-blue-300 px-3 py-1 text-center ${
                    link.path === location.pathname ? "text-blue-600" : ""
                  }`}
                >
                  {link?.name}
                </Link>
              </motion.p>
              {index < links?.length - 1 && "|"}
            </Fragment>
          );
        })}
      </ul>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setShowModal(false)} // as route changes the modal will get closed
      >
        <Routes location={location} key={location.key}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
