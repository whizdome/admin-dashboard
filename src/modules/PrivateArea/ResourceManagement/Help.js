import React from "react";
import image1 from "../../../assets/images/image1.jpg";
import checkedIcon from "../../../assets/images/checked-icon.svg";

import editIcon from "../../../assets/images/edit-icon.svg";

const Help = () => {
  const helpCards = [
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
    },
  ];
  return (
    <div className="helpCards">
      {helpCards.map((helpCard, index) => (
        <div key={index} className="helpCard">
          <img src={image1} alt="image1" />
          <div>
            <img className="checkedIcon" src={checkedIcon} alt="checkedIcon" />
            <div>
              <p>{helpCard.text}</p>
              <div className="view">
                <strong className="viewMore">
                  View More
                  <img className="editIcon" src={editIcon} alt="editIcon" />
                </strong>
                <span>...</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Help;
