import React from "react";
import { withRouter } from "react-router";
import { Link, NavLink } from "react-router-dom";
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

const SidebarComponent = ({ closeSidebar }) => {
  return (
    <ProSidebar className={style.sidebar} id="sidebar" collapsed={closeSidebar}>
      <SidebarHeader className={style.header}>
        <img src={Logo} alt="logo" />
      </SidebarHeader>
      <SidebarContent className={style.content} id="content">
        {SidebarData.map(({ id, name, icon, path }) => {
          return (
            <NavLink
              to={path}
              exact
              activeClassName="active"
              // isActive={(matchPath, location) => {
              //   if (!match) {
              //     console.log(match, location.pathname);
              //     return false;
              //   }
              // }}
              key={id}
            >
              <Menu iconShape="circle" className="menu">
                <MenuItem icon={icon} className="menu_item">
                  {name}
                </MenuItem>
              </Menu>
            </NavLink>
          );
        })}
      </SidebarContent>
    </ProSidebar>
  );
};

export default withRouter(SidebarComponent);
