import React from "react";
import { Divider } from "antd";

// import style from "../AdminUser/AdminUser.module.scss";
import style from "./CorporateUser.module.scss";

const CorporateStepThree = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div id={style.admin_user_steps_three} className={style.admin_step}>
      <h1>Finishing up user role setup</h1>
      <p>Assigned user settings</p>
      <div className={style.step_three_user_details}>
        <p>User Details</p>
        <p>Company Name: Africa Prudential Plc.</p>
        <p>Company Address: 220B, Palmgroove Bus Stop, Ikorodu Rd, Lagos</p>

        <p>Phone Number: 0800 00 0000</p>
        <p>Email Address: hello@africaprudential.com</p>
      </div>
      <div className={style.user_permissions}>
        <p>Subscription Plan</p>
        <div className={style.corporate_subs_plan}>
          <p>Event Type: AGM</p>
          <p>Plan: Gold</p>
          <p>No of Attendees: 20,000</p>
          <p>SMS ID: Apems</p>
          <p>Email ID: hello@apems.co</p>
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

export default CorporateStepThree;
