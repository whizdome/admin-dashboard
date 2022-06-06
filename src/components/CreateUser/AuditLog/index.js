import React, { useState } from "react";
import "./AuditLog.scss";

const AuditLog = () => {
  const [showBubble, setShowBubble] = useState(false);

    const handleOpenModal = (type) => {
      setShowBubble(false);
    };


  const auditLogDatas = [
    {
      userName: "salam sabutuwete",
      imageUrl: "",
      userId: "8989",
      ipAddress: "75657585",
      activity: " jogging up and down",
      status: "success",
      timeStamp: "21:2882:272",
    },
    {
      userName: "tosin sabutuwete",
      imageUrl: "",
      userId: "8989",
      ipAddress: "43457585",
      activity: " coding up and down",
      status: "failed",
      timeStamp: "21:2882:272",
    },
    {
      userName: "seun yusuf",
      imageUrl: "",
      userId: "8989",
      ipAddress: "75657585",
      activity: " jogging up and down",
      status: "success",
      timeStamp: "21:2882:272",
    },
    {
      userName: "salam sabutuwete",
      imageUrl: "",
      userId: "8989",
      ipAddress: "75657585",
      activity: " jogging up and down",
      status: "success",
      timeStamp: "21:2882:272",
    },
  ];
  return (
    <div className="auditLogs">
      <div className="auditWrapper">
        <div className="head">
          <div>
            <h3>Audit Log</h3>
          </div>
          <div className="dropdown_bubble">
            <div
              className="exportLog"
              onClick={() => setShowBubble(!showBubble)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.659"
                height="19.622"
                viewBox="0 0 17.659 19.622"
              >
                <g id="export" transform="translate(-3.384)">
                  <path
                    id="Path_6992"
                    data-name="Path 6992"
                    d="M17.755,23.348H14.823v1.74h2.932c.872,0,1.548.445,1.548.829v7.715c0,.383-.676.829-1.548.829H6.672c-.872,0-1.548-.445-1.548-.829V25.917c0-.383.676-.829,1.548-.829H9.6v-1.74H6.672c-1.844,0-3.288,1.128-3.288,2.568v7.715c0,1.441,1.444,2.568,3.288,2.568H17.755c1.844,0,3.288-1.128,3.288-2.568V25.917C21.043,24.476,19.6,23.348,17.755,23.348Z"
                    transform="translate(0 -16.578)"
                    fill="#707070"
                  />
                  <path
                    id="Path_6993"
                    data-name="Path 6993"
                    d="M22.826,4.336a.867.867,0,0,0,.615-.255L24.53,2.992v8.85a.87.87,0,1,0,1.74,0V2.934l1.148,1.148a.87.87,0,1,0,1.23-1.23l-2.6-2.6A.866.866,0,0,0,25.436,0h-.013a.866.866,0,0,0-.615.254l-2.6,2.6a.87.87,0,0,0,.615,1.485Z"
                    transform="translate(-13.187)"
                    fill="#707070"
                  />
                </g>
              </svg>
              <span>Export Audit Log</span>
            </div>
            <ul
              className="dropdown_menu"
              style={{ display: showBubble ? "block" : "none" }}
              aria-labelledby="dLabel"
            >
              <li onClick={() => handleOpenModal()}>
                <span>As CSV</span>
              </li>
              <li onClick={() => handleOpenModal()}>
                <span>As Excel</span>
              </li>
              <li onClick={() => handleOpenModal()}>
                <span>As PDF</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="auditBody">
          <div className="auditLogHead auditLogGrid">
            <span></span>
            <h4>User Name</h4>
            <h4>User ID</h4>
            <h4>IP Address</h4>
            <h4>Activity</h4>
            <h4>Status</h4>
            <h4>Time Stamp</h4>
          </div>
          {auditLogDatas.map((auditLogData, index) => (
            <div key={index} className="auditLog auditLogGrid">
              <span></span>
              <h4>
                <img src={auditLogData.imageUrl} alt="" />
                {auditLogData.userName}
              </h4>
              <h4>{auditLogData.userId}</h4>
              <h4>{auditLogData.ipAddress}</h4>
              <h4>{auditLogData.activity}</h4>
              <h4
                style={{
                  fontWeight: "600",
                  color:
                    auditLogData.status === "success" ? "#23980E" : "#FF2020",
                }}
              >
                {auditLogData.status}
              </h4>
              <h4>{auditLogData.timeStamp}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuditLog;
