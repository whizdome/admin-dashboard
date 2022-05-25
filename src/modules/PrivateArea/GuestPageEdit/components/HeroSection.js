import React from "react";
import "./HeroSection.scss";

const HeroSection = ({ heroContents }) => {
  const { title, headerText, text } = heroContents;

  return (
    <div className="heroSection">
      <div className="heroContents">
        <div className="edit">Edit Cover</div>
        <div className="texts">
          <div>
            <h3> {title}</h3>
            <h1>{headerText}</h1>
            <p>{text}</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
