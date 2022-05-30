import React from "react";
import "./EditCard.scss";
import image2 from "../../../../assets/images/image2.jpg";

const EditCard = ({ closeEdit, issHeroSection, issTextOnly }) => {
  console.log(issTextOnly, "issTextOnly log");
  return (
    <div className="editCard">
      <div className="editCardBox">
        <div className="cancel" onClick={closeEdit}>
          x
        </div>

        {issTextOnly ? (
          ""
        ) : (
          <div className="box1">
            <div className="uploadImg">
              <img src="" alt="" />
              <p>Drag your image here, or browse</p>
              <p>Supports: jpg, png. Dimension: 2000*1000</p>
            </div>
            <div className="uploadedImg">
              <img src={image2} alt="imageUploaded" />
            </div>
          </div>
        )}

        <div className="box2">
          {issHeroSection && (
            <div className="heading">
              <h3>Edit Heading</h3>
              <input type="text" value="Annual General Meetings" />
            </div>
          )}

          <div className="title">
            <h3>Change Title</h3>

            <textarea name="" id="" rows="2">
              Keep your stakeholders connected and up to date.
            </textarea>
          </div>
          <div className="bodyText">
            <h3>{issHeroSection ? "Edit" : "Change"} Body Text</h3>
            <textarea name="" id="" rows="7">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr.
            </textarea>
          </div>
          <div className="button_wrapper">
            <button>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
