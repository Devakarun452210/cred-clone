import React from "react";
import "./Button.css";

const Button = ({ btnText, onClick, customClass, prefix }) => {
  return (
    <div
      className={`flex absoluteCenter buttonWrapper ${customClass}`}
      onClick={onClick}
    >
      {prefix}
      {btnText}
    </div>
  );
};

export default Button;
