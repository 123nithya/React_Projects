import React from "react";
import { motion } from "framer-motion";
import img1 from "../Images/img7.jpeg";
import img2 from "../Images/img8.jpeg";
import img3 from "../Images/img6.png";

const Coffee = () => {
  return (
    <div className="coffee-container">
      <motion.div
        className="title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1>Coffee Menu</h1>
      </motion.div>
      <div className="menucontent">
        <motion.div
          className="coffee1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src={img1} alt="Irish Mocha Latte" />
          <h1>Irish Mocha Latte</h1>
        </motion.div>
        <motion.div
          className="coffee2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img src={img2} alt="Cappuccino" />
          <h1>cappuccino</h1>
        </motion.div>
        <motion.div
          className="coffee3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={img3} alt="Cold Java" />
          <h1>Cold Java</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Coffee;
