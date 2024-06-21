import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
