import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  createAdminAccountAction,
  fetchRolesAction,
  assignRoleAction,
} from "../../redux/actions/adminAct";

import { BsCaretRightFill } from "react-icons/bs";
import { HiCheck } from "react-icons/hi";

import { Steps, Divider, Form } from "antd";
import "antd/dist/antd.css";

import style from "./AdminUser.module.scss";
import "../index.css";

const { Step } = Steps;
const { Item } = Form;

const NewAdminUser = ({ user }) => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [step1Data, setStep1Data] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  const dispatch = useDispatch();
  const rolesState = useSelector((state) => state.fetchRolesRes);
  const assignRoleState = useSelector((state) => state.assignRoleRes);
  const adminState = useSelector((state) => state.createAdminAccountRes);

  const [form] = Form.useForm();

  const handleStateChange = (e) => {
    setStep1Data({
      ...step1Data,
      [e.target.name]: e.target.value,
    });
  };
  const next = () => {
    if (
      form.getFieldsError().filter((item) => item.errors.length).length === 0
    ) {
      console.log(form.getFieldsValue());
      return setCurrent(current + 1);
    }
    console.log("current_next", current);
    // if(current === 0) {
    //   if(user === "admin") {
    //     dispatch(createAdminAccountAction(step1Data));
    //   } else if(user === "corporate") {
    //     dispatch(createCorporateAccountAction(step1Data));
    //   } else if(user === "individual") {
    //     dispatch(createIndividualAccountAction(step1Data));
    //   }
    // }
  };

  const prev = () => {
    setCurrent(current - 1);
    console.log("current", current);
  };

  const fetchRoles = async () => {
    setLoading(true);
    try {
      await dispatch(fetchRolesAction());
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    console.log("current", current);
    form.validateFields();
  }, []);

  const { first_name, last_name, email, phone_number } = step1Data;

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
            {current === 0 && (
              <Form form={form} layout="vertical" requiredMark={false}>
                <div
                  id={style.admin_user_steps_one}
                  className={style.admin_step}
                >
                  <h1>Setup basics for the User</h1>
                  <p>
                    Donec dapibus mauris id odio ornare tempus. Duis sit amet
                    accumsan justo, quis tempor ligula.
                  </p>

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
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name!",
                        },
                      ]}
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
                      rules={[
                        {
                          required: true,
                        },
                      ]}
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
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <input
                        type="text"
                        name="phone_number"
                        value={phone_number}
                        onChange={handleStateChange}
                      />
                    </Item>
                  </div>
                </div>
              </Form>
            )}
            <div className="steps-action">
              {current > 0 && (
                <button className={style.btn_back} onClick={() => prev()}>
                  Back
                </button>
              )}
              {current < 2 && (
                <button
                  onClick={() => next()}
                  btntitle="Next"
                  className={style.btn_next}
                >
                  Next
                  <BsCaretRightFill />
                </button>
              )}
              {current === 2 && (
                <button
                  onClick={() => console.log("create user")}
                  btntitle="Next"
                  className={style.btn_done}
                >
                  Create User
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
