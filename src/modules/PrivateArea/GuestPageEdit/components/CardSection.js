import React from "react";
import "./CardSection.scss";
import meeting1 from "../../../../assets/images/meeting1.jpg";

const CardSection = ({ reverse, cardContent }) => {
    const { title, bodyText, cardImage } = cardContent;
    
  return (
    <div className="cardSectionWrapper">
      <div className="subWrapper">
        <div
          className="edit"
          style={{ textAlign: `${reverse ? "left" : "right"}` }}
        >
          <p>Edit Card</p>
        </div>
        <div
          className="cardSection"
          style={{ flexDirection: `${reverse ? "row-reverse" : "row"}` }}
        >
          <div className="box1 box">
            <img src={cardImage} alt="" />
          </div>
          <div className="box2 box">
            <div>
              <h1>{title}</h1>
              <p>{bodyText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
