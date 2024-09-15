import { useRef } from "react";
import { easeIn, motion, useScroll, useTransform } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

import "./Hero.css";

const heroTextVar = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animation: {
    opacity: 1,
    y: 0,
  },
};

function Hero({ onGoToOverview }) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,

    offset: ["0.8 0.9", "0.00 0.3"],
  });

  const TranslateTo = useTransform(scrollYProgress, [0, 1], ["25px", "-50px"]);

  return (
    <div className="hero">
      <motion.h2
        variants={heroTextVar}
        initial="initial"
        animate="animation"
        transition={{ duration: 0.5, delay: 1, ease: easeIn }}
        className="hero__subtitle"
      >
        Generative AI deployment company
      </motion.h2>
      <motion.h1
        variants={heroTextVar}
        initial="initial"
        animate="animation"
        transition={{ duration: 0.5, delay: 1.2, ease: easeIn }}
        className="hero__title"
      >
        Creating a sustainable future society with AI
      </motion.h1>
      <div className="hero__btn-cont">
        <button className="btn btn--scroll" onClick={onGoToOverview}>
          Scroll Down <FaChevronDown />
        </button>
      </div>

      <motion.div
        style={{ translateY: TranslateTo, opacity: scrollYProgress }}
        className="hero__description"
        ref={targetRef}
      >
        <p>
          JAPAN AI combines the wisdom and experience of our predecessors with
          modern innovation
        </p>

        <p>
          to create a vairety of new value to improve the productivity of
          Japanese companies and revitalize industry.
        </p>
      </motion.div>
    </div>
  );
}

export default Hero;
