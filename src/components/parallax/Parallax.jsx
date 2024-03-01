import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const background =
    type === "services"
      ? "linear-gradient(180deg, #111132, #0c0c1d)"
      : "linear-gradient(180deg, #111132, #505064)";

  const bgStarsImg = `url(${type === "services" ? "/planets.png" : "/sun.png"})`;
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // "start start" => animation starts when the top of the target element reaches the top of the viewport
    // "end start" => animation is going to end and the top of of the target element reaches the bottom of the viewport
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="parallax" style={{ background: background }}>
      <motion.h1 style={{ y: yText }}>{type === "services" ? "What We Do?" : "What We Did?"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ y: yBg, backgroundImage: bgStarsImg }}></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
};

export default Parallax;
