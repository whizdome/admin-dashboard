import React from "react";
import { Divider } from "antd";

import style from "./AdminUser.module.scss";

const AdminStepThree = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div id={style.admin_user_steps_three} className={style.admin_step}>
      <h1>Finishing up user role setup</h1>
      <p>Assigned user settings</p>
      <div className={style.step_three_user_details}>
        <p>User Details</p>
        <div className={style.user_name}>
          <p>First Name: Johnny</p>
          <p>Last Name: Jackson</p>
        </div>
        <p>Phone Number: 0800 00 0000</p>
        <p>Email Address: seun@africaprudential.com</p>
      </div>
      <div className={style.user_permissions}>
        <p>User Permissions</p>
        <div className={style.admin_step_inputs}>
          <div className={style.admin_step_input}>
            <input type="checkbox" value="" />
            <label>Event Creation</label>
          </div>
          <div className={style.admin_step_input}>
            <input type="checkbox" value="" />
            <label>Dashboard</label>
          </div>
          <div className={style.admin_step_input}>
            <input type="checkbox" value="" />
            {checked ? (
              <label>Generate and send login details to user via email</label>
            ) : (
              <label>Analytics</label>
            )}
          </div>
          <div className={style.admin_step_input}>
            <input type="checkbox" value="" />
            {checked ? (
              <label>Require user to change password upon Login</label>
            ) : (
              <label>Account Management</label>
            )}
          </div>
          <div className={style.admin_step_input}>
            <input type="checkbox" value="" />
            {checked ? (
              <label>Generate and send login details to user via email</label>
            ) : (
              <label>Subscription & Event</label>
            )}
          </div>
          <div className={style.admin_step_input}>
            <input type="checkbox" value="" />
            {checked ? (
              <label>Require user to change password upon Login</label>
            ) : (
              <label>Campaign Management</label>
            )}
          </div>
          <div className={style.admin_step_input}>
            <input type="checkbox" value="" />
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
