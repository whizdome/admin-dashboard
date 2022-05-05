import React, { useState, useEffect } from "react";

import { Dropdown, Divider } from "antd";

import { TiArrowSortedDown } from "react-icons/ti";
import { FaBell, FaRegUser } from "react-icons/fa";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

import style from "./TopBar.module.scss";

const TopBar = ({ toggle, width, menuCollapse }) => {
  const [user, setUser] = useState({});
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = () => {
    setVisible(!visible);
  };

  const fetchAccount = () => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const menu = (
    <ul className={style.account_dropdown}>
      <li>
        <div className={style.icon_wrapper}>
          <div className={style.icon}>
            <MdOutlineManageAccounts />
          </div>
        </div>
        <div>
          <p>Account Settings</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>
      </li>
      <Divider />
      <li onClick={logout}>
        <div className={style.icon_wrapper}>
          <div className={style.icon}>
            <IoIosLogOut />
          </div>
        </div>
        <div>
          <p>Logout</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>
      </li>
    </ul>
  );

  useEffect(() => {
    fetchAccount();
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));

    const onScroll = () => {
      setVisible(false);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={style.top_bar}>
      <div
        className={style.right}
        style={{ display: width < 900 ? "block" : "none" }}
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
        <Dropdown
          overlay={menu}
          placement="bottomRight"
          trigger={["click"]}
          arrow={{ pointAtCenter: true }}
          onVisibleChange={handleVisibleChange}
          visible={visible}
          overlayClassName="topbar-menu"
        >
          <div className={style.user_info}>
            {user.profile_picture_path ? (
              <img
                className={style.user_avatar}
                src={user.profile_picture_path}
                alt="user"
              />
            ) : (
              <FaRegUser
                className={style.user_avatar}
                style={{ padding: "0.3rem", color: "#b9b9b9" }}
              />
            )}
            <div className={style.user_info_text}>
              <p className={style.user_name}>{user.name}</p>
            </div>
            <TiArrowSortedDown />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default TopBar;
