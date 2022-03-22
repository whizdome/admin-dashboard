import React from "react";

import style from "../CorporateUser/CorporateUser.module.scss";

const IndividualStepTwo = () => {
  return (
    <div id={style.corporate_user_steps_two} className={style.corporate_step}>
      <h1>Subscription Plan</h1>
      <p>Setup user access</p>
      <h1>Event Type Selection</h1>
      <div className={style.event_radio}>
        <input type="radio" />
        <label>AGM</label>
      </div>
      <div className={style.event_radio}>
        <input type="radio" />
        <label>Corporate Event</label>
      </div>
      <div className={style.corporate_step_inputs}>
        <div>
          <div className={style.corporate_step_input}>
            <label>Event Plan</label>
            <input type="text" value="" />
          </div>
          <div className={style.corporate_step_input}>
            <label>Gold</label>
            <input type="checkbox" value="" />
          </div>
          <div className={style.corporate_step_input}>
            <label></label>
            <input type="email" value="" />
          </div>
        </div>
        <div>
          <div className={style.corporate_step_input}>
            <label>Campaign</label>
            <select>
              <option value="1">Email ID</option>
              <option value="2">Option 1</option>
              <option value="3">Option 2</option>
            </select>
            <select>
              <option value="1">SMS ID</option>
              <option value="2">Option 1</option>
              <option value="3">Option 2</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualStepTwo;
