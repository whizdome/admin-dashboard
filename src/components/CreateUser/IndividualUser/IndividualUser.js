import React, { useEffect, useState } from "react";

import {
  createIndividualAccount,
  fetchPlans,
  createSubscription,
} from "../../../redux/services/admin";
import Spinner from "../../Loader";

import { BsCaretRightFill } from "react-icons/bs";
import { HiCheck } from "react-icons/hi";

import { Steps, Divider, Form, Radio, Checkbox } from "antd";
import "antd/dist/antd.css";

import style from "./IndividualUser.module.scss";
import "../index.css";

const { Step } = Steps;
const { Item } = Form;

const NewIndividualUser = ({ closeModal }) => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [step1Data, setStep1Data] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });
  const [eventType, setEventType] = useState("AGM");
  const [allPlans, setAllPlans] = useState([]);
  const [plan, setPlan] = useState("");
  const [attendees, setAttendees] = useState("");
  const [planId, setPlanId] = useState("");
  const [isGold, setIsGold] = useState(false);
  const [gold, setGold] = useState(false);
  const [errors, setErrors] = useState([]);
  const [step3Data, setStep3Data] = useState([]);

  const email_sender_id = "hello@apems.co";
  const sms_sender_id = "APEMS";

  const [form] = Form.useForm();

  const handleStateChange = (e) => {
    setStep1Data({
      ...step1Data,
      [e.target.name]: e.target.value,
    });
    form.validateFields();
    form.getFieldsError();
  };

  const getPlans = async () => {
    setLoading(true);
    const res = await fetchPlans(eventType);
    console.log(res);
    if (res) setAllPlans(res);
    if (res.errors) setErrors(res.errors);
    setLoading(false);
  };

  const createUser = async () => {
    setLoading(true);

    const res = await createIndividualAccount(step1Data);
    if (res.data) {
      setStep1Data(res.data);
      getPlans();
      setCurrent(1);
      setErrors([]);
    }
    if (res.errors) {
      setErrors(res.errors);

      console.log("inside", errors);
    }
    console.log(res, errors);
    setLoading(false);
  };

  const step2Data = {
    plan_id: !isGold && planId,
    custom_attendee_limit: attendees,
    user_id: step1Data.id,
    email_sender_id,
    sms_sender_id,
  };

  const addSubscription = async () => {
    setLoading(true);
    const res = await createSubscription(step2Data);
    if (res.data) {
      setPlan(res.data.role);
      setStep3Data(res.data);
      setCurrent(2);
    }
    console.log("catch-err", res);
    if (res.errors) setErrors(res.errors);
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
        addSubscription();
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
    // getPlans();
    console.log("current", current);
  }, []);

  const { first_name, last_name, email, phone_number } = step1Data;
  const { custom_attendee_limit, type } = step3Data;

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
            <Step title="Subscription Plan" icon={<HiCheck />} />
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
              <div id={style.admin_user_steps_one} className={style.admin_step}>
                <h1>Setup basics for the User</h1>
                <p>
                  Donec dapibus mauris id odio ornare tempus. Duis sit amet
                  accumsan justo, quis tempor ligula.
                </p>
                <Form form={form} layout="vertical" requiredMark={false}>
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
                          message: "Please input a valid email!",
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
                          //   length: 11,
                          message: "Please input a valid phone number",
                        },
                      ]}
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

            {current === 1 && (
              <div
                id={style.corporate_user_steps_two}
                className={style.corporate_step}
              >
                <h1>Subscription Plan</h1>
                <p>Setup user access</p>
                <h1>Event Type Selection</h1>
                <Form form={form} layout="vertical" requiredMark={false}>
                  <div className={style.admin_step_inputs}>
                    <Item
                      name="event_type"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      style={{ marginBottom: 0 }}
                    >
                      <Radio.Group
                        value={eventType}
                        className={style.corporate_step_input}
                        onChange={(e) => {
                          setEventType(e.target.value);
                          form.setFieldsValue({ event_type: e.target.value });
                          getPlans();
                        }}
                      >
                        <Radio
                          name="event_type"
                          value="AGM"
                          checked={eventType === "AGM"}
                        >
                          AGM
                        </Radio>

                        <Radio
                          name="event_type"
                          value="corporate"
                          checked={eventType === "corporate"}
                        >
                          Corporate
                        </Radio>
                      </Radio.Group>
                    </Item>

                    <div className={style.plan_step}>
                      <Item
                        label="Event Plan"
                        name="plan_id"
                        className={style.corporate_step_input}
                      >
                        <select
                          name="plan_id"
                          value={planId}
                          onChange={(e) => {
                            setPlanId(e.target.value);
                            form.setFieldsValue({ plan_id: e.target.value });
                            setAttendees(
                              allPlans?.find(
                                (item) => item.id === e.target.value
                              ).video_meeting_attendees
                            );
                          }}
                          disabled={isGold}
                        >
                          <option>Select Plan</option>
                          {allPlans.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </Item>
                      <Item
                        name="gold"
                        className={style.checkbox_input}
                        style={{ margin: "3rem 0 0" }}
                      >
                        <Checkbox
                          name="gold"
                          value={gold}
                          onChange={(e) => {
                            setIsGold(!isGold);
                            form.setFieldsValue({ gold: !isGold });
                            setGold(isGold ? e.target.value : "");
                          }}
                        >
                          Gold
                        </Checkbox>
                      </Item>
                      <Item
                        name="custom_attendee_limit"
                        className={style.corporate_step_input}
                      >
                        <input
                          type="number"
                          name="custom_attendee_limit"
                          value={attendees}
                          onChange={(e) => {
                            setAttendees(e.target.value);
                            form.setFieldsValue({
                              custom_attendee_limit: e.target.value,
                            });
                          }}
                          placeholder="No. Of Attendees"
                          disabled={isGold !== true}
                        />
                        <p style={{ display: "none" }}>{attendees}</p>
                      </Item>
                    </div>
                    <Item
                      name="email_sender_id"
                      label="Campaign"
                      id={style.campaign_email}
                      className={style.corporate_step_input}
                    >
                      <select
                        name="email_sender_id"
                        value={email_sender_id}
                        // onChange={handleStateChange}
                      >
                        {/* <option value="">Select Campaign</option> */}
                        <option value={email_sender_id}>
                          {email_sender_id}
                        </option>
                        {/* {emailIdOptions.map((option) => (
                                    <option key={option.id} value={option.id}>
                                    {option.name}
                                    </option>
                                ))} */}
                      </select>
                    </Item>
                    <Item
                      name="sms_sender_id"
                      id={style.campaign_sms}
                      className={style.corporate_step_input}
                    >
                      <select name="sms_sender_id" value={sms_sender_id}>
                        {/* <option value="">Select Campaign</option> */}
                        <option value={sms_sender_id}>{sms_sender_id}</option>
                        {/* {smsIdOptions.map((option) => (
                                    <option key={option.id} value={option.id}>
                                    {option.name}
                                    </option>
                                ))} */}
                      </select>
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
                  <p>
                    Name: {first_name}
                    {last_name}
                  </p>
                  <p>Phone Number: {phone_number}</p>
                  <p>Email Address: {email}</p>
                </div>
                <div className={style.user_permissions}>
                  <p>Subscription Plan</p>
                  <div className={style.corporate_subs_plan}>
                    <p>Event Type: {eventType}</p>
                    <p>
                      Plan:{" "}
                      {form.getFieldValue("gold") === true
                        ? "Gold"
                        : allPlans.find((item) => item.id === planId).name}
                    </p>
                    <p>No of Attendees: {custom_attendee_limit}</p>
                    <p>SMS ID: {sms_sender_id}</p>
                    <p>Email ID: {email_sender_id}</p>
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
                  .map((err) => <p className={style.err}>{err}</p>)
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
                  onClick={() => {
                    closeModal();
                    setCurrent(0);
                    form.resetFields();
                    form.setErrors({});
                    return setCurrent(0);
                  }}
                  btntitle="Finish"
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

export default NewIndividualUser;
