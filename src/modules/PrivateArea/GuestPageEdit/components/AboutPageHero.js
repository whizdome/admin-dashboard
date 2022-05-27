import React from "react";
import "./AboutPageHero.scss";
import coverVector from "../../../../assets/images/cover-vector.svg";


const AboutPageHero = ({ heroContents, handleEditCover }) => {
  const { title, headerText, text, coverImage } = heroContents;

  return (
    <div className="aboutHeroSection">
      <div className="heroContents">
        <div className="texts">
          <div>
            <div className="edit" onClick={() => handleEditCover(title)}>
              <p> Edit Cover</p>
            </div>
            <h1>{headerText}</h1>
            <p>{text}</p>
          </div>
          <div>
            <img src={coverVector} alt="coverVector" />
            {/* <img className="coverImage" src={coverImage} alt="coverImage" /> */}
            <img className="heroImage" src={coverImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutPageHero