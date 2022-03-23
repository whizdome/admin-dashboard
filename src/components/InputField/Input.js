import React, { useState } from "react";
import style from "./Input.module.scss";

const InputField = ({
  type,
  value,
  name,
  onChange,
  label,
  id,
  leftIcon,
  visibleRightIcon,
  hiddenRightIcon,
}) => {
  const [inputType, setInputType] = useState(type);

  return (
    <div className={style.input_group}>
      <label htmlFor={id}>{label}</label>
      <div className={style.input}>
        <span className={style.input_left_icon}>{leftIcon}</span>
        <input
          type={inputType}
          id={id}
          name={name}
          value={value}
          className={style.input}
          onChange={onChange}
        />
        <span
          className={style.input_right_icon}
          onClick={() =>
            setInputType(inputType === "text" ? "password" : "text")
          }
        >
          {inputType === "text" ? visibleRightIcon : hiddenRightIcon}
        </span>
      </div>
    </div>
  );
};

export default InputField;
