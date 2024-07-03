// src/Slider.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpg";
import img5 from "./Images/img5.jpg";

const images = [img1, img2, img3, img4, img5];
const texts = [
  ["Mirrorless", "Take your vision into a picture"],
  ["Leica M6", "Capture the moment you want"],
  ["Camera", "Blur the background to focus your point"],
  ["Glowing", "Glow your future like this"],
  ["Broken", "Don't be the broken one"],
];

const Slider = () => {
  const sliderRef = useRef();
  const imagesRef = useRef([]);
  const textsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      imagesRef.current,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1, stagger: 1 }
    );

    gsap.fromTo(
      textsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 1, delay: 0.5 }
    );
  }, []);

  return (
    <div className="slider" ref={sliderRef}>
      {images.map((image, index) => (
        <div className="slide" key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            ref={(el) => (imagesRef.current[index] = el)}
          />
          <div className="text" ref={(el) => (textsRef.current[index] = el)}>
            <h1>{texts[index][0]}</h1>
            <p>{texts[index][1]}</p>
          </div>
        </div>
      ))}
      <nav>
        <a href="#" className="main-nav prev">
          Prev
        </a>
        <a href="#" className="main-nav next">
          Next
        </a>
      </nav>
    </div>
  );
};

export default Slider;
