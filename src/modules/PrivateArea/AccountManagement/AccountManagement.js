import React from "react";

import { BiExport } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

import PrivateLayout from "../../../components/Layout/Private/PrivateLayout";
import { OutlineIconButton } from "../../../components/Button/Button";

import "./AccountManagement.scss";

const AccountManagement = () => {
  return (
    <PrivateLayout>
      <div className="dashboard">
        <div className="dashboard_header">
          <div className="user_details">
            <FiUsers />
            <div>
              <p className="user_name">Users</p>
              <p className="welcome_message">Users on APEMS</p>
            </div>
          </div>
          <div>
            <OutlineIconButton
              btnTitle="Export Analytic Report"
              icon={<BiExport />}
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
      </div>
    </PrivateLayout>
  );
};

export default AccountManagement;
