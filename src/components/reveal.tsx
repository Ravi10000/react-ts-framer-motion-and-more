import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';
type revealProps = {
    children: JSX.Element
}

function Reveal({ children }: revealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
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
                delay: .5,
                // duration: 1,
            }
        }
    }
    const barVariants = {
        initial: {
            left: "-100%",
        },
        animate: {
            left: 0,
            transition: {
                duration: .5,
                // delay: .25,
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
        //  else {
        //     mainControls.start("initial");
        // }
    }, [isInView])
    return <motion.div className='relative outline overflow-hidden'>
        <motion.div variants={revealVariants} initial="initial" animate={mainControls} ref={ref}>
            {children}
        </motion.div>

        <motion.div className='absolute h-full w-full top-0 left-0 bg-green-400 z-10' variants={barVariants} animate={barControls}></motion.div>
    </motion.div>
}

export default Reveal;