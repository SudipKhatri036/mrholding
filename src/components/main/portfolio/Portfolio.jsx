import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  easeInOut,
  useSpring,
} from "framer-motion";

import "./Portfolio.css";

function Portfolio() {
  const scrollRef = useRef(null);
  const scrollRefTwo = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0.1 end", "1.3 end"],
  });

  const { scrollYProgress: scrollYProgressTwo } = useScroll({
    target: scrollRefTwo,
    offset: ["0.1 end", "1.3 end"],
  });

  const translateYAnimOne = useTransform(
    scrollYProgress,
    [0, 10],
    [200, -4000]
  );
  const smoothTranslate = useSpring(translateYAnimOne, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const translateYAnimTwo = useTransform(
    scrollYProgressTwo,
    [0, 10],
    [200, -4000]
  );
  const smoothTranslateTwo = useSpring(translateYAnimTwo, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="portfolio">
      <div className="portfolio__img-cont">
        <div className="large-img-cont">
          <img
            src="./01hero.jpg"
            alt="Girl image"
            className="large-img"
            ref={scrollRef}
          />
        </div>
        <motion.div
          style={{ translateY: smoothTranslate }}
          transition={{ ease: easeInOut }}
          className="small-img-cont"
        >
          <img src="./02hero.jpg" alt="three girl" className="small-img" />
        </motion.div>
      </div>
      <div className="portfolio__img-cont portfolio__img-cont--rowrev">
        <div className="large-img-cont">
          <img
            src="./04hero.jpg"
            alt="Girl image"
            className="large-img"
            ref={scrollRefTwo}
          />
        </div>
        <motion.div
          style={{ translateY: smoothTranslateTwo }}
          transition={{ ease: easeInOut }}
          className="small-img-cont"
        >
          <img src="./03hero.jpg" alt="three girl" className="small-img" />
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
