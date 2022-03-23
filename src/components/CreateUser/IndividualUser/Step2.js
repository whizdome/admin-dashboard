import React, { useState, useEffect, useRef } from "react";

import style from "../CorporateUser/CorporateUser.module.scss";

const eventPlanOptions = [];
const emailIdOptions = [];
const smsIdOptions = [];

const IndividualStepTwo = ({ parentCallback }) => {
  const [state, setState] = useState({
    plan_id: "",
    custom_attendee_limit: 50000,
    user_id: "",
    email_sender_id: "",
    sms_sender_id: "",
  });

  const handleStateChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const stateRef = useRef(null);
  stateRef.current = state;

  useEffect(() => {
    return () => parentCallback(stateRef.current);
  }, []);

  const {
    plan_id,
    custom_attendee_limit,
    user_id,
    email_sender_id,
    sms_sender_id,
  } = state;
  return (
    <div id={style.corporate_user_steps_two} className={style.corporate_step}>
      <h1>Subscription Plan</h1>
      <p>Setup user access</p>
      <h1>Event Type Selection</h1>
      <div value={user_id} onChange={handleStateChange}>
        <div className={style.event_radio}>
          <input
            type="radio"
            name="user_id"
            value="AGM"
            checked={user_id === "AGM"}
          />
          <label>AGM</label>
        </div>
        <div className={style.event_radio}>
          <input
            type="radio"
            name="user_id"
            value="Corporate Events"
            checked={user_id === "Corporate Events"}
          />
          <label>Corporate Event</label>
        </div>
      </div>
      <div className={style.corporate_step_inputs}>
        <div>
          <div className={style.corporate_step_input}>
            <label>Event Plan</label>
            <select name="plan_id" value={plan_id} onChange={handleStateChange}>
              <option>Select Plan</option>
              {eventPlanOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
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
            <select
              name="email_sender_id"
              value={email_sender_id}
              onChange={handleStateChange}
            >
              <option>Select Campaign</option>
              {emailIdOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>

            <select
              name="sms_sender_id"
              value={sms_sender_id}
              onChange={handleStateChange}
            >
              <option>Select Campaign</option>
              {smsIdOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualStepTwo;
