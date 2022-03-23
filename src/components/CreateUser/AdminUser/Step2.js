import React, { useState, useEffect, useRef } from "react";

import style from "./AdminUser.module.scss";

const AdminStepTwo = ({ parentCallback }) => {
  const [event_creation, setEventCreation] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [account_management, setAccountManagement] = useState(false);
  const [subscription_events, setSubscriptionEvents] = useState(false);
  const [campaign_management, setCampaignManagement] = useState(false);
  const [resource_center, setResourceCenter] = useState(false);

  const state = {
    event_creation,
    dashboard,
    analytics,
    account_management,
    subscription_events,
    campaign_management,
    resource_center,
  };

  const stateRef = useRef(null);
  stateRef.current = state;

  useEffect(() => {
    return () => parentCallback(stateRef.current);
  }, []);

  return (
    <div id={style.admin_user_steps_two} className={style.admin_step}>
      <h1>User Management</h1>
      <p>Setup user Permission</p>
      <div className={style.admin_step_inputs}>
        <div className={style.admin_step_input}>
          <input
            type="checkbox"
            name="event_creation"
            checked={event_creation}
            onChange={() => setEventCreation(!event_creation)}
          />
          <label>Event Creation</label>
        </div>
        <div className={style.admin_step_input}>
          <input
            type="checkbox"
            name="dashboard"
            checked={dashboard}
            onChange={() => setDashboard(!dashboard)}
          />
          <label>Dashboard</label>
        </div>
        <div className={style.admin_step_input}>
          <input
            type="checkbox"
            name="analytics"
            checked={analytics}
            onChange={() => setAnalytics(!analytics)}
          />
          {analytics ? (
            <label>Generate and send login details to user via email</label>
          ) : (
            <label>Analytics</label>
          )}
        </div>
        <div className={style.admin_step_input}>
          <input
            type="checkbox"
            name="account_management"
            checked={account_management}
            onChange={() => setAccountManagement(!account_management)}
          />
          {account_management ? (
            <label>Require user to change password upon Login</label>
          ) : (
            <label>Account Management</label>
          )}
        </div>
        <div className={style.admin_step_input}>
          <input
            type="checkbox"
            name="subscription_events"
            checked={subscription_events}
            onChange={() => setSubscriptionEvents(!subscription_events)}
          />
          {subscription_events ? (
            <label>Generate and send login details to user via email</label>
          ) : (
            <label>Subscription & Event</label>
          )}
        </div>
        <div className={style.admin_step_input}>
          <input
            type="checkbox"
            name="campaign_management"
            checked={campaign_management}
            onChange={() => setCampaignManagement(!campaign_management)}
          />
          {campaign_management ? (
            <label>Require user to change password upon Login</label>
          ) : (
            <label>Campaign Management</label>
          )}
        </div>
        <div className={style.admin_step_input}>
          <input
            type="checkbox"
            name="resource_center"
            checked={resource_center}
            onChange={() => setResourceCenter(!resource_center)}
          />
          {resource_center ? (
            <label>Generate and send login details to user via email</label>
          ) : (
            <label>Resource Center</label>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminStepTwo;
