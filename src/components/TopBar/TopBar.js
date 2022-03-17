import React from "react";

import { TiArrowSortedDown } from "react-icons/ti";
import { FaBell } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import style from "./TopBar.module.scss";

const TopBar = ({ toggle, width }) => {
  return (
    <div className={style.top_bar}>
      <div className={style.right}>
        <HiOutlineMenuAlt1
          onClick={toggle}
          style={{ display: width < 768 ? "block" : "none" }}
        />
      </div>
      <div className={style.left}>
        <div className={style.notification}>
          <FaBell />
          <div className={style.badge}>234</div>
        </div>
        <div className={style.user_info}>
          <div className={style.user_info_icon}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcCciWsDR4Qjsp2et36-KDeuKttIknti2-g&usqp=CAU"
              alt="user"
            />
          </div>
          <div className={style.user_info_text}>
            <p>Apems Admin</p>
          </div>
          <TiArrowSortedDown />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
