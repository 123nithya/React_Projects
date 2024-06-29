import React from "react";
import img from "../Images/img4.jpeg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const ReadMore = () => {
  return (
    <div className="readmore-container">
      <motion.div
        className="picSection"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <img src={img} alt="Coffee" />
      </motion.div>
      <motion.div
        className="contentSection"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <span>
          <Typewriter
            options={{
              strings: [
                "Coffee...",
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
    </div>
  );
};

export default ReadMore;
