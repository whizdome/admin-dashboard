import React from "react";
import { Link } from "react-router-dom";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";
import { Modal } from "antd";

import { BsCaretRightFill } from "react-icons/bs";

import style from "./Onboarding.module.scss";
import "./Modal.scss";

const OnboardingComponent = ({
  headerIcon,
  headerTitle,
  headerSubtitle,
  icon,
  inputs,
  btnTitle,
  btnLink,
  showPassword,
  handleChange,
  modal,
  modalData,
}) => {
  const { confirm } = Modal;

  const showModal = () => {
    confirm({
      title: modalData.title,
      icon: <div className="modal_icon">{modalData.icon}</div>,
      content: modalData.content,
      onOk() {
        console.log("Okay, Thank you");
      },
      okText: modalData.btnText,
      maskClosable: true,
    });
  };
  return (
    <div className={style.login_container}>
      <div className={style.header}>
        <span className={style.icon}>{headerIcon}</span>
        <div className={style.divider}></div>
        <div className={style.text}>
          <p>{headerTitle}</p>
          <p>{headerSubtitle}</p>
        </div>
      </div>
      <hr />
      <div className={style.form}>
        {inputs?.map(
          ({ value, label, name, type, onChange, id, leftIcon, rightIcon }) => {
            return (
              <div className={style.input_container} key={id}>
                <label htmlFor={id}>{label}</label>
                <div className={style.input}>
                  <span className={style.input_left_icon}>{leftIcon}</span>
                  <input
                    type={type}
                    id={id}
                    name={name}
                    value={value.name}
                    className={style.input}
                    onChange={onChange}
                    required
                  />
                  {rightIcon && (
                    <span
                      className={style.input_right_icon}
                      onClick={showPassword}
                    >
                      {rightIcon}
                    </span>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className={style.footer}>
        {modal ? (
          <div onClick={() => showModal()} className={style.button}>
            <span className={style.button_text}>{btnTitle}</span>
            {icon && <BsCaretRightFill className={style.button_icon} />}
          </div>
        ) : (
          <Link to={btnLink} className={style.button}>
            <span className={style.button_text}>{btnTitle}</span>
            {icon && <BsCaretRightFill className={style.button_icon} />}
          </Link>
        )}
      </div>
    </div>
  );
};

export default OnboardingComponent;
