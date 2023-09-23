import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
// import { useState } from 'react'
// import { Button } from './components/button'
import {
  // motion
  // ,
  AnimatePresence
} from 'framer-motion'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'

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
    <div className='flex flex-col gap-10 w-full overflow-hidden min-h-[100vh]'>
      <ul className='flex gap-5 font-bold p-2'>
        <Link to="/" className='hover:text-blue-500'>Home Page</Link>
        |
        <Link to="/about" className='hover:text-blue-500'>About Page</Link>
        |
        <Link to="/contact" className='hover:text-blue-500'>Contact Page</Link>
      </ul>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
