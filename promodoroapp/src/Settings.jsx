import React, { useContext, useState } from "react";
import ReactSlider from "react-slider";
import SettingContext from "./SettingContext";
import BackButton from "./BackButton";

const Settings = () => {
  const settingsInfo = useContext(SettingContext);

  return (
    <div style={{ textAlign: "left" }} className="mainDiv settings">
      <label htmlFor="">Work Minutes : {settingsInfo.workMinutes} mins</label>
      <ReactSlider
        className="slider"
        thumbActiveClassName="thumb"
        trackClassName="track"
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label htmlFor="">Break Minutes : {settingsInfo.breakMinutes} mins</label>
      <ReactSlider
        className="slider green"
        thumbActiveClassName="thumb"
        trackClassName="track"
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
};

export default Settings;
