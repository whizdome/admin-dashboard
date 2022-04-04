import React, { useEffect, useState } from "react";

import {
  createAdminAccount,
  fetchRoles,
  assignRole,
} from "../../../redux/services/admin";
import Spinner from "../../Loader";

import { BsCaretRightFill } from "react-icons/bs";
import { HiCheck } from "react-icons/hi";

import { Steps, Divider, Form, Radio, Checkbox } from "antd";
import "antd/dist/antd.css";

import style from "./AdminUser.module.scss";
import "../index.css";

const { Step } = Steps;
const { Item } = Form;

const NewAdminUser = ({ closeModal }) => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [step1Data, setStep1Data] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });
  const [allRoles, setAllRoles] = useState([]);
  const [role, setRole] = useState([]);
  const [errors, setErrors] = useState([]);
  const [step3Data, setStep3Data] = useState([]);

  const [form] = Form.useForm();

  const handleStateChange = (e) => {
    setStep1Data({
      ...step1Data,
      [e.target.name]: e.target.value,
    });
    form.validateFields();
    form.getFieldsError();
  };

  const getRoles = async () => {
    setLoading(true);
    const res = await fetchRoles();
    console.log(res);
    if (res) setAllRoles(res);
    if (res.errors) setErrors(res.errors);
    setLoading(false);
  };

  const createUser = async () => {
    setLoading(true);

    const res = await createAdminAccount(step1Data);
    if (res.data) {
      setStep1Data(res.data);
      getRoles();
      setCurrent(1);
      setErrors([]);
    }
    if (res.errors) setErrors(res.errors);

    setLoading(false);
  };

  const step2Data = {
    user_id: step1Data.id,
    role: role,
  };

  const changeRole = async () => {
    setLoading(true);
    const res = await assignRole(step2Data);
    if (res.data) {
      setRole(res.data.role);
      setStep3Data(res.data);
      setCurrent(2);
    }
    console.log("catch-err", res);
    setLoading(false);
  };

  const next = () => {
    if (
      form.getFieldsError().filter((item) => item.errors.length).length === 0
    ) {
      console.log("current_next", current);
      if (current === 0) {
        createUser();
      } else if (current === 1) {
        changeRole();
      }
    }
    console.log(
      "values",
      form.getFieldsValue(),
      form.getFieldsError().filter((item) => item.errors.length).length > 0
    );
  };

  useEffect(() => {
    form.validateFields();
    getRoles();
  }, []);

  const { first_name, last_name, email, phone_number } = step1Data;
  const { name, roles } = step3Data;

  return (
    <div>
      <h1 id={style.add_new_user}>Add New User</h1>
      <div className={style.steps}>
        <div className={style.user_step}>
          <Steps
            current={current}
            direction="vertical"
            size="small"
            responsive
            onChange={() => console.log("changed")}
          >
            <Step title="User Basics" icon={<HiCheck />} />
            <Step title="User Role" icon={<HiCheck />} />
            <Step title="Finish Setup" icon={<HiCheck />} />
          </Steps>

          <Divider
            type="vertical"
            style={{
              height: "40rem",
              margin: "0 8rem",
              borderLeft: "1px solid #DDDDDD",
            }}
          />
          <div className={style.form_container}>
            {current === 1 && (
              <div id={style.admin_user_steps_one} className={style.admin_step}>
                <h1>Setup basics for the User</h1>
                <p>
                  Donec dapibus mauris id odio ornare tempus. Duis sit amet
                  accumsan justo, quis tempor ligula.
                </p>
                <Form form={form} layout="vertical">
                  <div className={style.admin_step_inputs}>
                    <Item
                      name="first_name"
                      label="First Name"
                      className={style.admin_step_input}
                    >
                      <input
                        type="text"
                        name="first_name"
                        value={first_name}
                        onChange={handleStateChange}
                      />
                    </Item>
                    <Item
                      name="last_name"
                      label="Last Name"
                      className={style.admin_step_input}
                    >
                      <input
                        type="text"
                        name="last_name"
                        value={last_name}
                        onChange={handleStateChange}
                      />
                    </Item>
                    <Item
                      name="email"
                      label="Email Address"
                      className={style.admin_step_input}
                    >
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleStateChange}
                      />
                    </Item>
                    <Item
                      name="phone_number"
                      label="Phone Number"
                      className={style.admin_step_input}
                    >
                      <input
                        type="number"
                        name="phone_number"
                        value={phone_number}
                        onChange={handleStateChange}
                      />
                    </Item>
                  </div>
                </Form>
              </div>
            )}

            {current === 0 && (
              <div id={style.admin_user_steps_two} className={style.admin_step}>
                <h1>User Management</h1>
                <p>Setup user Permission</p>
                <Form form={form}>
                  <div className={style.admin_step_inputs}>
                    <Item name="role">
                      <Checkbox.Group
                        key={name}
                        value={role}
                        className={style.admin_step_input}
                        options={allRoles}
                        onChange={(e) => {
                          setRole(e);
                          form.setFieldsValue({ role: e });
                        }}
                      ></Checkbox.Group>
                    </Item>
                  </div>
                </Form>
              </div>
            )}

            {current === 2 && (
              <div
                id={style.admin_user_steps_three}
                className={style.admin_step}
              >
                <h1>Finishing up user role setup</h1>
                <p>Assigned user settings</p>
                <div className={style.step_three_user_details}>
                  <p>User Details</p>
                  <p>Name: {name}</p>
                  <p>Phone Number: {phone_number}</p>
                  <p>Email Address: {email}</p>
                </div>
                <div className={style.user_permissions}>
                  <p>User Permissions</p>
                  <div className={style.admin_step_inputs}>
                    <div className={style.admin_step_input}>
                      <input type="checkbox" checked disabled />
                      <label>{roles[0].name}</label>
                    </div>
                  </div>
                </div>
                <Divider />
                <div className={style.notes}>
                  <p>Please note that:</p>
                  <ul>
                    <li>
                      <p>
                        Login details will be generated and sent to user via
                        email
                      </p>
                    </li>
                    <li>
                      <p>User is required to change password upon Login</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div className="steps-action">
              {loading ? (
                <Spinner visible={loading} />
              ) : (
                errors &&
                Object.values(errors)
                  .flat()
                  .map((err) => (
                    <p key={err} className={style.err}>
                      {err}
                    </p>
                  ))
              )}
              {current < 2 && (
                <button
                  onClick={() => next()}
                  btntitle="Next"
                  className={style.btn_next}
                  disabled={
                    form.getFieldsError().filter((item) => item.errors.length)
                      .length > 0
                  }
                >
                  {current === 0 ? "Create User" : "Assign Role"}
                  <BsCaretRightFill />
                </button>
              )}
              {current === 2 && (
                <button
                  onClick={() => closeModal()}
                  btntitle="Next"
                  className={style.btn_done}
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAdminUser;
