import React from "react";

import { BsCaretRightFill } from "react-icons/bs";

import "./Button.scss";

const Button = ({ icon, btnTitle, type, onClick }) => {
  return (
    <div
      className={`button ${type === "fill" ? "button_fill" : "button_outline"}`}
      onClick={onClick}
    >
      <span className="button_text">{btnTitle}</span>
      {icon && <BsCaretRightFill className="button_icon" />}
    </div>
  );
};

export default Button;
