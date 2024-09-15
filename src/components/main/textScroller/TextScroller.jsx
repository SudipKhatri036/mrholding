import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

import "./TextScroller.css";

const TextScroller = () => {
  const { scrollYProgress } = useScroll();
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    let previousScroll = 0;

    return scrollYProgress.on("change", (latest) => {
      if (latest > previousScroll) {
        setDirection("right");
      } else {
        setDirection("left");
      }
      previousScroll = latest;
    });
  }, [scrollYProgress]);

  return (
    <div className="text-scroller">
      <motion.div
        animate={{
          x: direction === "right" ? ["100%", "-100%"] : ["-100%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="text-scroller__text"
      >
        Joint Advancement Progress Adaptation Networking Alliance Innovation
      </motion.div>
    </div>
  );
};

export default TextScroller;
