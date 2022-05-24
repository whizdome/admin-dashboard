import React, { useState } from "react";
import TopBar from "../../../components/TopBar/TopBar";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
// import arrowleft from "../../../assets/images/arrow-left.svg";
import { useHistory } from "react-router-dom";

const GuestPageLayout = ({ title, children }) => {
  const history = useHistory();

  const [menuCollapse, setMenuCollapse] = useState(false);
  const { width } = useWindowDimensions();

  const minimizeSidebar = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div className="guestPageLayout">
      <header>
        <div className="title">
          <div className="back" onClick={() => history.goBack()}>
            <svg viewBox="0 0 64 64">
              <path d="M36.7888 59.7133L33.6177 62.9668C32.275 64.3444 30.1038 64.3444 28.7754 62.9668L1.00703 34.4914C-0.335677 33.1138 -0.335677 30.8862 1.00703 29.5232L28.7754 1.0332C30.1181 -0.344401 32.2893 -0.344401 33.6177 1.0332L36.7888 4.2867C38.1457 5.67896 38.1172 7.95054 36.7316 9.31349L19.5193 26.1379H60.5718C62.4716 26.1379 64 27.706 64 29.6551V34.3449C64 36.294 62.4716 37.8622 60.5718 37.8622H19.5193L36.7316 54.6865C38.1315 56.0495 38.16 58.3211 36.7888 59.7133Z" />
            </svg>
          </div>
          <h1>{title}</h1>
        </div>
        <div className="topBar">
          <TopBar
            toggle={minimizeSidebar}
            width={width}
            menuCollapse={menuCollapse}
          />
        </div>
      </header>

      {children}
    </div>
  );
};

export default GuestPageLayout;
