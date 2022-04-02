import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { FillButton } from "../../../components/Button/Button";
import Spinner from "../../../components/Loader";
import { fetchUserAccountById } from "../../../redux/services/admin";

import { HiCheckCircle } from "react-icons/hi";
import "./Profile.scss";

const PayoutAccount = () => {
  const [account, setAccount] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchAccount = async (id) => {
    setLoading(true);
    const res = await fetchUserAccountById(id);
    if (res?.data) {
      setAccount(res.data);
    }
    console.log(res?.data);
    if (res?.errors) {
      toast.error(res.errors[0].message, {
        position: "top-right",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    const path = window.location.pathname.split("/")[3];
    fetchAccount(path);
  }, []);

  return (
    <div id="payout_account" className="profile_body_content">
      <div className="profile_body_content_body">
        <div className="profile_body_details">
          {loading ? (
            <Spinner visible={loading} />
          ) : (
            <div className="profile_body_details_row">
              <div className="column_left">
                <p className="profile_title">Payout Account Verified</p>
                <p className="profile_subtitle">
                  We pay out your ticket revenue into the account specified
                </p>
              </div>
              <div className="column_right">
                <div className="input_icon">
                  <div>
                    <p>
                      {account?.bank?.name} - {account?.account_number}
                    </p>
                    <HiCheckCircle />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="profile_body_details_row">
            <div className="column_left"></div>
            <div className="column_right">
              <FillButton btntitle="Remove Payout Account" bgColor="#5C6574" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutAccount;
