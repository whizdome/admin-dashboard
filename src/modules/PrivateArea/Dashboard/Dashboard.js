import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { BiExport, BiBriefcaseAlt2 } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { CgStack } from "react-icons/cg";

import PrivateLayout from "../../../components/Layout/Private/PrivateLayout";
import { OutlineIconButton } from "../../../components/Button/Button";
import { DashboardCard } from "../../../components/Card/Card";

import "./Dashboard.scss";

const initialState = {
  name: "Chijindu Amadi",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcCciWsDR4Qjsp2et36-KDeuKttIknti2-g&usqp=CAU",
};

const Dashboard = () => {
  const loginState = useSelector((state) => state.loginRes);

  useEffect(() => {
    console.log(loginState);
    localStorage.setItem("token", loginState.data.access_token);
    localStorage.setItem("user", JSON.stringify(loginState.data.user));
  }, [loginState]);

  return (
    <PrivateLayout>
      <div className="dashboard">
        <div className="dashboard_header">
          <div className="user_details">
            <img src={initialState.image} alt="user" />
            <div>
              <p className="user_name">Hi {initialState.name}</p>
              <p className="welcome_message">Welcome to your Admin dashboard</p>
            </div>
          </div>
          <div>
            <OutlineIconButton
              btntitle="Export Analytic Report"
              icon={<BiExport />}
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
        <div className="dashboard_body">
          <DashboardCard
            children={
              <div className="card_content">
                <div className="card_header">
                  <div className="card_text_wrapper">
                    <div className="left">
                      <p className="card_title">Total Host</p>
                      <p className="card_value">20,000</p>

                      <div className="card_divider"></div>
                    </div>
                    <div className="right">
                      <p className="card_title">Host (This Month)</p>
                      <p className="card_value">2,000</p>
                    </div>
                  </div>
                  <div className="card_icon_wrapper">
                    <div className="card_icon">
                      <BiBriefcaseAlt2 />
                    </div>
                  </div>
                </div>
                <div className="card_footer">
                  <p className="card_title">Total Active Host This Month</p>
                  <p className="card_value">800</p>
                </div>
              </div>
            }
          />
          <DashboardCard
            children={
              <div className="card_content">
                <div className="card_header">
                  <div className="card_text_wrapper">
                    <div className="left">
                      <p className="card_title">Total Attendees</p>
                      <p className="card_value">750,000</p>
                      <div className="card_divider"></div>
                    </div>
                    <div className="right">
                      <p className="card_title">Attendees (This Month)</p>
                      <p className="card_value">75,000</p>
                    </div>
                  </div>
                  <div className="card_icon_wrapper">
                    <div className="card_icon">
                      <FaUserTie />
                    </div>
                  </div>
                </div>
                <div className="card_footer">
                  <p className="card_title">Total Attendees This month</p>
                  <div className="card_footer_content">
                    <div className="left">
                      <p className="card_title">AGM</p>
                      <p className="card_value">50,000</p>
                      <div className="card_divider"></div>
                    </div>
                    <div className="center">
                      <p className="card_title">Corporate Events</p>
                      <p className="card_value">20,000</p>
                      <div className="card_divider"></div>
                    </div>
                    <div className="right">
                      <p className="card_title">Shows</p>
                      <p className="card_value">5,000</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <DashboardCard
            children={
              <div className="card_content">
                <div className="card_header">
                  <div className="card_text_wrapper">
                    <div className="left">
                      <p className="card_title">Total Events</p>
                      <p className="card_value">5,000</p>
                      <div className="card_divider"></div>
                    </div>
                    <div className="right">
                      <p className="card_title">Total Host</p>
                      <p className="card_value">500</p>
                    </div>
                  </div>
                  <div className="card_icon_wrapper">
                    <div className="card_icon">
                      <CgStack />
                    </div>
                  </div>
                </div>
                <div className="card_footer">
                  <p className="card_title">Total Event (This Month)</p>
                  <div className="card_footer_content">
                    <div className="left">
                      <p className="card_title">AGM</p>
                      <p className="card_value">3,000</p>
                      <div className="card_divider"></div>
                    </div>
                    <div className="center">
                      <p className="card_title">Corporate Events</p>
                      <p className="card_value">1,500</p>
                      <div className="card_divider"></div>
                    </div>
                    <div className="right">
                      <p className="card_title">Shows</p>
                      <p className="card_value">500</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Dashboard;
