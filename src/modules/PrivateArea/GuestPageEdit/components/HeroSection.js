import React from "react";
import "./HeroSection.scss";
import coverVector from "../../../../assets/images/cover-vector.svg";
import editWhite from "../../../../assets/images/edit-white.svg";


const HeroSection = ({ heroContents, handleEditCover }) => {
  const { title, headerText, text, coverImage } = heroContents;

  return (
    <div className="heroSection">
      <img className="coverImage" src={coverImage} alt="coverImage" />
      <div className="overlay">
        <div className="heroContents">
          <div className="edit" onClick={() => handleEditCover(title)}>
            Edit Cover <img src={editWhite} alt="editWhite" />
          </div>
          <div className="texts">
            <div>
              <h3> {title}</h3>
              <h1>{headerText}</h1>
              <p>{text}</p>
            </div>
            <div>
              <img src={coverVector} alt="coverVector" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
