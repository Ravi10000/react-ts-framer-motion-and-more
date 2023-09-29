import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react';
import { Link } from 'react-router-dom';

type link = {
    path: string;
    name: string;
}

type customLinkProps = {
    link: link;
    length: number;
    index: number;
}
const linkVariants = {
    initial: { y: 0 },
    animate: {
        y: -5
    }
}

function CustomLink({ link, length, index }: customLinkProps) {
    const [hovered, setHovered] = useState<boolean>(false);
    // const controls = useAnimation();
    console.log({ hovered });

    return <motion.div whileTap={{
        scale: 0.75,
    }}>
        <Link to={link?.path} key={link?.name} className="flex gap-5 pt-5 cursor-pointer " onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <motion.p
                variants={linkVariants}
                animate={hovered ? "animate" : "initial"}

            >
                <p
                    className={`hover:text-blue-300 px-3 text-center ${link.path === location.pathname ? "text-blue-600" : ""
                        }`}
                >
                    {link?.name}
                </p>
            </motion.p>
            {index < length - 1 && "|"}
        </Link></motion.div>
}

export default CustomLink;