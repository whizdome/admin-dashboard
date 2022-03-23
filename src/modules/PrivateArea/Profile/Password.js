import React from "react";

import { FillButton } from "../../../components/Button/Button";

import { HiCheckCircle } from "react-icons/hi";
import "./Profile.scss";

const Password = () => {
  return (
    <div id="password_page" className="profile_body_content">
      <div className="profile_body_content_body">
        <div className="profile_body_details">
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">Reset Password</p>
              <p className="profile_subtitle">Reset User Password</p>
            </div>
            <div className="column_right">
              <label>Password</label>
              <input type="text" value="**************" disabled />
              <p id="update">Updated 6 months ago</p>
            </div>
          </div>

          <div className="profile_body_details_row">
            <div className="column_left"></div>
            <div className="column_right">
              <p onClick={() => console.log("resetting")}>Reset Password</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
