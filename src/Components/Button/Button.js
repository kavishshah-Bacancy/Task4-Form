import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
function Button({ value, styleClass, onClickHandle }) {
  return (
    <div>
      <button className={`btn ${styleClass}`} onClick={onClickHandle}>
        {value}
      </button>
    </div>
  );
}

Button.propTypes = {
  styleClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
