import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch } from "antd";
import { toast } from "react-toastify";

import { FillButton } from "../../../components/Button/Button";
import Spinner from "../../../components/Loader";
import {
  showUserSocialsAction,
  updateUserSocialsAction,
} from "../../../redux/actions/userAct";

import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "react-icons/ri";
import "./Profile.scss";

const SocialProfile = () => {
  const [state, setState] = useState({
    inputLinkedin: "",
    inputTwitter: "",
    inputFacebook: "",
  });

  const [linkedinChecked, setLinkedinChecked] = useState(true);
  const [twitterChecked, setTwitterChecked] = useState(false);
  const [facebookChecked, setFacebookChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleStateChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const { inputLinkedin, inputTwitter, inputFacebook } = state;
  const socialState = useSelector((state) => state.showUserSocialsRes);
  const updateSocials = useSelector((state) => state.updateUserSocialsRes);
  const dispatch = useDispatch();

  const fetchSocialProfile = () => {
    try {
      dispatch(showUserSocialsAction());
      console.log(socialState);
      const social_state = socialState?.data?.data;
      setState({
        inputLinkedin: social_state?.linkedin_url,
        inputTwitter: social_state?.twitter_url,
        inputFacebook: social_state?.facebook_url,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateSocialProfile = () => {
    setLoading(true);
    try {
      dispatch(updateUserSocialsAction(state));
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    fetchSocialProfile();
  }, []);

  useEffect(() => {
    if (updateSocials?.data?.status === 200) {
      toast.success("Social profiles updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (updateSocials?.data?.status === 400) {
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    }
  }, [updateSocials]);

  return (
    <div id="social_profile" className="profile_body_content">
      <div className="profile_body_content_body">
        <div className="profile_body_details">
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">Twitter</p>
              <p className="profile_subtitle">
                Your followers on twitter will be notified of your event
              </p>
            </div>
            <div className="column_right">
              <div className="input_icon">
                <input
                  type="text"
                  name="inputTwitter"
                  value={inputTwitter}
                  onChange={handleStateChange}
                  disabled={twitterChecked}
                  placeholder="https://www.twitter.com/apems"
                />

                <RiTwitterFill />
              </div>
              <Switch
                name="twitter"
                checked={twitterChecked}
                onChange={() => setTwitterChecked(!twitterChecked)}
                size="small"
              />
            </div>
          </div>
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">Facebook</p>
              <p className="profile_subtitle">
                Your friends on facebook will be notified of your event
              </p>
            </div>
            <div className="column_right">
              <div className="input_icon">
                <input
                  type="text"
                  name="inputFacebook"
                  value={inputFacebook}
                  onChange={handleStateChange}
                  disabled={facebookChecked}
                  placeholder="https://www.twitter.com/apems"
                />
                <RiFacebookBoxFill />
              </div>
              <Switch
                name="facebook"
                checked={facebookChecked}
                onChange={() => setFacebookChecked(!facebookChecked)}
                size="small"
              />
            </div>
          </div>
          <div className="profile_body_details_row">
            <div className="column_left">
              <p className="profile_title">LinkedIn</p>
              <p className="profile_subtitle">
                Your friends on LinkedIn will be notified of your event
              </p>
            </div>
            <div className="column_right">
              <div className="input_icon">
                <input
                  type="text"
                  name="inputLinkedin"
                  value={inputLinkedin}
                  onChange={handleStateChange}
                  disabled={linkedinChecked}
                  placeholder="https://www.twitter.com/apems"
                />

                <RiLinkedinFill />
              </div>
              <Switch
                name="linkedin"
                checked={linkedinChecked}
                onChange={(e) => setLinkedinChecked(!linkedinChecked)}
                size="small"
              />
            </div>
          </div>

          <div className="profile_body_details_row">
            <div className="column_left"></div>
            <div className="column_right">
              <FillButton
                btntitle="Update Social Profile"
                bgColor="#5C6574"
                onClick={updateSocialProfile}
              />
            </div>
          </div>
        </div>
      </div>
      <Spinner visible={loading} />
    </div>
  );
};

export default SocialProfile;
