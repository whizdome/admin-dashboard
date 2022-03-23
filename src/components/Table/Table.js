import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

import { fetchAllUsersAction } from "../../redux/actions/adminAct";

import "antd/dist/antd.css";
import { Pagination } from "antd";

import "./Table.scss";

const pageSize = 8;

const UsersTable = ({ tableData, headers }) => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [minIndex, setMinIndex] = useState(0);

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.fetchAllUsersRes);

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <span>
          <FaLongArrowAltLeft />
          Previous
        </span>
      );
    }
    if (type === "next") {
      return (
        <span>
          Next
          <FaLongArrowAltRight />
        </span>
      );
    }
    return originalElement;
  };

  const handleChange = (page) => {
    setCurrentPage(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
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
    if (userState?.status === 200) {
      setLoading(false);
      const data = userState?.data?.data;
      console.log("state", data);
    }
  }, [userState]);

  useEffect(() => {
    setData(tableData);
    setTotal(tableData?.length / pageSize);
    setMaxIndex(pageSize);
    setMinIndex(0);
  }, [tableData]);

  return (
    <div className="table_container">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" id="table-checkbox" />
            </th>
            {headers?.map((name, i) => (
              <th key={name} className="align_left">
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody align="right">
          {data?.map((user, i) => {
            const { id, name, email, type, img, date } = user;
            return (
              i >= minIndex &&
              i < maxIndex && (
                <tr
                  key={id}
                  onClick={() => {
                    console.log(`clicked ${name}`);
                    history.push("/account-management/profile");
                    return;
                  }}
                >
                  <td className="align_left">
                    <input type="checkbox" id={`table-checkbox-${i + 1}`} />
                  </td>
                  <td className="align_left">{id}</td>
                  <td className="align_left">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        style={{
                          borderRadius: "50px",
                          height: "2.5rem",
                          width: "2.5rem",
                          marginRight: ".5rem",
                          border: "1px solid #E0E0E0",
                        }}
                        src={img}
                        alt="user"
                      />
                      <span>{name}</span>
                    </div>
                  </td>
                  <td className="align_left">{email}</td>
                  <td className="align_left">{type}</td>
                  <td className="align_left">{date}</td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
      <Pagination
        total={data?.length}
        itemRender={itemRender}
        pageSize={pageSize}
        current={currentPage}
        onChange={handleChange}
      />
    </div>
  );
};

export default UsersTable;
