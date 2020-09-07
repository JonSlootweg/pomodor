import React, { FunctionComponent } from "react";
import Timer from "react-compound-timer";
import { TimerControls } from "react-compound-timer";
import Play from "../../images/play-circle.svg";
import Pause from "../../images/pause-circle.svg";
import Reset from "../../images/refresh-cw.svg";

type TimerWrapperProps = {
  initialTime: number;
};

export const TimerWrapper: FunctionComponent<TimerWrapperProps> = ({
  initialTime,
  children,
}) => {

  const resetTimer = (reset: Function, pause: Function) => {
    pause();
    reset();
  }

  return (
    <div className="timer">
      <Timer
        initialTime={initialTime}
        direction="backward"
        startImmediately={false}
        timeToUpdate={100}
        onReset = {() => {console.log("reset")}}
      >
        {({ start, pause, reset }: TimerControls) => (
          <React.Fragment>
              <Timer.Minutes />:
              <Timer.Seconds
                formatValue={(value: number) => {
                  if (value > 10) {
                    return value.toString();
                  } else {
                    return `0${value}`;
                  }
                }}
              />

            <div className="button-container">
              <button className = "icon-button" onClick={start}>
                <img src={Play} alt="Start"></img>
              </button>
              <button className = "icon-button" onClick={pause}>
                <img src={Pause} alt="Pause"></img>
              </button>
              <button className = "icon-button" onClick={() => resetTimer(reset, pause)}>
                <img src={Reset} alt="Reset"></img>
              </button>
            </div>
          </React.Fragment>
        )}
      </Timer>
    </div>
  );
};
