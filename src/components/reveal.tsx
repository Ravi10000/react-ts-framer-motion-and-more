import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';
type revealProps = {
    children: JSX.Element
}

function Reveal({ children }: revealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    const barControls = useAnimation();
    const revealVariants = {
        initial: {
            opacity: 0,
            y: 75,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: .15,
            }
        }
    }
    const barVariants = {
        initial: {
            left: 0,
        },
        animate: {
            left: "100%",
            transition: {
                duration: .35,
                ease: "easeInOut"
            }
        }
    }
    useEffect(() => {
        if (isInView) {
            barControls.start("animate");
            mainControls.start("animate");
        }
        // this works for {once: false} which is default
        else {
            barControls.start("initial");
            mainControls.start("initial");
        }
    }, [isInView])
    // const colors = ["bg-blue-400", "bg-red-400", "bg-green-400", "bg-yellow-400"];
    // function randomInteger(min = 0, max = 3) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    // ${colors[randomInteger()]}
    return <motion.div className='relative overflow-hidden'>
        <motion.div variants={revealVariants} initial="initial" animate={mainControls} ref={ref}>
            {children}
        </motion.div>

        <motion.div className={`absolute h-full w-full top-0 left-0 z-10 bg-[#abc4ff]`}
            variants={barVariants}
            initial="initial"
            animate={barControls}
        >
        </motion.div>
    </motion.div>
}

export default Reveal;