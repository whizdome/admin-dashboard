import React, { useState, useEffect } from "react";

import { Divider, Dropdown } from "antd";

import { BiExport, BiBriefcaseAlt2 } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCaretDownFill } from "react-icons/bs";
import { CgStack, CgProfile } from "react-icons/cg";

import PrivateLayout from "../../../components/Layout/Private/PrivateLayout";
import { OutlineIconButton } from "../../../components/Button/Button";
import { DashboardCard } from "../../../components/Card/Card";
import Chart from "../../../components/Graph/Graph";
import {
  dashboardAttendeeLocation,
  dashboardAttendeeEvents,
} from "../../../constants/index";

import "./Dashboard.scss";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const filter = (
    <div className="dropdown_container">
      <p>Revenue By Date</p>
      <Divider type="vertical" />
      <p>Revenue By Period</p>
    </div>
  );

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    setData(data);
  }, []);

  return (
    <PrivateLayout>
      <div className="dashboard">
        <div className="dashboard_header">
          <div className="user_details">
            {data.profile_picture_path ? (
              <img src={data.profile_picture_path} alt="user" />
            ) : (
              <CgProfile />
            )}{" "}
            <div>
              <p className="user_name">Hi {data.name}</p>
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
        <div className="dashboard_chart">
          <div id="graph_data">
            <div className="header">
              <h2>Revenue</h2>
              <Dropdown
                overlay={filter}
                placement="bottomRight"
                trigger={["click"]}
                arrow={{ pointAtCenter: true }}
                className="dropdown_filter"
              >
                <div className="filter">
                  <AiOutlineMenu />
                  <span>Filter</span>
                  <BsCaretDownFill />
                </div>
              </Dropdown>
            </div>
            <div className="subheader">
              <div className="left">
                <p>Total Revenue</p>
                <h2>₦ 12B</h2>
              </div>
              <Divider type="vertical" />
              <div className="right">
                <p>Revenue (this Month)</p>
                <h2>₦ 350M</h2>
                <span>
                  +55%
                  <BsCaretDownFill />
                </span>
              </div>
            </div>
            <div id="graph">
              <Chart />
            </div>
          </div>
          <div id="location_data">
            <div className="header">
              <h2>Attendee Location</h2>
              <div className="filter">
                <AiOutlineMenu />
                <span>Filter</span>
                <BsCaretDownFill />
              </div>
            </div>
            <div className="location_data_body">
              {dashboardAttendeeLocation.map(
                ({ id, venue, attendees, change, color }) => (
                  <div className="location_data_item" key={id}>
                    <p>{venue}</p>
                    <p>
                      <span style={{ color: color }}>{change}</span>
                      <Divider type="vertical" />
                      <span>{attendees}</span>
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
          <div id="event_data">
            <div className="header">
              <h2>Top Events</h2>
              <Dropdown
                overlay={filter}
                placement="bottomRight"
                trigger={["click"]}
                arrow={{ pointAtCenter: true }}
              >
                <div className="filter">
                  <AiOutlineMenu />
                  <span>Filter</span>
                  <BsCaretDownFill />
                </div>
              </Dropdown>
            </div>
            <div className="title">
              <p>Events</p>
              <p>Attendees</p>
            </div>
            <hr />
            <div className="event_data_body">
              {dashboardAttendeeEvents.map(({ id, event, logo, attendees }) => (
                <div className="event_data_item" key={id}>
                  <div className="event_data_item_logo">
                    <img src={logo} alt="event logo" />
                    <p>{event}</p>
                  </div>
                  <p>{attendees}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Dashboard;
