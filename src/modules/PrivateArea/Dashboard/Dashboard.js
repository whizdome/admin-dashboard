import React, { useState, useEffect } from "react";

import { Divider, Dropdown, Radio, Space, Slider } from "antd";

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
import {
  DashboardAnalytics,
  TopEventsAnalytics,
} from "../../../redux/services/dashboard";
import DatePicker from "../../../components/Calender/Calender";

import "./Dashboard.scss";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [user, setUser] = useState([]);
  const [attendeeList, setAttendeeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [visible, setVisible] = useState(false);
  const [locationVisible, setLocationVisible] = useState(false);
  const [eventVisible, setEventVisible] = useState(false);
  const [reportVisible, setReportVisible] = useState(false);
  const [eventRadioFilter, setEventRadioFilter] = useState("agm");
  const [showRevenueByDate, setShowRevenueByDate] = useState(false);
  const [showRevenueByPeriod, setShowRevenueByPeriod] = useState(false);

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
      <div className="dropdown_container_header">
        <div>
          <p
            onClick={() => {
              setShowRevenueByDate(!showRevenueByDate);
              setShowRevenueByPeriod(false);
            }}
            className={`show_revenue ${showRevenueByDate ? "active" : ""}`}
          >
            Revenue By Date
          </p>
        </div>
        <Divider type="vertical" />
        <div>
          <p
            onClick={() => {
              setShowRevenueByPeriod(!showRevenueByPeriod);
              setShowRevenueByDate(false);
            }}
            className={`show_revenue ${showRevenueByPeriod ? "active" : ""}`}
          >
            Revenue By Period
          </p>
        </div>
        <RiCloseCircleLine
          className="close_icon"
          onClick={() => setVisible(false)}
        />
      </div>
      {showRevenueByDate && (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: "2rem",
            gap: "2rem",
          }}
        >
          <div>
            <p>Select Date</p>
            <DatePicker />
          </div>
          <div>
            <p>Select Revenue Type</p>
            <Radio.Group
              onChange={(e) => setEventRadioFilter(e.target.value)}
              value={eventRadioFilter}
            >
              <Space direction="vertical">
                <Radio
                  value="Total Revenue"
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                  className="event_radio_button"
                >
                  Total Revenue
                </Radio>
                <Radio
                  value="Subcription Payment"
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                  className="event_radio_button"
                >
                  Subcription Payment
                </Radio>
                <Radio
                  value="Email & SMS Add On"
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                  className="event_radio_button"
                >
                  Email & SMS Add On
                </Radio>
                <Radio
                  value="Ticket Commission"
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                  className="event_radio_button"
                >
                  Ticket Commission
                </Radio>
                <Radio
                  value="Donation Commission"
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                  className="event_radio_button"
                >
                  Donation Commission
                </Radio>
                <Radio
                  value="Dividend Payment Commission"
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                  className="event_radio_button"
                >
                  Dividend Payment Commission
                </Radio>
              </Space>
            </Radio.Group>
          </div>
        </div>
      )}
      {showRevenueByPeriod && (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: "2rem",
            gap: "2rem",
          }}
        >
          <div>
            <p>Select Range</p>
            <Slider
              defaultValue={0}
              marks={{ 0: "January", 100: "December" }}
              tooltipVisible={false}
              style={{ width: "120px" }}
            />
          </div>
          <div>
            <p>Select Revenue Type</p>
            <Radio.Group
              onChange={(e) => setEventRadioFilter(e.target.value)}
              value={eventRadioFilter}
            >
              <Space direction="vertical">
                <Radio
                  value="Total Revenue"
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                  className="event_radio_button"
                >
                  Total Revenue
                </Radio>
                <Radio
                  value="Subcription Payment"
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                  className="event_radio_button"
                >
                  Subcription Payment
                </Radio>
                <Radio
                  value="Email & SMS Add On"
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                  className="event_radio_button"
                >
                  Email & SMS Add On
                </Radio>
                <Radio
                  value="Ticket Commission"
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                  className="event_radio_button"
                >
                  Ticket Commission
                </Radio>
                <Radio
                  value="Donation Commission"
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                  className="event_radio_button"
                >
                  Donation Commission
                </Radio>
                <Radio
                  value="Dividend Payment Commission"
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                  className="event_radio_button"
                >
                  Dividend Payment Commission
                </Radio>
              </Space>
            </Radio.Group>
          </div>
        </div>
      )}
    </div>
  );

  const locationFilter = (
    <div className="dropdown_container">
      <div className="dropdown_container_header">
        <p>Select Date</p>
        <RiCloseCircleLine
          className="close_icon"
          onClick={() => setLocationVisible(false)}
        />
      </div>
      <DatePicker />
    </div>
  );

  const eventFilter = (
    <div className="dropdown_container">
      <div
        className="dropdown_container_header"
        style={{ justifyContent: "flex-end" }}
      >
        <RiCloseCircleLine
          className="close_icon"
          onClick={() => setEventVisible(false)}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginTop: "2rem",
          gap: "2rem",
        }}
      >
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
                style={{
                  fontSize: ".95rem",
                  fontWeight: 300,
                  color: "#fff",
                }}
                className="event_radio_button"
              >
                AGM
              </Radio>
              <Radio
                value="Corporate Event"
                style={{
                  fontSize: ".95rem",
                  fontWeight: 300,
                  color: "#fff",
                }}
                className="event_radio_button"
              >
                Corporate Event
              </Radio>
              <Radio
                value="Concert & Shows"
                style={{
                  fontSize: ".95rem",
                  fontWeight: 300,
                  color: "#fff",
                }}
                className="event_radio_button"
              >
                Concert & Shows
              </Radio>
            </Space>
          </Radio.Group>
        </div>
      </div>
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
    const eventRes = await TopEventsAnalytics();
    if (res?.message === "OK") {
      setData(res?.data);
      setAttendeeList(
        Object.values(res?.data?.this_month_attendees_list).map((item) => item)
      );
      setLoading(false);
      console.log("eventRes", eventRes);
    }
    if (res.errors) {
      setErrors(res.errors);
      setLoading(false);
    }
    if (eventRes?.message === "OK") {
      setEventData(eventRes?.data.slice(0, 7));
      setLoading(false);
    }
    if (eventRes.errors) {
      setErrors(eventRes.errors);
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
                          {change && <Divider type="vertical" />}
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
                  {eventData.map(
                    ({ id, short_name, logo, attendees_count }) => (
                      <div className="event_data_item" key={id}>
                        <div className="event_data_item_logo">
                          <img src={logo} alt="event logo" />
                          <p>{short_name}</p>
                        </div>
                        <p>{attendees_count}</p>
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
