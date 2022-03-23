import React, { useState, useRef, useEffect } from "react";

import style from "./AdminUser.module.scss";

const AdminStepOne = ({ parentCallback }) => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
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

  const { first_name, last_name, email, phone_number } = state;

  return (
    <div id={style.admin_user_steps_one} className={style.admin_step}>
      <h1>Setup basics for the User</h1>
      <p>
        Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan
        justo, quis tempor ligula.
      </p>
      <div className={style.admin_step_inputs}>
        <div className={style.admin_step_input}>
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={handleStateChange}
          />
        </div>
        <div className={style.admin_step_input}>
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={handleStateChange}
          />
        </div>
        <div className={style.admin_step_input}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleStateChange}
          />
        </div>
        <div className={style.admin_step_input}>
          <label>Phone Number</label>
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

export default AdminStepOne;
