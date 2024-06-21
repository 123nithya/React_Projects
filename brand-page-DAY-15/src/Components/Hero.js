import React from 'react'
import shoe from "../Image/hero-image.png";
import amazon from "../Image/amazon.png";
import flipkart from "../Image/flipkart.png";
import {motion} from "framer-motion";
import Typewriter from 'typewriter-effect/dist/core';

export const Hero = () => {
  return (
    <main className="hero container">
        <div className='hero-content'>
            <h1 className='text'>YOUR FEET DESERVE THE BEST</h1>
            <motion.p
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.5,duration:3}}
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum earum sunt vero laboriosam qui accusantium ipsa, facere nemo ducimus, aut.</motion.p>
            <div className="hero-btn">
                <motion.button
                    whileHover={{
                        boxShadow:'0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
                    }}
                >Shop Now</motion.button>
                <button className='secondary-btn'>Category</button>
            </div>

            <div className="shopping">
                <p>Also Available on</p>
            </div>

            <div className="brand-icons">
                <img src={amazon} alt="amazon" />
                <img src={flipkart} alt="flipkart" />
            </div>
        </div>
        <motion.div className='hero-image'
            initial={{y:'-20vw'}}
            animate={{y: '0'}}
            transition={{type:'spring',stiffness:100}}
        >
            <img src={shoe} alt="shoe" />
        </motion.div>
    </main>
  )
}
