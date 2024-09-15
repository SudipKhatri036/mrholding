import { easeIn, easeInOut, motion } from "framer-motion";

import "./HeroImg.css";

function HeroImg() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5, ease: easeInOut }}
      className="hero-img-wrapper"
    >
      <motion.img
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: easeIn }}
        src="./main.jpg"
        alt="Main Background"
        className="app__main-img"
      />
    </motion.div>
  );
}

export default HeroImg;
