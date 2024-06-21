import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import Typewriter from "typewriter-effect";

const testimonials = [
  {
    text: "Best chocolates ever! I absolutely love the rich flavor and smooth texture. Highly recommend to everyone!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Absolutely delicious! These chocolates are a real treat.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "I can't get enough of these chocolates. They're perfect for any occasion.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "I can't get enough of these chocolates. They're perfect for any occasion.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "I can't get enough of these chocolates. They're perfect for any occasion.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

function Testimonial() {
  return (
    <div className="testimonial-section-container">
      <div className="testimonial-section-text-container">
        <div className="testimonial-primary-subheading">Testimonial</div>
        <div className="testimonial-primary-text">
          <Typewriter
            options={{
              strings: ["What customers say about us"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="ticker-container">
          <motion.div
            className="ticker-content"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                avatar={testimonial.avatar}
                testimonial={testimonial.text}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
