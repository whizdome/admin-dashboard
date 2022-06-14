import React, { useState} from "react";
import { Link } from "react-router-dom";

import { Select } from "antd";
const { Option, OptGroup } = Select;

const EditHelpTips = ({ showModal, previewData }) => {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const helpTipData = {
    title: "Nunc dictum lectus sem, vel dignissim",
    cover_img: "about1",
    text: "Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. Sed sagittis et urna non efficitur. Nulla nec lacus tincidunt, rutrum arcu in, euismod diam. Donec neque tellus, congue sed velit sed, scelerisque scelerisque urna. Praesent mi sem, tincidunt eget facilisis in, pharetra et sapien. Proin sagittis erat magna, id eleifend ante posuere nec. Suspendisse potenti. Suspendisse tincidunt sed tortor at porta. Donec a molestie lectus, ac laoreet tellus. Nullam non rutrum velit, in lacinia diam. Nam vulputate elit sit amet orci mattis faucibus. Nam auctor eu eros in vehicula. Donec non risus id lacus aliquet.",
  };
  
  return (
    <div className="editHelpTips">
      <form>
        <div className="subject">
          <h3>Add a Subject</h3>
          <input type="text" placeholder="Type in a Subject" />
        </div>
        <div className="subject">
          <h3>Add a Category</h3>
          <Select
            defaultValue="lucy"
            style={{
              width: "100%",
            }}
            onChange={handleChange}
          >
            <option value="---Choose Category---">---Choose Category---</option>
            <option value="About Oasis">About Oasis</option>
            <option value="E-Dividend claim">E-Dividend claim</option>
            <option value="Demilitiarization">Demilitiarization</option>
            <option value="Share Transfer">Share Transfer</option>
            <option value="Probate and Transmission">
              Probate and Transmission
            </option>
            <option value="Safety and accessibility">
              Safety and accessibility
            </option>
          </Select>
        </div>

        {/* <div className="message">
          <h3>Message</h3>
        </div> */}

        <div className="upload_img">
          <h3 style={{ color: "#D90B2C" }}>Upload Cover Image</h3>
        </div>
        <div className="possible_question">
          <div className="head">
            <h3>Possible Question</h3>
            <h3 style={{ color: "#D90B2C" }}>+ Add Question</h3>
          </div>
          <div>
            <h3>Question</h3>
            <input type="text" placeholder="Type in Question" />
          </div>
          <div>
            <h3>Answer</h3>
            <input type="text" placeholder="Type in Your Answer" />
          </div>
        </div>

        <div className="submit">
          <h3
            onClick={() => {
              showModal();
              previewData(helpTipData);
            }}
          >
            Preview help tip
          </h3>
          <div>
            <button type="button">
              <Link to="/resource-management/help-tip/1">Cancel</Link>
            </button>

            <button type="submit">
              <Link to="/resource-management/help-tip/1">Update Help Tip</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditHelpTips;
