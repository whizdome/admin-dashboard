import React from "react";

import { BsCaretRightFill, BsCaretDownFill } from "react-icons/bs";

import "./Button.scss";

export const PublicButton = ({ icon, btntitle, type, onClick, disabled }) => {
  return (
    <div
      className={`button ${disabled && "disabled"} ${
        type === "fill" ? "button_fill" : "button_outline"
      }`}
      onClick={onClick}
    >
      <span className="button_text">{btntitle}</span>
      {icon && <BsCaretRightFill className="button_icon" />}
    </div>
  );
};

export const OutlineIconButton = ({ icon, btntitle, onClick }) => {
  return (
    <div className="button_outline_private" onClick={onClick}>
      {icon}
      <span className="button_text">{btntitle}</span>
    </div>
  );
};

export const FillIconButton = ({ icon, btntitle, onClick, rightIcon }) => {
  return (
    <div className="button_fill_icon_private" onClick={onClick}>
      {icon}
      <span className="button_text">{btntitle}</span>
      {rightIcon && <BsCaretDownFill className="button_right_icon" />}
    </div>
  );
};

export const FillButton = ({ btntitle, onClick, bgColor }) => {
  return (
    <div
      className="button_fill_private"
      onClick={onClick}
      style={{ backgroundColor: bgColor, borderColor: bgColor }}
    >
      <span className="button_text">{btntitle}</span>
    </div>
  );
};
