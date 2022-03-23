import React from "react";
import { Divider } from "antd";

import style from "./AdminUser.module.scss";

const AdminStepThree = ({ step1, step2 }) => {
  const [checked, setChecked] = React.useState(false);
  const { first_name, last_name, email, phone_number } = step1;
  const {
    event_creation,
    dashboard,
    analytics,
    account_management,
    subscription_events,
    campaign_management,
    resource_center,
  } = step2;
  return (
    <div id={style.admin_user_steps_three} className={style.admin_step}>
      <h1>Finishing up user role setup</h1>
      <p>Assigned user settings</p>
      <div className={style.step_three_user_details}>
        <p>User Details</p>
        <div className={style.user_name}>
          <p>First Name: {first_name}</p>
          <p>Last Name: {last_name}</p>
        </div>
        <p>Phone Number: {phone_number}</p>
        <p>Email Address: {email}</p>
      </div>
      <div className={style.user_permissions}>
        <p>User Permissions</p>
        <div className={style.admin_step_inputs}>
          <div className={style.admin_step_input}>
            <input type="checkbox" checked={event_creation} disabled />
            <label>Event Creation</label>
          </div>
          <div className={style.admin_step_input}>
            <input type="checkbox" checked={dashboard} disabled />
            <label>Dashboard</label>
          </div>
          <div className={style.admin_step_input}>
            <input type="checkbox" checked={analytics} disabled />
            {checked ? (
              <label>Generate and send login details to user via email</label>
            ) : (
              <label>Analytics</label>
            )}
          </div>
          <div className={style.admin_step_input}>
            <input type="checkbox" checked={account_management} disabled />
            {checked ? (
              <label>Require user to change password upon Login</label>
            ) : (
              <label>Account Management</label>
            )}
          </div>
          <div className={style.admin_step_input}>
            <input type="checkbox" checked={subscription_events} disabled />
            {checked ? (
              <label>Generate and send login details to user via email</label>
            ) : (
              <label>Subscription & Event</label>
            )}
          </div>
          <div className={style.admin_step_input}>
            <input type="checkbox" checked={campaign_management} disabled />
            {checked ? (
              <label>Require user to change password upon Login</label>
            ) : (
              <label>Campaign Management</label>
            )}
          </div>
          <div className={style.admin_step_input}>
            <input type="checkbox" checked={resource_center} disabled />
            {checked ? (
              <label>Generate and send login details to user via email</label>
            ) : (
              <label>Resource Center</label>
            )}
          </div>
        </div>
      </div>
      <Divider />
      <div className={style.admin_step_inputs}>
        <div className={style.admin_step_input}>
          <input type="checkbox" value="" />
          <label>Generate and send login details to user via email</label>
        </div>
        <div className={style.admin_step_input}>
          <input type="checkbox" value="" />
          <label>Require user to change password upon Login</label>
        </div>
      </div>
    </div>
  );
};

export default AdminStepThree;
