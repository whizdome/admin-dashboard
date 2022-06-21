import React from "react";
import "./CardSection.scss";
import meeting1 from "../../../../assets/images/meeting1.jpg";
import editRed from "../../../../assets/images/edit-red.svg";



const CardSection = ({ reverse, cardContent, handleEditCard }) => {
  const { title, bodyText, cardImage } = cardContent;

  return (
    <div className="cardSectionWrapper">
      <div className="subWrapper">
        <div
          className="edit"
          style={{ textAlign: `${reverse ? "left" : "right"}` }}
        >
          <p onClick={() => handleEditCard(title)}>
            Edit Card <img src={editRed} alt="" />
          </p>
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
