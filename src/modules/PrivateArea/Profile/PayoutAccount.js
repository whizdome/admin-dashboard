import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { FillButton } from "../../../components/Button/Button";
import Spinner from "../../../components/Loader";
import {
  fetchUserDetailsAction,
  updateUserDetailsAction,
} from "../../../redux/actions/bankAccountAct";

import { HiCheckCircle } from "react-icons/hi";
import "./Profile.scss";

const PayoutAccount = () => {
  const [account, setAccount] = useState({});
  const [loading, setLoading] = useState(false);

  const accountState = useSelector((state) => state.fetchUserDetailsRes);
  const updateState = useSelector((state) => state.updateUserDetailsRes);
  const dispatch = useDispatch();

  const updateAccount = () => {
    setLoading(true);
    try {
      dispatch(updateUserDetailsAction(account));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAccount = () => {
    setLoading(true);
    try {
      dispatch(fetchUserDetailsAction());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  useEffect(() => {
    console.log(accountState);
    setAccount(accountState?.data?.data);
  }, [accountState]);

  useEffect(() => {
    if (updateState?.data?.status === 200) {
      toast.success("Account updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (updateState?.data?.status === 400) {
      toast.error("Account not updated", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    }
  }, [updateState]);

  return (
    <div id="payout_account" className="profile_body_content">
      <div className="profile_body_content_body">
        <div className="profile_body_details">
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">Payout Account Verified</p>
              <p className="profile_subtitle">
                We pay out your ticket revenue into the account specified
              </p>
            </div>
            <div className="column_right">
              <div className="input_icon">
                <input type="text" value="GTBank - 10254*****" disabled />
                <HiCheckCircle />
              </div>
            </div>
          </div>

          <div className="profile_body_details_row">
            <div className="column_left"></div>
            <div className="column_right">
              <FillButton
                btntitle="Remove Payout Account"
                bgColor="#5C6574"
                onClick={updateAccount}
              />
            </div>
          </div>
        </div>
      </div>
      <Spinner visible={loading} />
    </div>
  );
};

export default PayoutAccount;
