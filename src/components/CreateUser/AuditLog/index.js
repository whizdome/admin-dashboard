import React from "react";
import "./AuditLog.scss";

const AuditLog = () => {
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
            <h3>AuditLog</h3>
          </div>
          <div>Export Audit Log</div>
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
                    fontWeight:"600",
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
