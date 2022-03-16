import React from "react";

import PrivateLayout from "../../../components/Layout/Private/PrivateLayout";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <PrivateLayout>
      <div className="dashboard">
        <h1>Dashboard</h1>
      </div>
    </PrivateLayout>
  );
};

export default Dashboard;
