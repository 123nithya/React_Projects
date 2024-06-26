// import React from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import PlayButton from "./PlayButton";
// import PauseButton from "./PauseButton";
// import Cog from "./Cog";
// import RestartButton from "./RestartButton";
// import { useContext, useState, useEffect, useRef } from "react";
// import SettingContext from "./SettingContext";

// const red = "#f54e4e";
// const green = "#4aec8c";

// function Timer() {
//   const settingsInfo = useContext(SettingContext);

//   const [isPaused, setIsPaused] = useState(true);
//   const [mode, setMode] = useState("work"); // work/break/null
//   const [secondsLeft, setSecondsLeft] = useState(0);

//   const secondsLeftRef = useRef(secondsLeft);
//   const isPausedRef = useRef(isPaused);
//   const modeRef = useRef(mode);

//   function tick() {
//     secondsLeftRef.current--;
//     setSecondsLeft(secondsLeftRef.current);
//   }

//   useEffect(() => {
//     function switchMode() {
//       const nextMode = modeRef.current === "work" ? "break" : "work";
//       const nextSeconds =
//         (nextMode === "work"
//           ? settingsInfo.workMinutes
//           : settingsInfo.breakMinutes) * 60;

//       setMode(nextMode);
//       modeRef.current = nextMode;

//       setSecondsLeft(nextSeconds);
//       secondsLeftRef.current = nextSeconds;
//     }

//     secondsLeftRef.current = settingsInfo.workMinutes * 60;
//     setSecondsLeft(secondsLeftRef.current);

//     const interval = setInterval(() => {
//       if (isPausedRef.current) {
//         return;
//       }
//       if (secondsLeftRef.current === 0) {
//         return switchMode();
//       }

//       tick();
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [settingsInfo]);

//   const totalSeconds =
//     mode === "work"
//       ? settingsInfo.workMinutes * 60
//       : settingsInfo.breakMinutes * 60;
//   const percentage = Math.round((secondsLeft / totalSeconds) * 100);

//   const minutes = Math.floor(secondsLeft / 60);
//   let seconds = secondsLeft % 60;
//   if (seconds < 10) seconds = "0" + seconds;

//   return (
//     <div className="mainDiv">
//       <CircularProgressbar
//         value={percentage}
//         text={minutes + ":" + seconds}
//         styles={buildStyles({
//           textColor: "#fff",
//           pathColor: mode === "work" ? red : green,
//           tailColor: "rgba(255,255,255,.2)",
//         })}
//       />
//       <div style={{ marginTop: "20px",display:'flex',alignItems:'center',justifyContent:'center' }}>
//         {isPaused ? (
//           <PlayButton
//             onClick={() => {
//               setIsPaused(false);
//               isPausedRef.current = false;
//             }}
//           />
//         ) : (
//           <PauseButton
//             onClick={() => {
//               setIsPaused(true);
//               isPausedRef.current = true;
//             }}
//           />
//         )}
//         <RestartButton />
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <Cog onClick={() => settingsInfo.setShowSettings(true)} />
//       </div>
//     </div>
//   );
// }

// export default Timer;




import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import Cog from "./Cog";
import RestartButton from "./RestartButton";
import { useContext, useState, useEffect, useRef } from "react";
import SettingContext from "./SettingContext";

const red = "#f54e4e";
const green = "#4aec8c";

function Timer() {
  const settingsInfo = useContext(SettingContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  function resetTimer() {
    const initialSeconds = settingsInfo.workMinutes * 60;
    setSecondsLeft(initialSeconds);
    secondsLeftRef.current = initialSeconds;
    setIsPaused(true);
    isPausedRef.current = true;
    setMode("work");
    modeRef.current = "work";
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work"
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 10);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div className="mainDiv">
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: mode === "work" ? red : green,
          tailColor: "rgba(255,255,255,.2)",
        })}
      />
      <div style={{ marginTop: "20px",display:'flex',alignItems:'center',justifyContent:'center' }}>
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
        <RestartButton onClick={resetTimer} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Cog onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
