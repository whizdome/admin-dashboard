import React, { useState, useEffect } from "react";

import { Divider, Dropdown, Radio, Space } from "antd";

import Filter from "../../../assets/images/filter.png";
import { BiExport, BiBriefcaseAlt2 } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";
import { CgStack, CgProfile } from "react-icons/cg";
import { RiCloseCircleLine } from "react-icons/ri";

import Spinner from "../../../components/Loader";
import PrivateLayout from "../../../components/Layout/Private/PrivateLayout";
import { OutlineIconButton } from "../../../components/Button/Button";
import { DashboardCard } from "../../../components/Card/Card";
import Chart from "../../../components/Graph/Graph";
import {
  dashboardAttendeeLocation,
  dashboardAttendeeEvents,
} from "../../../constants/index";
import { DashboardAnalytics } from "../../../redux/services/dashboard";
import DatePicker from "../../../components/Calender/Calender";

import "./Dashboard.scss";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [attendeeList, setAttendeeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [visible, setVisible] = useState(false);
  const [locationVisible, setLocationVisible] = useState(false);
  const [eventVisible, setEventVisible] = useState(false);
  const [reportVisible, setReportVisible] = useState(false);
  const [eventRadioFilter, setEventRadioFilter] = useState("agm");

  const handleVisibleChange = () => {
    setVisible(!visible);
  };

  const handleLocationVisibleChange = () => {
    setLocationVisible(!locationVisible);
  };

  const handleEventVisibleChange = () => {
    setEventVisible(!eventVisible);
  };

  const handleReportChange = () => {
    setReportVisible(!reportVisible);
  };

  const filter = (
    <div className="dropdown_container">
      <p>Revenue By Date</p>
      <Divider type="vertical" />
      <p>Revenue By Period</p>
      <RiCloseCircleLine
        className="close_icon"
        onClick={() => setVisible(false)}
      />
      <div style={{ display: "block" }}>text</div>
    </div>
  );

  const locationFilter = (
    <div className="dropdown_container">
      <p>Select Date</p>
      <DatePicker />
      <RiCloseCircleLine
        className="close_icon"
        onClick={() => setLocationVisible(false)}
      />
    </div>
  );

  const eventFilter = (
    <div className="dropdown_container">
      <div>
        <p>Select Date</p>
        <DatePicker />
      </div>
      <div>
        <p>Select Event Type</p>
        <Radio.Group
          onChange={(e) => setEventRadioFilter(e.target.value)}
          value={eventRadioFilter}
        >
          <Space direction="vertical">
            <Radio
              value="agm"
              style={{ color: "#fff", backgroundColor: "transparent" }}
              className="event_radio_button"
            >
              AGM
            </Radio>
            <Radio
              value="Corporate Event"
              style={{ color: "#fff", backgroundColor: "transparent" }}
              className="event_radio_button"
            >
              Corporate Event
            </Radio>
            <Radio
              value="Concert & Shows"
              style={{ color: "#fff" }}
              className="event_radio_button"
            >
              Concert & Shows
            </Radio>
          </Space>
        </Radio.Group>
      </div>
      <RiCloseCircleLine
        className="close_icon"
        onClick={() => setEventVisible(false)}
      />
    </div>
  );

  const report = (
    <div className="dropdown_container report">
      <p>As CSV</p>
      <Divider />
      <p>As Excel</p>
      <Divider />
      <p>As PDF</p>
    </div>
  );

  const getAnalytics = async () => {
    setLoading(true);
    const res = await DashboardAnalytics();
    if (res?.message === "OK") {
      setData(res?.data);
      setAttendeeList(
        Object.values(res?.data?.this_month_attendees_list).map((item) => item)
      );
      setLoading(false);
    }
    if (res.errors) {
      setErrors(res.errors);
      setLoading(false);
    }
    console.log(res);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    // console.log(data);
    setUser(data);
    getAnalytics();

    const onScroll = () => {
      setVisible(false);
      setEventVisible(false);
      setLocationVisible(false);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <PrivateLayout>
      <div className="dashboard">
        <div className="dashboard_header">
          <div className="user_details">
            {user.profile_picture_path ? (
              <img src={user.profile_picture_path} alt="user" />
            ) : (
              <CgProfile />
            )}{" "}
            <div>
              <p className="user_name">Hi {user.name}</p>
              <p className="welcome_message">Welcome to your Admin dashboard</p>
            </div>
          </div>
          <div className="drop-down drop-down-bubble">
            <Dropdown
              overlay={report}
              placement="bottomCenter"
              trigger={["click"]}
              arrow={{ pointAtCenter: true }}
              onVisibleChange={handleReportChange}
              visible={reportVisible}
            >
              <OutlineIconButton
                btntitle="Export Analytic Report"
                icon={<BiExport />}
                onClick={() => console.log("clicked")}
              />
            </Dropdown>
          </div>
        </div>
        {loading ? (
          <Spinner visible={loading} />
        ) : (
          <>
            <div className="dashboard_body">
              <DashboardCard
                children={
                  <div className="card_content">
                    <div className="card_header">
                      <div className="card_text_wrapper">
                        <div className="left">
                          <p className="card_title">Total Host</p>
                          <p className="card_value">{data?.total_hosts}</p>

                          <div className="card_divider"></div>
                        </div>
                        <div className="right">
                          <p className="card_title">Host (This Month)</p>
                          <p className="card_value">{data?.this_month_host}</p>
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
                      <p className="card_value">{data?.total_active_host}</p>
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
                          <p className="card_value">{data?.total_attendees}</p>
                          <div className="card_divider"></div>
                        </div>
                        <div className="right">
                          <p className="card_title">Attendees (This Month)</p>
                          <p className="card_value">
                            {data?.this_month_attendees}
                          </p>
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
                          <p className="card_value">{attendeeList[1]}</p>
                          <div className="card_divider"></div>
                        </div>
                        <div className="center">
                          <p className="card_title">Corporate Events</p>
                          <p className="card_value">{attendeeList[0]}</p>
                          <div className="card_divider"></div>
                        </div>
                        <div className="right">
                          <p className="card_title">Shows</p>
                          <p className="card_value">{attendeeList[2]}</p>
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
                          <p className="card_value">{data?.total_events}</p>
                          <div className="card_divider"></div>
                        </div>
                        <div className="right">
                          <p className="card_title">Total Host</p>
                          <p className="card_value">{data?.total_host}</p>
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
                    onVisibleChange={handleVisibleChange}
                    visible={visible}
                    className="dropdown_filter"
                  >
                    <div className="filter">
                      <img src={Filter} alt="filter" />
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

                  <Dropdown
                    overlay={locationFilter}
                    placement="bottomRight"
                    trigger={["click"]}
                    arrow={{ pointAtCenter: true }}
                    onVisibleChange={handleLocationVisibleChange}
                    visible={locationVisible}
                  >
                    <div className="filter">
                      <img src={Filter} alt="filter" />
                      <span>Filter</span>
                      <BsCaretDownFill />
                    </div>
                  </Dropdown>
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
                    overlay={eventFilter}
                    placement="bottomRight"
                    trigger={["click"]}
                    arrow={{ pointAtCenter: true }}
                    onVisibleChange={handleEventVisibleChange}
                    visible={eventVisible}
                  >
                    <div className="filter">
                      <img src={Filter} alt="filter" />
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
                  {dashboardAttendeeEvents.map(
                    ({ id, event, logo, attendees }) => (
                      <div className="event_data_item" key={id}>
                        <div className="event_data_item_logo">
                          <img src={logo} alt="event logo" />
                          <p>{event}</p>
                        </div>
                        <p>{attendees}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </PrivateLayout>
  );
};

export default Dashboard;
