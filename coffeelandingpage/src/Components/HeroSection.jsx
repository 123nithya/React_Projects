import React from "react";
import Typewriter from "typewriter-effect";
import image from "../Images/img3.jpeg";
import {
  FaSquareInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="herosection-container">
      <div className="firstSection">
        <h1>Elevate Your Coffee Experience</h1>
        <div className="typeeffect">
          <p>With</p>
          <Typewriter
            options={{
              strings: [
                "Experience the Magic of Freshly Roasted Beans...",
                "Sip. Savor. Smile...",
                "Pouring Happiness One Cup at a Time...",
                "Indulge in the Art of Coffee...",
                "Brewing Joy, One Cup at a Time...",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="content">
          <p>
            Welcome to First Love Coffee, where every cup tells a story.
            Discover the rich, bold flavors of our freshly roasted beans,
            sourced from the finest growers around the world. Whether you're
            craving a morning boost or a leisurely afternoon sip, we craft each
            brew with passion and precision. Join us for an unparalleled coffee
            experience!
          </p>
        </div>
        <div className="btn">
          <button className="two">Coffee Shop!</button>
        </div>
        <div className="icons">
          <FaSquareInstagram className="icon" />
          <FaFacebook className="icon" />
          <FaYoutube className="icon" />
          <FaTwitter className="icon" />
        </div>
      </div>
      <div className="secondSection">
        <div className="image">
          <div className="vapor"></div>
          <div className="vapor"></div>
          <img src={image} alt="Coffee" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
