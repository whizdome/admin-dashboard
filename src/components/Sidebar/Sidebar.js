import React from "react";
import { Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
  SidebarHeader,
} from "react-pro-sidebar";

import { SidebarData } from "../../constants";

import Logo from "../../assets/images/apemWhiteLogo.png";

import style from "./Sidebar.module.scss";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

const SidebarComponent = () => {
  return (
    <ProSidebar className={style.sidebar}>
      <SidebarHeader className={style.header}>
        <img src={Logo} alt="logo" />
      </SidebarHeader>
      <SidebarContent className={style.content} id="content">
        {SidebarData.map(({ id, name, icon, path }) => {
          return (
            <Menu iconShape="circle" key={id} className="menu">
              <MenuItem icon={icon} className="menu_item">
                {name}
                <Link to={path} />
              </MenuItem>
            </Menu>
          );
        })}
      </SidebarContent>
    </ProSidebar>
  );
};

export default SidebarComponent;
