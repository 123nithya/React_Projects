import React from "react";
import img from "../Images/img4.jpeg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const ReadMore = () => {
  return (
    <motion.div
      className="readmore-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <motion.div
        className="picSection"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img src={img} alt="" />
      </motion.div>
      <motion.div
        className="contentSection"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span>
          <Typewriter
            options={{
              strings: [
                "Coffeee...",
                "caffeine...",
                "espresso...",
                "brew...",
                "joe...",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <h1>Pick Your Favorite Coffee</h1>
        <p>
          The quality of coffee can vary greatly depending on how it is
          processed and how the coffee was grown.
          <br />
          <a href="#" className="read">
            Read More
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ReadMore;
