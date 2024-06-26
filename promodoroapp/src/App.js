import "./App.css";
import Timer from "./Timer";
import Settings from "./Settings";
import { useState } from "react";
import SettingContext from "./SettingContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(15);
  const [shorMinutes, setShorMinutes] = useState(5);

  return (
    <div className="App">
      <SettingContext.Provider
        value={{
          // workMinutes: workMinutes,
          workMinutes,
          shorMinutes: shorMinutes,
          breakMinutes: breakMinutes,

          setWorkMinutes,
          setBreakMinutes,
          setShorMinutes,

          showSettings,
          setShowSettings,
        }}
      >
        <main>{showSettings ? <Settings /> : <Timer />}</main>
      </SettingContext.Provider>
    </div>
  );
}

export default App;
