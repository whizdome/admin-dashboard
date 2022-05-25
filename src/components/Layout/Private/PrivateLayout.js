import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import SidebarComponent from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";

import style from "./PrivateLayout.module.scss";

const PrivateLayout = ({ children }) => {

  const [menuCollapse, setMenuCollapse] = useState(false);
  const { width } = useWindowDimensions();

  const minimizeSidebar = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  useEffect(() => {
    width < 768 ? setMenuCollapse(true) : setMenuCollapse(false);
  }, [width]);

  return (
    <div className={style.private_layout}>
      <SidebarComponent closeSidebar={menuCollapse} />
      <main className={style.content}>
        <TopBar
          toggle={minimizeSidebar}
          width={width}
          menuCollapse={menuCollapse}
        />
        {children}
      </main>
    </div>
  );
};

export default PrivateLayout;
