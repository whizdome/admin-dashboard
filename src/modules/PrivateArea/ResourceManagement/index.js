import React, { useState } from "react";
import PrivateLayout from "../../../components/Layout/Private/PrivateLayout";
import Blog from "./Blog";
import HelpTips from "./components/HelpTips";
import Help from "./Help";
import Landing from "./Landing";
import ResourceHeader from "./ResourceHeader";
import "./resourceManagement.scss";

const ResourceManagement = () => {
  const [currentView, setcurrentView] = useState(1);
  const switchView = (view) => {
    if (view === 1) {
      setcurrentView(1);
    } else if (view === 2) {
      setcurrentView(2);
    } else if (view === 3) {
      setcurrentView(3);
    }
  };

  return (
    <PrivateLayout>
      <div className="resourceManagement">
        <ResourceHeader
          currentView={currentView}
          title="Resources Management"
        />
        <div className="container resourceBody">
          <ul>
            <li
              className={`${currentView === 1 ? "active" : ""}`}
              onClick={() => switchView(1)}
            >
              Landing Page
            </li>
            <li
              className={`${currentView === 2 ? "active" : ""}`}
              onClick={() => switchView(2)}
            >
              Help Tip
            </li>
            <li
              className={`${currentView === 3 ? "active" : ""}`}
              onClick={() => switchView(3)}
            >
              Blog Post
            </li>
          </ul>
          {currentView === 1 ? (
            <Landing />
          ) : currentView === 2 ? (
            <Help />
          ) : currentView === 3 ? (
            <Blog />
          ) : (
            ""
          )}
        </div>
      </div>
      {/* <div>
        <HelpTips />
      </div> */}
    </PrivateLayout>
  );
};

export default ResourceManagement;
