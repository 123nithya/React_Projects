import React from 'react';

const TestimonialCard = ({ avatar, testimonial }) => {
  return (
    <div className="testimonial-card">
      <img src={avatar} alt="Avatar" className="avatar" />
      <p className="testimonial-text">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
