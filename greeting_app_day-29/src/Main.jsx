import React, { useState } from "react";

let orginalHours = new Date();
orginalHours = orginalHours.getHours();

let greeting = "";

if (orginalHours >= 1 && orginalHours < 12) {
  greeting = "Good Morning";
} else if (orginalHours >= 12 && orginalHours < 19) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Night 🌙";
}

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const Main = () => {
  return (
    <div className="container">
      <div className="greeting_text">{greeting}</div>
      <div className="wrapper">
        <div className="time_text">{currTime}</div>
        <div className="date_text">{currDate}</div>
      </div>
    </div>
  );
};

export default Main;
