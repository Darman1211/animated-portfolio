import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/20071905/pexels-photo-20071905/free-photo-of-moon-cake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci sapiente sit, velit officia maxime, esse, nemo eius nobis optio vitae modi sequi aliquid rerum recusandae quos incidunt! Excepturi, provident.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci sapiente sit, velit officia maxime, esse, nemo eius nobis optio vitae modi sequi aliquid rerum recusandae quos incidunt! Excepturi, provident.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci sapiente sit, velit officia maxime, esse, nemo eius nobis optio vitae modi sequi aliquid rerum recusandae quos incidunt! Excepturi, provident.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci sapiente sit, velit officia maxime, esse, nemo eius nobis optio vitae modi sequi aliquid rerum recusandae quos incidunt! Excepturi, provident.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return <section>
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer"  ref={ref}>
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
    </div>
  </section>;
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
