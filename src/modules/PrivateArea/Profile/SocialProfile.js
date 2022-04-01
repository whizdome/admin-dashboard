import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import { toast } from "react-toastify";

import { FillButton } from "../../../components/Button/Button";
import Spinner from "../../../components/Loader";
import { showUserSocials } from "../../../redux/services/admin";
import { updateUserSocials } from "../../../redux/services/user";

import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "react-icons/ri";
import "./Profile.scss";

const SocialProfile = () => {
  const [state, setState] = useState({
    linkedin_url: "",
    twitter_url: "",
    facebook_url: "",
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

  const { linkedin_url, twitter_url, facebook_url } = state;

  const fetchSocialProfile = async (id) => {
    setLoading(true);
    const res = await showUserSocials(id);
    if (res?.data) {
      const data = res?.data;
      setState({
        linkedin_url: data.linkedin_url,
        twitter_url: data.twitter_url,
        facebook_url: data.facebook_url,
      });
    }
    if (res?.errors) {
      toast.error(res?.errors[0].message, {
        position: "top-right",
      });
    }
    console.log(res);
    setLoading(false);
  };

  const updateSocialProfile = async () => {
    setLoading(true);
    const res = await updateUserSocials(state);
    console.log(res, state);
    setLoading(false);
  };

  useEffect(() => {
    const path = window.location.pathname.split("/")[3];
    fetchSocialProfile(path);
  }, []);

  return (
    <div id="social_profile" className="profile_body_content">
      <div className="profile_body_content_body">
        {loading ? (
          <Spinner visible={loading} />
        ) : (
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
                    name="twitter_url"
                    value={twitter_url}
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
                    name="facebook_url"
                    value={facebook_url}
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
                    name="linkedin_url"
                    value={linkedin_url}
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
        )}
      </div>
    </div>
  );
};

export default SocialProfile;
