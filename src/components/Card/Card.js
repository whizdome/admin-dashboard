import React from "react";

import style from "./Card.module.scss";

export const DashboardCard = ({ children }) => {
  return <div className={style.dashboard_card}>{children}</div>;
};
