import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AuditLog.scss";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { toast } from "react-toastify";
import {
  fetchAuditLogs,
  downloadAuditLogs,
} from "../../../redux/services/admin";
import Spinner from "../../../components/Loader";
import noProfile from "../../../assets/images/no_profile.jpg";

const AuditLog = ({ auditLogDatas, isAuditLog, isAllAuditLog, userId }) => {
  const [showBubble, setShowBubble] = useState(false);
  const [auditLogState, setAuditLogState] = useState();
  const [loading, setLoading] = useState(false);
  const [pdfDownloading, setPdfDownloading] = useState(false);

  const [error, setError] = useState(false);
  const handleOpenModal = (type) => {
    setShowBubble(false);
  };

  const fetchAudit = async () => {
    setLoading(true);
    const res = await fetchAuditLogs();
    if (isAllAuditLog) {
      setAuditLogState(res?.data.data || []);
    } else {
      const singleLog = res?.data.data.filter(
        (data, index) => data === res?.data.data.id
      );
      setAuditLogState(singleLog);
    }
    if (!res?.data) {
      setLoading(false);
      setError(true);
    }
    setLoading(false);
  };

  const downloadPdf = async () => {
    setPdfDownloading(true);
    const result = await downloadAuditLogs(userId);
    const url = window.URL.createObjectURL(new Blob([result.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Audit-Log.pdf");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    setPdfDownloading(false);
    handleOpenModal();
  };

  useEffect(() => {
    fetchAudit();
  }, [isAuditLog]);

  const csvHeader = [
    { label: "User Name", key: "username" },
    { label: "Email", key: "email" },
    { label: "Ip Address", key: "ip_address" },
    { label: " Activity", key: "activity" },
    { label: "Status", key: "status" },
    { label: "Time Stamp", key: "updated_at" },
  ];
  const csvFileName = "auditLog.csv";

  const formatDate = (timeStamp) => {
    const date = new Date(timeStamp);
    const hours = date.getHours() || "";
    const minutes = date.getMinutes() || "";
    const seconds = date.getSeconds() || "";
    const day = date.getDate() || "";
    const month = date.getMonth() || "";
    const year = date.getFullYear() || "";

    return `${hours}:${minutes}:${seconds}, ${day}/${month + 1}/ ${year}`;
  };

  return (
    <div className="auditLogs">
      <div className="auditWrapper">
        <div className="head">
          <div>
            <h3>Audit Log</h3>
          </div>
          <div
            className="dropdown_bubble"
            style={{
              pointerEvents:
                !auditLogState || auditLogState.length < 1 ? "none" : "visible",
            }}
          >
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
              {auditLogState && (
                <li onClick={() => handleOpenModal()}>
                  <CSVLink
                    headers={csvHeader}
                    data={auditLogState}
                    filename={csvFileName}
                    target="_blank"
                  >
                    As CSV
                  </CSVLink>
                </li>
              )}
              <li
                onClick={() => {
                  downloadPdf();
                }}
              >
                <span>{pdfDownloading ? "Downloading ..." : "As PDF"}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="auditBody">
          <div className="auditLogHead auditLogGrid">
            <div>
              <span></span>
            </div>
            <h4>SN</h4>
            <h4>User Name</h4>
            <h4>Email</h4>
            <h4>IP Address</h4>
            <h4>Activity</h4>
            <h4>Status</h4>
            <h4>Time Stamp</h4>
          </div>
          {loading ? (
            <Spinner visible={loading} />
          ) : auditLogState ? (
            auditLogState?.map((data, index) => (
              <div key={index} className="auditLog auditLogGrid">
                <div>
                  <span></span>
                </div>
                <h4>{index + 1}</h4>
                <h4>
                  <img src={data?.profile_picture_url || noProfile} alt="" />
                  {data?.username || "- -"}
                </h4>
                <h4>{data?.email || "--"}</h4>
                <h4>{data?.ip_address || "--"}</h4>
                <h4>{data?.activity || "--"}</h4>
                <h4
                  style={{
                    fontWeight: "600",
                    color: data.status === "success" ? "#23980E" : "#FF2020",
                  }}
                >
                  {data?.status || "--"}
                </h4>
                <h4>{formatDate(data?.updated_at) || "--"}</h4>
              </div>
            ))
          ) : (
            ""
          )}
          {!loading && !error && auditLogState?.length < 1 && (
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <h3> No Available Audit Log</h3>
            </div>
          )}
          {!loading && error && (
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <h3 style={{ color: "red" }}>Error... Please reload the page</h3>
            </div>
          )}
        </div>
      </div>
      {/* <AuditPdf /> */}
    </div>
  );
};

export default AuditLog;
