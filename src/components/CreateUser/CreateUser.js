import React, { useState } from "react";
import AdminStepOne from "./AdminUser/Step1";
import AdminStepTwo from "./AdminUser/Step2";
import AdminStepThree from "./AdminUser/Step3";

import CorporateStepOne from "./CorporateUser/Step1";
import CorporateStepTwo from "./CorporateUser/Step2";
import CorporateStepThree from "./CorporateUser/Step3";

import IndividualStepOne from "./IndividualUser/Step1";
import IndividualStepTwo from "./IndividualUser/Step2";
import IndividualStepThree from "./IndividualUser/Step3";

import { BsCaretRightFill } from "react-icons/bs";
import { HiCheck } from "react-icons/hi";

import { Steps, Divider } from "antd";
import "antd/dist/antd.css";

import "./index.css";
import style from "./CreateUser.module.scss";

const { Step } = Steps;

const AdminSteps = [
  {
    title: "User Basics",
    content: <AdminStepOne />,
  },
  {
    title: "User Role",
    content: <AdminStepTwo />,
  },
  {
    title: "Finish Setup",
    content: <AdminStepThree />,
  },
];

const CorporateSteps = [
  {
    title: "User Basics",
    content: <CorporateStepOne />,
  },
  {
    title: "Subscription",
    content: <CorporateStepTwo />,
  },
  {
    title: "Finish Setup",
    content: <CorporateStepThree />,
  },
];

const IndividualSteps = [
  {
    title: "User Basics",
    content: <IndividualStepOne />,
  },
  {
    title: "Subscription",
    content: <IndividualStepTwo />,
  },
  {
    title: "Finish Setup",
    content: <IndividualStepThree />,
  },
];

const NewUser = ({ user }) => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const getCurrentUser = (userType) => {
    console.log("userType", userType);
    switch (userType) {
      case "admin":
        return AdminSteps;
      case "corporate":
        return CorporateSteps;
      case "individual":
        return IndividualSteps;
      default:
        return;
    }
  };

  return (
    <div>
      <h1 id={style.add_new_user}>Add New User</h1>
      <div className={style.steps}>
        <div className={style.user_step}>
          <Steps current={current} direction="vertical" size="small">
            {getCurrentUser(user).map((item) => (
              <Step key={item.title} title={item.title} icon={<HiCheck />} />
            ))}
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
            {/* {AdminSteps[current].content} */}
            {getCurrentUser(user)[current].content}
            <div className="steps-action">
              {current > 0 && (
                <button className={style.btn_back} onClick={() => prev()}>
                  Back
                </button>
              )}
              {current < AdminSteps.length - 1 && (
                <button
                  onClick={() => next()}
                  btntitle="Next"
                  className={style.btn_next}
                >
                  Next
                  <BsCaretRightFill />
                </button>
              )}
              {current === AdminSteps.length - 1 && (
                <button
                  onClick={() => console.log("clicked")}
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

export default NewUser;
