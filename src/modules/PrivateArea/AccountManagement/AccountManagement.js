import React, { useState, useEffect } from "react";

import { Input, Tabs } from "antd";
import { BiExport } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";

import { fetchAllUsers } from "../../../redux/services/admin";
import PrivateLayout from "../../../components/Layout/Private/PrivateLayout";
import {
  OutlineIconButton,
  FillIconButton,
} from "../../../components/Button/Button";
import UsersTable from "../../../components/Table/Table";
import CustomTab from "../../../components/Tabs/Tabs";
import CustomModal from "../../../components/Modal/PrivateModal";
import AdminUser from "../../../components/CreateUser/AdminUser/AdminUser";
import CorporateUser from "../../../components/CreateUser/CorporateUser/CorporateUser";
import IndividualUser from "../../../components/CreateUser/IndividualUser/IndividualUser";
import Spinner from "../../../components/Loader";
import { headers } from "../../../constants";

import "./AccountManagement.scss";
import "antd/dist/antd.css";
import "../../../components/Tabs/Tabs.scss";

const { TabPane } = Tabs;

const AccountManagement = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userType, setUserType] = useState("");
  const [user_tab, setUserTab] = useState("company");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const handleOpenModal = (type) => {
    setShowModal(true);
    setUserType(type);
    setShowBubble(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    fetchUsers(user_tab);
  };

  const fetchUsers = async (user) => {
    setLoading(true);
    console.log(user);
    const res = await fetchAllUsers(user);
    console.log("catch-err", res);
    setUsers(res?.data || []);
    if (res?.errors) {
      toast.error(
        Object.values(res?.errors)
          .flat()
          .map((err) => err),
        {
          position: "top-right",
        }
      );
    }
    setLoading(false);
  };

  const callback = (key) => {
    console.log(key);
    setUserTab(key);
    fetchUsers(key);
  };

  useEffect(() => {
    fetchUsers(user_tab);
  }, []);

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
          <Tabs defaultActiveKey="company" onChange={callback}>
            <TabPane tab="Corporate" key="company">
              {loading ? (
                <Spinner visible={loading} />
              ) : users?.length > 0 ? (
                <UsersTable tableData={users} headers={headers} />
              ) : (
                <div className="no_data">
                  <p>No user found</p>
                </div>
              )}
            </TabPane>
            <TabPane tab="Individual" key="personal">
              {loading ? (
                <Spinner visible={loading} />
              ) : users?.length > 0 ? (
                <UsersTable tableData={users} headers={headers} />
              ) : (
                <div className="no_data">
                  <p>No user found</p>
                </div>
              )}
            </TabPane>
            <TabPane tab="Admin" key="admin">
              {loading ? (
                <Spinner visible={loading} />
              ) : users?.length > 0 ? (
                <UsersTable tableData={users} headers={headers} />
              ) : (
                <div className="no_data">
                  <p>No user found</p>
                </div>
              )}
            </TabPane>
          </Tabs>
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
        children={
          userType === "admin" ? (
            <AdminUser closeModal={handleCloseModal} />
          ) : userType === "corporate" ? (
            <CorporateUser closeModal={handleCloseModal} />
          ) : (
            <IndividualUser closeModal={handleCloseModal} />
          )
        }
        style={{ width: "80%", top: "10px" }}
        closeModal={handleCloseModal}
      />
    </PrivateLayout>
  );
};

export default AccountManagement;
