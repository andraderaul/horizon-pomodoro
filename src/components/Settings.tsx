import React from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

type SettingsProps = {
  label: string;
  mode: string;
  length: number;
  increment: (mode: string) => void;
  decrement: (mode: string) => void;
};

function Settings({
  label,
  mode,
  length,
  increment,
  decrement,
}: SettingsProps) {
  const incrementMode = () => increment(mode);
  const decrementMode = () => decrement(mode);

  return (
    <div className="time-adjust-wrapper">
      <h3 id={`${mode}-label`}>{label} Length</h3>
      <div className="adjust-time">
        <span id={`${mode}-increment`} onClick={incrementMode}>
          <FaArrowCircleUp className="fas fa-arrow-circle-up" />
        </span>
        <p>
          <span id={`${mode}-length`}>{length}</span> min
        </p>
        <span id={`${mode}-decrement`} onClick={decrementMode}>
          <FaArrowCircleDown className="fas fa-arrow-circle-down" />
        </span>
      </div>
    </div>
  );
}

export default Settings;
