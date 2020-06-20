import React from "react";
import PropTypes from "prop-types";

function Button({ id, onClick, children, icon }) {
  return (
    <button id={id} onClick={onClick}>
      {icon} {children}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
