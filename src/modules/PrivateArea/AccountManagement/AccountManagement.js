import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "antd";
import { BiExport } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { BsSearch } from "react-icons/bs";

import { fetchAllUsersAction } from "../../../redux/actions/adminAct";
import PrivateLayout from "../../../components/Layout/Private/PrivateLayout";
import {
  OutlineIconButton,
  FillIconButton,
} from "../../../components/Button/Button";
import UsersTable from "../../../components/Table/Table";
import CustomTab from "../../../components/Tabs/Tabs";
import CustomModal from "../../../components/Modal/PrivateModal";
import CreateUser from "../../../components/CreateUser/AdminUser/AdminUser";
import Spinner from "../../../components/Loader";
import { headers } from "../../../constants";

import "./AccountManagement.scss";

const AccountManagement = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userType, setUserType] = useState(1);
  const [loading, setLoading] = useState(false);
  const [adminUser, setAdminUser] = useState([]);
  const [individualUser, setIndividualUser] = useState([]);
  const [corporateUser, setCorporateUser] = useState([]);

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.fetchAllUsersRes);

  const handleOpenModal = (type) => {
    setShowModal(true);
    setUserType(type);
    setShowBubble(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  
  const fetchUsers = () => {
    setLoading(true);
    try {
      dispatch(fetchAllUsersAction());
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (userState?.status === 200) {
      setLoading(false);
      const data = userState?.data?.data;
      setAdminUser(data.filter((user) => user.user_type === "admin"));
      setIndividualUser(data.filter((user) => user.user_type === "personal"));
      setCorporateUser(data.filter((user) => user.user_type === "corporate"));
      console.log("state", data);
    }
  }, [userState]);

  return (
    <PrivateLayout>
      <div className="acct_management">
        <div className="acct_management_header">
          <div className="user_details">
            <div className="user_details_icon_wrapper">
              <div className="user_details_icon">
                <FiUsers />
              </div>
            </div>

            <div>
              <p className="user_name">Users</p>
              <p className="welcome_message">Users on APEMS</p>
            </div>
          </div>
          <div>
            <OutlineIconButton
              btntitle="Export Analytic Report"
              icon={<BiExport />}
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
        <div className="acct_management_body">
          <CustomTab
            tabs={[
              {
                title: "Corporate",
                content: (
                  loading ? <Spinner visible={loading} /> : 
                  corporateUser.length > 0 ? (
                  <div>
                    <UsersTable tableData={corporateUser} headers={headers} />
                  </div>
                  ) : (
                    <div className="no_data">
                      <p>No data found</p>
                    </div>
                  )
                ),
              },
              { title: "Individual",
              content: (
                loading ? <Spinner visible={loading} /> : 
                individualUser.length > 0 ? (
                <div>
                  <UsersTable tableData={individualUser} headers={headers} />
                </div>
                ) : (
                  <div className="no_data">
                    <p>No data found</p>
                  </div>
                )
              ), },
              { title: "Admin User",
              content: (
                loading ? <Spinner visible={loading} /> : 
                adminUser.length > 0 ? (
                <div>
                  <UsersTable tableData={adminUser} headers={headers} />
                </div>
                ) : (
                  <div className="no_data">
                    <p>No data found</p>
                  </div>
                )
              ), },
            ]}
          />
          <div className="acct_management_buttons">
            <div className="dropdown_bubble">
              <FillIconButton
                icon={<GoPlus />}
                rightIcon="true"
                btntitle="Create new user"
                onClick={() => setShowBubble(!showBubble)}
              />
              <ul
                className="dropdown_menu"
                style={{ display: showBubble ? "block" : "none" }}
                aria-labelledby="dLabel"
              >
                <li onClick={() => handleOpenModal("admin")}>
                  <span>Admin User</span>
                </li>
                <li onClick={() => handleOpenModal("corporate")}>
                  <span>Corporate</span>
                </li>
                <li onClick={() => handleOpenModal("individual")}>
                  <span>Individual</span>
                </li>
              </ul>
            </div>
            <Input
              size="large"
              placeholder="Search User"
              prefix={<BsSearch />}
            />
          </div>
        </div>
      </div>
      <CustomModal
        visible={showModal}
        children={<CreateUser user={userType} />}
        style={{ width: "80%", top: "10px" }}
        closeModal={handleCloseModal}
      />
    </PrivateLayout>
  );
};

export default AccountManagement;
