import { motion } from "framer-motion";
import React from "react";

type moveProps = {
  children: React.ReactNode;
};

function Move({ children }: moveProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    const { height, width, top, left } =
      ref?.current?.getBoundingClientRect() || {};
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };
  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      className="w-full h-full grow flex items-center justify-center"
      animate={{
        x,
        y,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: .75,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Move;
