import React from 'react'
import heroimage from "../Images/i10.png";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-banner-container'>
        <div className="home-text-section">
          <div className='primary-heading'>
            <Typewriter
              options={{
              strings: ['Delighted in Every Bite...', 'Savor the Delight...','Indulgence in Every Piece...','Happiness in Every Square...','Sweet Satisfaction in Every Bite...','Euphoria in Every Nibble...','Decadence in Every Mouthful...'],
              autoStart: true,
              loop: true,
              }}
            />
          </div>
          <p className="primary-text">
            Indulge in the exquisite taste of our delicious chocolates, crafted with the finest ingredients to deliver a rich and satisfying experience. We provide you the worlds best branded chocolates and also home made chocolates.Each piece melts in your mouth, offering a perfect balance of sweetness and flavor that will leave you craving more.
          </p>
          <motion.button 
            className="secondary-button"
            animate={{x: -10}}
            initial={{x: -250}}
            transition={{type:'spring',stiffness:'120',delay:0.2}}
          >
            Taste Now!
          </motion.button>
        </div>
        <div className="home-image-container">
          <div className='round1'></div>
          <div className='round2'></div>
          <img src={heroimage} alt="hero-section-img" />
        </div>
      </div>
    </div>
  )
}

export default Home;
