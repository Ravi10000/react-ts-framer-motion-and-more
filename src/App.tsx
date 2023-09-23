import './App.css'
import { useState } from 'react'
import { Button } from './components/button'
import { motion } from 'framer-motion'

function App() {
  const [showTitle, setShowTitle] = useState(false)
  const containerVariants = {
    hidden: {
      x: "-100vw",
    },
    show: {
      x: 0,
      transition: {
        type: "spring",
        // stiffness: 50,
        mass: .5,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: .2
      }
    }
  }
  const imagesVariants = {
    hidden: {
      x: "-50vw",
      y: "-50vh",
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        // stiffness: 120
        mass: .75,
        damping: 10,
      }
    }
  }
  return (
    <div>
      <motion.div className='flex gap-5 flex-col w-full h-[100vh] items-center justify-center overflow-hidden max-w-[100vw]'
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div whileHover={{ scale: 1.025 }} whileTap={{
          scale: .8
        }}>
          <Button size="lg" variant="success" onClick={() => setShowTitle(prevState => !prevState)}>primary</Button>
        </motion.div>
        {showTitle && <motion.h2
          className='text-4xl w-fit absolute'
          initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: "-20vw", color: "red" }}
          transition={{
            type: "spring",
            stiffness: 120
          }}
        >
          Page Title
        </motion.h2>}
        <div className='flex items-center gap-5 w-full justify-center h-[500px] overflow-hidden'>
          <motion.img variants={imagesVariants} className='w-[200px] aspect-square rounded-md' src="https://images.unsplash.com/photo-1682685797886-79020b7462a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
          <motion.img variants={imagesVariants} className='w-[200px] aspect-square rounded-md' src="https://images.unsplash.com/photo-1682685797886-79020b7462a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
          <motion.img variants={imagesVariants} className='w-[200px] aspect-square rounded-md' src="https://images.unsplash.com/photo-1682685797886-79020b7462a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
          <motion.img variants={imagesVariants} className='w-[200px] aspect-square rounded-md' src="https://images.unsplash.com/photo-1682685797886-79020b7462a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
      </motion.div>
    </div>
  )
}

export default App
