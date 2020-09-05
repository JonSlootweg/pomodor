import React from "react";

import { TimerWrapper } from "./components/UI/TimerContainer";
import "./App.css";

function App() {
  return (
    <div className = {"timer-container"}>
      <TimerWrapper
        initialTime={25 * 60 * 1000}
      />
    </div>
  );
}

export default App;
