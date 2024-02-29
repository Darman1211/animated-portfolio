import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {

  const [open, setOpen] = useState(false);

  const variants = {
    visible: (i) =>( {
      opacity: 1,
      x: 100,
      // transition:{type:"spring", stiffness:100, damping: 100}
      transition: { delay: i * 0.6 }
    }),
    hidden: {opacity:0},
  }

  const items = [
    "item1", "item2", "item3", "item4"
  ]

  return (
    <div className="course">
      {/* <motion.div
        className="box"
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // transition={{ duration: 2 }}
        // whileInView={{ opacity: 1, scale: 2 }}
        // drag
        variants={variants} 
        // initial="hidden"
        // animate="visible"
        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={() => setOpen(prev => !prev)}>Click</button> */}
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li variants={variants} custom={i} key={item}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
