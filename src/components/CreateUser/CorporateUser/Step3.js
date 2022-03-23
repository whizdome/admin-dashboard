import React from "react";
import { Divider } from "antd";

// import style from "../AdminUser/AdminUser.module.scss";
import style from "./CorporateUser.module.scss";

const CorporateStepThree = ({ step1, step2 }) => {
  const [checked, setChecked] = React.useState(false);

  const { name, email, phone_number, street_address } = step1;
  const {
    plan_id,
    custom_attendee_limit,
    user_id,
    email_sender_id,
    sms_sender_id,
  } = step2;
  return (
    <div id={style.admin_user_steps_three} className={style.corporate_step}>
      <h1>Finishing up user role setup</h1>
      <p>Assigned user settings</p>
      <div className={style.step_three_user_details}>
        <p>User Details</p>
        <p>Company Name: {name}</p>
        <p>Company Address: {street_address}</p>

        <p>Phone Number: {phone_number}</p>
        <p>Email Address: {email}</p>
      </div>
      <div className={style.user_permissions}>
        <p>Subscription Plan</p>
        <div className={style.corporate_subs_plan}>
          <p>Event Type: {plan_id}</p>
          <p>Plan: Gold</p>
          <p>No of Attendees: {custom_attendee_limit}</p>
          <p>SMS ID: {sms_sender_id}</p>
          <p>Email ID: {email_sender_id}</p>
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
