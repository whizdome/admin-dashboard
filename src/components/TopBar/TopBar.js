import React from "react";

import { TiArrowSortedDown } from "react-icons/ti";
import { FaBell } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import style from "./TopBar.module.scss";

const initialState = {
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcCciWsDR4Qjsp2et36-KDeuKttIknti2-g&usqp=CAU",
  account_type: "APEMS Admin",
};

const TopBar = ({ toggle, width }) => {
  return (
    <div className={style.top_bar}>
      <div
        className={style.right}
        style={{ display: width < 768 ? "block" : "none" }}
      >
        <HiOutlineMenuAlt1 onClick={toggle} />
      </div>
      <div className={style.left}>
        <div className={style.notification}>
          <FaBell />
          <div className={style.badge}>234</div>
        </div>
        <div className={style.user_info}>
          <img
            className={style.user_avatar}
            src={initialState.image}
            alt="user"
          />
          <div className={style.user_info_text}>
            <p className={style.user_name}>{initialState.account_type}</p>
          </div>
          <TiArrowSortedDown />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
