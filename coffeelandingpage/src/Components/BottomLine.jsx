import React from "react";
import { motion } from "framer-motion";

const BottomLine = () => {
  return (
    <motion.div
      className="bottomline-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      <div className="btmSectionOne">
        <p>Enjoy your coffee in our comfortable place</p>
      </div>
      <hr className="hr" />
      <div className="btmSectionTwo">
        <div className="first">
          <h1>50+</h1>
          <span>Private Rooms</span>
        </div>
        <div className="second">
          <h1>25+</h1>
          <span>Event Space</span>
        </div>
        <div className="third">
          <h1>15+</h1>
          <span>Creative Studio</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BottomLine;
