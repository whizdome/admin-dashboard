import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Radio, Select } from "antd";

import { toast } from "react-toastify";
import {
  showUserAction,
  updateUserAction,
} from "../../../redux/actions/userAct";
import {
  listStatesAction,
  listCountriesAction,
} from "../../../redux/actions/otherAct";

import { FillButton } from "../../../components/Button/Button";
import Spinner from "../../../components/Loader";

import "react-toastify/dist/ReactToastify.css";
import "./Profile.scss";

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

const months = [
  {
    id: 1,
    name: "January",
  },
  {
    id: 2,
    name: "February",
  },
  {
    id: 3,
    name: "March",
  },
  {
    id: 4,
    name: "April",
  },
  {
    id: 5,
    name: "May",
  },
  {
    id: 6,
    name: "June",
  },
  {
    id: 7,
    name: "July",
  },
  {
    id: 8,
    name: "August",
  },
  {
    id: 9,
    name: "September",
  },
  {
    id: 10,
    name: "October",
  },
  {
    id: 11,
    name: "November",
  },
  {
    id: 12,
    name: "December",
  },
];

const Profile = () => {
  const { Option } = Select;

  const [userPicture, setUserPicture] = useState("");
  const [loading, setLoading] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [stateOptions, setStateOptions] = useState();
  const [countryOptions, setCountryOptions] = useState();

  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    user_type: "",
    date_of_birth: "",
    street_address: "",
    phone_number: "",
    city: "",
    postal_code: "",
    state_id: "",
    country_id: "",
  });

  const handleStateChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
      date_of_birth: day + "/" + month + "/" + year,
    });
  };

  const updateUserState = useSelector((state) => state.updateUserRes);
  const dispatch = useDispatch();

  const states = useSelector((state) => state.listStatesRes);
  const countries = useSelector((state) => state.listCountriesRes);

  const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let i = currentYear; i >= 1940; i--) {
      yearOptions.push(i);
    }
    return yearOptions;
  };

  const getDayOptions = () => {
    const daysInMonth = (month, year) => {
      return new Date(year, month, 0).getDate();
    };
    const dayOptions = [];
    for (let i = 1; i <= daysInMonth(month, year); i++) {
      dayOptions.push(i);
    }
    return dayOptions;
  };

  const updateUserProfile = () => {
    setLoading(true);
    try {
      dispatch(updateUserAction(state));
      console.log("result", updateUserState, state);
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    if (updateUserState.status === 200) {
      toast.success("Profile updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem("user", JSON.stringify(updateUserState.data.data));
      setLoading(false);
    } else if (
      updateUserState.status === 400 ||
      updateUserState.status === 500
    ) {
      toast.error("Error updating profile", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    }
  }, [updateUserState]);

  useEffect(() => {
    dispatch(listStatesAction());
    dispatch(listCountriesAction());
  }, []);

  useEffect(() => {
    console.log("states", states);
    if (states !== undefined || countries !== undefined) {
      setStateOptions(states?.data?.data);
      setCountryOptions(countries?.data?.data);
    }
    const user = JSON.parse(localStorage.getItem("user"));
    setState({
      first_name: user.name ? user.name.split(" ")[0] : user.first_name,
      last_name: user.name ? user.name.split(" ")[1] : user.last_name,
      email: user.email,
      gender: user.gender,
      user_type: user.user_type,
      date_of_birth: user.date_of_birth,
      street_address: user.street_address,
      phone_number: user.phone_number,
      city: user.city,
      postal_code: user.postal_code,
      state_id: user.state_id,
      country_id: user.country_id,
    });
    setDay(user.date_of_birth?.split("/")[1]);
    setMonth(user.date_of_birth?.split("/")[0]);
    setYear(user.date_of_birth?.split("/")[2]);
  }, [states, countries]);

  const {
    first_name,
    last_name,
    email,
    gender,
    street_address,
    phone_number,
    city,
    postal_code,
    state_id,
    country_id,
  } = state;

  return (
    <div className="profile_body_content">
      <div className="profile_body_content_header">
        <p className="profile_body_content_header_title">
          Personal Information
        </p>
      </div>
      <div className="profile_body_content_body">
        <div className="profile_body_profile_picture">
          <img
            className="profile_body_image"
            src={
              userPicture === ""
                ? "https://via.placeholder.com/150"
                : userPicture
            }
            alt="profile"
          />
          <div className="profile_body_header_details">
            <p>Profile Picture</p>
            <p>Change your current profile picture</p>
            <p className="small">
              We accept files in PNG or JPG Format, with a maximum size of 5mb
              <span>
                <label htmlFor="pictureUpload">Change User Picture</label>
                <input
                  type="file"
                  id="pictureUpload"
                  value={userPicture}
                  name="profile_picture"
                  onChange={(e) => setUserPicture(e.target.value)}
                  hidden
                />
              </span>
            </p>
          </div>
        </div>
        <div className="profile_body_details">
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">Edit Full Name</p>
              <p className="profile_subtitle">
                Changes can be made to your name after account creation
              </p>
            </div>
            <div className="column_right">
              <input
                type="text"
                name="first_name"
                placeholder="Ayodeji"
                value={first_name}
                onChange={handleStateChange}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Fasore"
                value={last_name}
                onChange={handleStateChange}
              />
            </div>
          </div>
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">Email</p>
              <p className="profile_subtitle">
                We send notifications and account updates to your verified mail
              </p>
            </div>
            <div className="column_right">
              <input
                type="email"
                name="email"
                placeholder="Harrylekan@gmail.com"
                value={email}
                onChange={handleStateChange}
              />
            </div>
          </div>
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">Phone Number</p>
              <p className="profile_subtitle">
                We send verification code to your phone number
              </p>
            </div>
            <div className="column_right">
              <input
                type="text"
                name="phone_number"
                placeholder="08062495942"
                value={phone_number}
                onChange={handleStateChange}
              />
            </div>
          </div>
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">Gender</p>
              <p className="profile_subtitle">What's your gender?</p>
            </div>
            <div className="column_right">
              <Radio.Group
                options={genderOptions}
                onChange={handleStateChange}
                value={gender}
                name="gender"
                optionType="button"
              />
            </div>
          </div>
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">Date of Birth</p>
              <p className="profile_subtitle">
                We use it to verify your Bank Verification Number and Payout
                processes
              </p>
            </div>
            <div className="column_right date_select">
              <Select
                value={year}
                name="year"
                style={{ width: 120 }}
                onChange={(value) => setYear(value)}
              >
                <Option value="">Year</Option>
                {getYearOptions().map((year) => (
                  <Option key={year} value={year}>
                    {year}
                  </Option>
                ))}
              </Select>
              <Select
                value={month}
                name="month"
                style={{ width: 120 }}
                onChange={(value) => setMonth(value)}
              >
                <Option value="">Month</Option>
                {months.map(({ name, id }) => (
                  <Option key={id} value={id}>
                    {name}
                  </Option>
                ))}
              </Select>

              <Select
                value={day}
                name="day"
                style={{ width: 120 }}
                onChange={(value) => setDay(value)}
              >
                <Option value="">Day</Option>
                {getDayOptions().map((day) => (
                  <Option key={day} value={day}>
                    {day}
                  </Option>
                ))}
              </Select>
            </div>
          </div>

          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">Street Address</p>
              <p className="profile_subtitle">For Verification</p>
            </div>
            <div className="column_right">
              <input
                type="text"
                name="street_address"
                placeholder="Enter Street Address"
                value={street_address}
                onChange={handleStateChange}
              />
            </div>
          </div>
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">City</p>
              <p className="profile_subtitle">For Verification</p>
            </div>
            <div className="column_right">
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                value={city}
                onChange={handleStateChange}
              />
            </div>
          </div>
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">Postal Code</p>
              <p className="profile_subtitle">For Verification</p>
            </div>
            <div className="column_right">
              <input
                type="text"
                name="postal_code"
                placeholder="Enter Postal Code"
                value={postal_code}
                onChange={handleStateChange}
              />
            </div>
          </div>
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">State / Province</p>
              <p className="profile_subtitle">For Verification</p>
            </div>
            <div className="column_right state_select">
              <select
                value={state_id}
                name="state_id"
                onChange={handleStateChange}
              >
                <option value="">Enter State / Province</option>
                {stateOptions?.map(({ name, id }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">Country of Residence</p>
              <p className="profile_subtitle">For Verification</p>
            </div>
            <div className="column_right">
              <select
                value={country_id}
                name="country_id"
                onChange={handleStateChange}
              >
                <option value="">Enter Country of Residence</option>
                {countryOptions?.map(({ name, id }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </select>
              {/* <input
                type="text"
                name="country_id"
                placeholder="Nigeria"
                value={country_id}
                onChange={handleStateChange}
              /> */}
            </div>
          </div>
          <div className="profile_body_details_row">
            <div className="column_left"></div>
            <div className="column_right">
              <FillButton
                btntitle="Update Profile"
                bgColor="#5C6574"
                onClick={updateUserProfile}
              />
            </div>
          </div>
        </div>
      </div>
      <Spinner visible={loading} />
    </div>
  );
};

export default Profile;
