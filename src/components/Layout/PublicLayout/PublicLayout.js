import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/images/Apems-logo.png";
import About from "../../../assets/images/wlc.png";
import { MdEventNote } from "react-icons/md";

import style from "./PublicLayout.module.scss";
import "./PublicLayout.scss";

const ScreenLayout = ({ reset, password, children, link }) => {
  return (
    <div className={style.screen_layout}>
      <img src={Logo} alt="APEMS logo" className={style.logo} />
      <hr />
      <div className={style.children}>{children}</div>
      {!reset && (
        <div className={style.reset}>
          <div className={style.doughnut}></div>
          <div className={style.reset_container}>
            <img src={About} alt="wlc" />
            <div className={style.text}>
              <p>Welcome to</p>
              <p>APEMS Admin Panel</p>
            </div>
            <MdEventNote
              color="#666666" /* This is a React icon. It is a font icon. */
              size="30"
              className={`${style.menu_item_icon}`}
            />
          </div>
        </div>
      )}
      {!password && (
        <Link to={link} className={style.password_container}>
          <div className={style.text}>
            <p>Can&apos;t Remember Password?</p>
            <p>Recover Password</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ScreenLayout;
