import React, {useState} from "react";
import image1 from "../../../assets/images/image1.jpg";
import checkedIcon from "../../../assets/images/checked-icon.svg";

import editIcon from "../../../assets/images/edit-icon.svg";

const Help = () => {
    const [showBubble, setShowBubble] = useState(false);
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

    const handleOpenModal = (type) => {
      // setShowModal(true);
      // setUserType(type);
      setShowBubble(false);
    };

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
                <div className="dropdown_bubble">
                    <ul
                      className="dropdown_menu"
                      style={{ display: showBubble ? "block" : "none" }}
                      aria-labelledby="dLabel"
                    >
                      <li>edit help tip</li>
                      <li>delete help tip</li>
                    </ul>
                  </div>
                  <span onClick={() => setShowBubble(!showBubble)}>...</span>
              
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Help;
