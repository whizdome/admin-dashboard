import React, { useState } from "react";

import style from "./Header.module.scss";

const Header = ({ headerIcon, headerTitle, headerSubtitle }) => {
  return (
    <div className={style.header}>
      <span className={style.icon}>{headerIcon}</span>
      <div className={style.divider}></div>
      <div className={style.text}>
        <p>{headerTitle}</p>
        <p>{headerSubtitle}</p>
      </div>
    </div>
  );
};

export default Header;
