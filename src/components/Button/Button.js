import React from "react";

import { BsCaretRightFill } from "react-icons/bs";

import "./Button.scss";

export const PublicButton = ({ icon, btnTitle, type, onClick, disabled }) => {
  return (
    <div
      className={`button ${disabled && "disabled"} ${
        type === "fill" ? "button_fill" : "button_outline"
      }`}
      onClick={onClick}
    >
      <span className="button_text">{btnTitle}</span>
      {icon && <BsCaretRightFill className="button_icon" />}
    </div>
  );
};

export const OutlineIconButton = ({ icon, btnTitle, onClick }) => {
  return (
    <div className="button_outline_private" onClick={onClick}>
      {icon}
      <span className="button_text">{btnTitle}</span>
    </div>
  );
};
