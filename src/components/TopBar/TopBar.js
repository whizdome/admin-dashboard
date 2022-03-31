import React, {useState, useEffect} from "react";

import { TiArrowSortedDown } from "react-icons/ti";
import { FaBell,FaRegUser } from "react-icons/fa";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";

import style from "./TopBar.module.scss";

const initialState = {
  profile_picture_path:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcCciWsDR4Qjsp2et36-KDeuKttIknti2-g&usqp=CAU",
  account_type: "APEMS Admin",
};

const TopBar = ({ toggle, width, menuCollapse }) => {
  const [user, setUser] = useState(initialState);

  const fetchAccount = () => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div className={style.top_bar}>
      <div
        className={style.right}
        style={{ display: width < 768 ? "block" : "none" }}
      >
        {!menuCollapse ? (
          <HiMenuAlt3
            onClick={toggle}
            style={{
              zIndex: "9999",
              left: "22rem",
              color: "#fff",
              top: "2rem",
              position: "absolute",
            }}
          />
        ) : (
          <HiMenuAlt2 onClick={toggle} />
        )}
        {/* <HiOutlineMenuAlt1 onClick={toggle} /> */}
      </div>
      <div className={style.left}>
        <div className={style.notification}>
          <FaBell />
          <div className={style.badge}>234</div>
        </div>
        <div className={style.user_info}>
          {user.profile_picture_path ? (
          <img
            className={style.user_avatar}
            src={user.profile_picture_path}
            alt="user"
          />
          ) : (
            <FaRegUser
            className={style.user_avatar} style={{padding: "0.3rem", color: "#b9b9b9"}} />
          )}
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
