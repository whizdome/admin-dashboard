import React, { useState } from "react";
import PrivateLayout from "../../../../components/Layout/Private/PrivateLayout";
import { useLocation } from "react-router-dom";
import ResourceHeader from "../ResourceHeader";
import "./HelpTipsView.scss";

const HelpTipsView = () => {
    const location = useLocation();
    const issEdit = location.search.split("=")[1];
// console.log(typeof issEdit, "type off log")
    
  return (
    <PrivateLayout>
      <div className="helpTipsView">
        <div className="head">help</div>
      </div>
    </PrivateLayout>
  );
};
export default HelpTipsView;
