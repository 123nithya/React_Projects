import React from 'react'
import Typewriter from 'typewriter-effect';
import aboutImg from "../Images/i13d.png";
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className='about-section-container'>
      <motion.div 
        className="about-image-container"
        animate={{x: 0}}
        initial={{x: -590}}
        transition={{type:'spring',stiffness:'120',delay:2.5,duration:4}}
      >
        <img src={aboutImg} alt="" />
      </motion.div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <div className='about-primary-heading'>
            <Typewriter
              options={{
              strings: ['Dive into the decadence of chocolate...', 'Pure Joy in Each Morsel...','Discover the magic of chocolate delight...','Your perfect companion for any moment...','A little chocolate makes everything better...',' The ultimate mood booster...','Savor the sweetness of lifes finest treat...'],
              autoStart: true,
              loop: true,
              }}
            />
          </div>
        <p className="about-primary-text">
            Welcome to Delight, where every bite is a celebration of pure joy! At Delight, we believe chocolate is more than just a treat—it's an experience. Our master chocolatiers combine the finest ingredients with unparalleled craftsmanship to create delectable chocolates that enchant your senses. 
        </p>
        <p className="about-primary-text">
            From silky-smooth truffles to rich, creamy bars, each piece is a testament to our passion for perfection. Indulge in our wide variety of flavors, each designed to deliver a moment of bliss. Join us in savoring the art of chocolate and discover why Delight is the ultimate destination for chocolate lovers. Experience happiness, one bite at a time.
        </p>
        <div className="about-buttons-container">
          <button className="about-secondary-button">Know More</button>
        </div>
      </div>
    </div>
  )
}

export default About
