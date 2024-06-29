import React from "react";
import { motion } from "framer-motion";

const Order = () => {
  return (
    <motion.div
      className="order-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="orderContent"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <h1>Take your coffee now</h1>
        <p>
          Don't let your coffee cold. Let's go to coffee and get your coffee and
          boost your day now.
        </p>
      </motion.div>
      <motion.div
        className="orderBtn"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <button>Coffee Order</button>
      </motion.div>
    </motion.div>
  );
};

export default Order;
