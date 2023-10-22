import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        Ashna Srivastava
      </motion.h1>
      <motion.div className="mountains" />
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${"/planets.png"})`,
        }}
      />
      <motion.div
        className="astronaut"
        style={{
          y: yBg,
          backgroundImage: `url(${"/astronaut-star.png"})`,
        }}
        animate={{
          y: [0, 10, 0], // Y-axis animation values
          transition: {
            y: {
              duration: 3, // Duration of the animation (in seconds)
              repeat: Infinity, // Repeat the animation indefinitely
              repeatType: 'reverse', // Reverse animation direction when repeating
              ease: 'easeInOut', // Easing function
            },
          },
        }}
      />
      <motion.div style={{ x: yBg }} className="stars" />
    </div>
  );
};

export default Parallax;
