import React, { useState } from "react";

import style from "../AdminUser/AdminUser.module.scss";

const CorporateStepOne = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone_number: "",
    street_address: "",
  });

  const handleStateChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const { name, email, phone_number, street_address } = state;
  return (
    <div id={style.admin_user_steps_one} className={style.admin_step}>
      <h1>Setup basics for the User</h1>
      <p>
        Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan
        justo, quis tempor ligula.
      </p>
      <div className={style.admin_step_inputs}>
        <div className={style.admin_step_input}>
          <label>Company Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleStateChange}
          />
        </div>
        <div className={style.admin_step_input}>
          <label>Corporate Address</label>
          <input
            type="text"
            name="street_address"
            value={street_address}
            onChange={handleStateChange}
          />
        </div>
        <div className={style.admin_step_input}>
          <label>Company Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleStateChange}
          />
        </div>
        <div className={style.admin_step_input}>
          <label>Company Phone Number</label>
          <input
            type="text"
            name="phone_number"
            value={phone_number}
            onChange={handleStateChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CorporateStepOne;
