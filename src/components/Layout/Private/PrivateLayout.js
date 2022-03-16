import React from "react";

import SidebarComponent from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";

import style from "./PrivateLayout.module.scss";

const PrivateLayout = ({ children }) => {
  return (
    <div className={style.private_layout}>
      <SidebarComponent />
      <div className={style.content}>
        <TopBar />
        {children}
      </div>
    </div>
  );
};

export default PrivateLayout;
