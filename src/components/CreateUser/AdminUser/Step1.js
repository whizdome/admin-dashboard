import React, { useState, useRef, useEffect } from "react";
import {Form} from "antd";

import style from "./AdminUser.module.scss";

const {Item} = Form

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
    console.log(form.getFieldsValue(), form.getFieldsError());
  };

  const stateRef = useRef(null);
  stateRef.current = state;

  const [form] = Form.useForm();

  useEffect(() => {
    return () => {
     form.validateFields();
     console.log(form.getFieldsValue());
      parentCallback(stateRef.current);
    };
  }, []);

  const { first_name, last_name, email, phone_number } = state;

  return (
    <div id={style.admin_user_steps_one} className={style.admin_step}>
      <h1>Setup basics for the User</h1>
      <p>
        Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan
        justo, quis tempor ligula.
      </p>
      <Form form={form}
      >
      <div className={style.admin_step_inputs}>
          <Item
            name="first_name"
            label="First Name"
            className={style.admin_step_input}
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
        {/* <div label="First Name" className={style.admin_step_input}> */}
          {/* <label>First Name</label> */}
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={handleStateChange}
          />
        {/* </div> */}
        </Item>
        <Item
            name="last_name"
            label="Last Name"
            className={style.admin_step_input}
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
        {/* <div className={style.admin_step_input}>
          <label>Last Name</label> */}
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={handleStateChange}
          />
        {/* </div> */}
        </Item>
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
      </Form>
    </div>
  );
};

export default AdminStepOne;
