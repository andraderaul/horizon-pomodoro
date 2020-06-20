import React, { useState } from "react";
import useSound from "use-sound";
import { FaPlay, FaPause, FaSyncAlt } from "react-icons/fa";

import useInterval from "./hooks/UseInterval";
import { displayTimeLeft } from "./utils/utils";
import harpa from "./audio/guitar.mp3";

import "./App.css";

/* custom components */
import Timer from "./components/Timer";
import Button from "./components/Button";
import Settings from "./components/Settings";

function App(props) {
  /* hooks */
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("Session");
  const [play, { stop }] = useSound(harpa, { volume: 0.1 });

  const countDownTimer = () => {
    if (timer === 0 && mode === "Session") {
      play();
      setMode("Break");
      setTimer(breakLength * 60 + 1);
    }

    if (timer === 0 && mode === "Break") {
      play();
      setMode("Session");
      setTimer(sessionLength * 60 + 1);
    }

    setTimer((prevTimer) => prevTimer - 1);
  };

  /* custom hook */
  useInterval(
    () => {
      countDownTimer();
    },
    isRunning ? 1000 : null
  );

  const increment = (mode) => {
    if (isRunning) return;

    if (mode === "session" && sessionLength <= 59) {
      setSessionLength((prevSession) => prevSession + 1);
      setTimer((prevTimer) => prevTimer + 60);
    } else if (mode === "break" && breakLength <= 59) {
      setBreakLength((prevBreak) => prevBreak + 1);
    }
  };

  const decrement = (mode) => {
    if (isRunning) return;

    if (mode === "session" && sessionLength >= 2) {
      setSessionLength((prevSession) => prevSession - 1);
      setTimer((prevTimer) => prevTimer - 60);
    } else if (mode === "break" && breakLength >= 2) {
      setBreakLength((prevBreak) => prevBreak - 1);
    }
  };

  const reset = () => {
    stop();

    setBreakLength(5);
    setSessionLength(25);
    setIsRunning(false);
    setTimer(1500);
    setMode("Session");
  };

  const startTimer = () => setIsRunning(true);

  const pauseTimer = () => setIsRunning(false);

  return (
    <div id="app-container">
      <header className="flex-center">
        <Timer mode={mode} timeLeft={displayTimeLeft(timer)} />
        <div className="wrapper">
          {!isRunning ? (
            <Button
              id="start_stop"
              onClick={startTimer}
              icon={<FaPlay className="fa fa-play" />}
            >
              Start
            </Button>
          ) : (
            <Button
              id="start_stop"
              onClick={pauseTimer}
              icon={<FaPause className="fa fa-pause" />}
            >
              Pause
            </Button>
          )}
          <Button
            id="reset"
            onClick={reset}
            icon={<FaSyncAlt className="fa fa-sync-alt" />}
          >
            Reset
          </Button>
        </div>
      </header>
      <footer>
        <Settings
          label="Session"
          mode="session"
          length={sessionLength}
          increment={increment}
          decrement={decrement}
        />
        <Settings
          label="Break"
          mode="break"
          length={breakLength}
          increment={increment}
          decrement={decrement}
        />
      </footer>
    </div>
  );
}

export default App;
