import React from "react";
import PropTypes from "prop-types";

function Timer({ mode, timeLeft }) {
  return (
    <>
      <h2 id="timer-label">{mode}</h2>
      <div id="time-left">{timeLeft}</div>
    </>
  );
}

Timer.propTypes = {
  mode: PropTypes.string.isRequired,
  timeLeft: PropTypes.string.isRequired,
};

export default Timer;
