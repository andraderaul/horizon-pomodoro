import React from "react";

type TimerProps = {
  mode: string;
  timeLeft: string;
};

function Timer({ mode, timeLeft }: TimerProps) {
  return (
    <>
      <h2 id="timer-label">{mode}</h2>
      <div id="time-left">{timeLeft}</div>
    </>
  );
}

export default Timer;
