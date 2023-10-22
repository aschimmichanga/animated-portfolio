import React from "react";
import { motion } from "framer-motion";

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "220%",
        transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
        },
    },
};


const About = (
    <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
    >
        resilient • pixel oriented • curious • dynamic • evolving •
    </motion.div>
)

export default About
