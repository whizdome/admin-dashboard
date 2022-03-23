import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Divider } from "antd";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BsFillCaretLeftFill } from "react-icons/bs";

import PrivateLayout from "../../../components/Layout/Private/PrivateLayout";
import CustomTab from "../../../components/Tabs/Tabs";
import Profile from "./Profile";
import SocialProfile from "./SocialProfile";
import PayoutAccount from "./PayoutAccount";
import Password from "./Password";

import "./Profile.scss";

const AccountManagementProfile = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [user, setUser] = useState({});

  const history = useHistory();

  const handleTabChange = (key) => {
    if (key === "0") {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
    // console.log(user);
  }, []);

  return (
    <PrivateLayout>
      <div className="profile">
        <div
          className="profile_header"
          style={{ display: showHeader ? "block" : "none" }}
        >
          <div className="user_details">
            {/* <Link to="/account-management" className="back_button"> */}
            <div className="go_back" onClick={history.goBack}>
              <BsFillCaretLeftFill />
              <span className="back">Back</span>
            </div>
            {/* </Link> */}
            <Divider
              type="vertical"
              style={{
                height: "45px",
                margin: "0 20px",
                borderLeft: "1px solid #b7b7b7",
              }}
            />
            <div className="user_details_icon_wrapper">
              <div className="user_details_icon">
                <BiBriefcaseAlt2 />
              </div>
            </div>
            <p className="user_name">Account Management</p>
          </div>
        </div>
        <div className="profile_body">
          <CustomTab
            parentCallback={handleTabChange}
            tabs={[
              {
                title: "Profile",
                content: <Profile user={user} />,
              },
              {
                title: "Social Profile",
                content: <SocialProfile />,
              },
              {
                title: "Payout Account",
                content: <PayoutAccount />,
              },
              {
                title: "Password",
                content: <Password />,
              },
            ]}
          />
        </div>
      </div>
    </PrivateLayout>
  );
};

export default AccountManagementProfile;
