import React from "react";
import img from "../Images/img9.png";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const DidYouKnow = () => {
  return (
    <motion.div
      className="did-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="did-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <h1>Did you know?</h1>
        <div className="typeEffect">
          <Typewriter
            options={{
              strings: [
                "After crude oil, coffee is the second most traded commodity in the world!",
                "The coffee bean is actually a seed inside a bright red or yellow fruit called a cherry!",
                " The word coffee comes from the Arabic word qahwa, which originally referred to wine!",
                "Brazil is the largest producer of coffee in the world, accounting for about one-third of global production!",
                "Decaf coffee is not completely caffeine-free. An average 8-ounce cup of decaf contains about 2-5 milligrams of caffeine!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </motion.div>
      <motion.div
        className="image"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <img src={img} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default DidYouKnow;
