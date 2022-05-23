import React from "react";
import image1 from "../../../assets/images/image1.jpg";
import editIcon from "../../../assets/images/edit-icon.svg";

const Landing = () => {
  const landingCards = [
    {
      title: "Annual General Meeting",
      image: "",
      link: "",
    },
    {
      title: "Corporate Event",
      image: "",
      link: "",
    },
    {
      title: "Shows",
      image: "",
      link: "",
    },
    {
      title: "About Us",
      image: "",
      link: "",
    },
    {
      title: "Privacy Policy",
      image: "",
      link: "",
    },
    {
      title: "Terms of Use",
      image: "",
      link: "",
    },
    {
      title: "FAQs",
      image: "",
      link: "",
    },
  ];

  return (
    <div className="landingCards">
      {landingCards.map((landingCard, index) => (
        <div key={index} className="landingCard">
          <img src={image1} alt="image1" />
          <div>
            <h3>{landingCard.title}</h3>
            <p>
              Edit <img className="editIcon" src={editIcon} alt="editIcon" />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Landing;
