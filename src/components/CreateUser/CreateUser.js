import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import AdminStepOne from "./AdminUser/Step1";
import AdminStepTwo from "./AdminUser/Step2";
import AdminStepThree from "./AdminUser/Step3";

import CorporateStepOne from "./CorporateUser/Step1";
import CorporateStepTwo from "./CorporateUser/Step2";
import CorporateStepThree from "./CorporateUser/Step3";

import IndividualStepOne from "./IndividualUser/Step1";
import IndividualStepTwo from "./IndividualUser/Step2";
import IndividualStepThree from "./IndividualUser/Step3";

import {
  createIndividualAccountAction,
  createCorporateAccountAction,
  createAdminAccountAction,
} from "../../redux/actions/adminAct";

import { BsCaretRightFill } from "react-icons/bs";
import { HiCheck } from "react-icons/hi";

import { Steps, Divider } from "antd";
import "antd/dist/antd.css";

import "./index.css";
import style from "./CreateUser.module.scss";

const { Step } = Steps;

const NewUser = ({ user }) => {
  const [current, setCurrent] = React.useState(0);
  const [step1Data, setStep1Data] = useState({});
  const [step2Data, setStep2Data] = useState({});

  const AdminSteps = [
    {
      title: "User Basics",
      content: (
        <AdminStepOne parentCallback={(childData) => setStep1Data(childData)} />
      ),
    },
    {
      title: "User Role",
      content: (
        <AdminStepTwo parentCallback={(childData) => setStep2Data(childData)} />
      ),
    },
    {
      title: "Finish Setup",
      content: <AdminStepThree step1={step1Data} step2={step2Data} />,
    },
  ];

  const CorporateSteps = [
    {
      title: "User Basics",
      content: (
        <CorporateStepOne
          parentCallback={(childData) => setStep1Data(childData)}
        />
      ),
    },
    {
      title: "Subscription",
      content: (
        <CorporateStepTwo
          parentCallback={(childData) => setStep2Data(childData)}
        />
      ),
    },
    {
      title: "Finish Setup",
      content: <CorporateStepThree />,
    },
  ];

  const IndividualSteps = [
    {
      title: "User Basics",
      content: (
        <IndividualStepOne
          parentCallback={(childData) => setStep1Data(childData)}
        />
      ),
    },
    {
      title: "Subscription",
      content: (
        <IndividualStepTwo
          parentCallback={(childData) => setStep2Data(childData)}
        />
      ),
    },
    {
      title: "Finish Setup",
      content: <IndividualStepThree />,
    },
  ];

  const getCurrentUser = (userType) => {
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

  const next = () => {
    console.log("current", step1Data);
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  let action;
  let newUser;

  const dispatch = useDispatch();
  const individualRes = useSelector(
    (state) => state.createIndividualAccountRes
  );
  const corporateRes = useSelector((state) => state.createCorporateAccountRes);
  const adminRes = useSelector((state) => state.createAdminAccountRes);

  switch (user) {
    case "admin":
      action = createAdminAccountAction(step1Data);
      newUser = adminRes;
      break;
    case "corporate":
      action = createCorporateAccountAction(step1Data);
      newUser = corporateRes;
      break;
    case "individual":
      action = createIndividualAccountAction(step1Data);
      newUser = individualRes;
      break;
    default:
      break;
  }

  const createUser = () => {
    try {
      dispatch(action);
      console.log("new user", newUser);
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    if (newUser?.status === 200) {
      toast.success("User Created Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (newUser?.status === 400 || newUser?.status === 500) {
      toast.error("User Creation Failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [newUser]);

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
            {getCurrentUser(user)[current].content}
            <div className="steps-action">
              {current > 0 && (
                <button className={style.btn_back} onClick={() => prev()}>
                  Back
                </button>
              )}
              {current < getCurrentUser(user).length - 1 && (
                <button
                  onClick={() => next()}
                  btntitle="Next"
                  className={style.btn_next}
                >
                  Next
                  <BsCaretRightFill />
                </button>
              )}
              {current === getCurrentUser(user).length - 1 && (
                <button
                  onClick={createUser}
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
