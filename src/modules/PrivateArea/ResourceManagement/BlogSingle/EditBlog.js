import React, { useState} from "react";
import { Link } from "react-router-dom";
import about1 from "../../../../assets/images/about1.jpg";
import axios from "axios"
import { useHistory } from "react-router-dom";
// import { Select } from "antd";
import deleteIcon from "../../../../assets/images/deleteIcon.svg";

import edit from "../../../../assets/images/edit-icon2.svg";

// const { Option, OptGroup } = Select;


const EditBlog = ({
  showModal,
  previewData,
  showModalSuccess,
  handleCancelSuccess,
}) => {
  const history = useHistory();

  const [currentView, setcurrentView] = useState(1);
  const [editContents, setEditContents] = useState({
    title: "Wall Street In Lagos",
    textOne:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    headTwo: "Wall Street In Lagos",
    textTwo:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est /n Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est /n Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
    headThree:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
    textThree:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est /n  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditContents({ ...editContents, [name]: value });
    console.log(editContents, "editContents log");
  };

  const saveEditedPost = async () => {
    showModalSuccess();
    await axios.post("apems.co/post", editContents);
    console.log(editContents, "editContents log");
    // history.pushState("/resource-management");
    
    handleCancelSuccess()
  };

  const switchView = (view) => {
    if (view === 1) {
      setcurrentView(1);
    } else if (view === 2) {
      setcurrentView(2);
    } else if (view === 3) {
      setcurrentView(3);
    }
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const helpTipData = {
    title: "Nunc dictum lectus sem, vel dignissim",
    cover_img: "about1",
    text: "Mareet tellam auctor eu eros in vehicula. Donec non risus id lacus aliquet.",
  };

  return (
    <div className="editBlog">
      <ul>
        <li
          className={`${currentView === 1 ? "active" : ""}`}
          onClick={() => switchView(1)}
        >
          Edit Topic
        </li>
        <li
          className={`${currentView === 2 ? "active" : ""}`}
          onClick={() => switchView(2)}
        >
          Discussion Categories
        </li>
        <li
          className={`${currentView === 3 ? "active" : ""}`}
          onClick={() => switchView(3)}
        >
          Tags
        </li>
      </ul>

      {currentView === 1 ? (
        <form>
          <div>
            <h1 className="title">Title</h1>
            <div className="relative">
              <input
                className="title_input"
                name="title"
                onChange={handleEditChange}
                type="text"
                value={editContents.title}
              />
              <div className="edit_del">
                <div className="edit">
                  <img src={edit} alt="edit" />
                </div>
                <div className="del">
                  <img src={deleteIcon} alt="deleteIcon" />
                </div>
              </div>
            </div>
            <div className="relative">
              <textarea name="textOne" onChange={handleEditChange}>
                {editContents.textOne}
              </textarea>

              <div className="edit_del">
                <div className="edit">
                  <img src={edit} alt="edit" />
                </div>
                <div className="del">
                  <img src={deleteIcon} alt="deleteIcon" />
                </div>
              </div>
            </div>
            <div className="relative box4">
              <p>Paragraph Line</p>
              <div className="edit_del">
                <div className="del">
                  <img src={deleteIcon} alt="deleteIcon" />
                </div>
              </div>
            </div>
            <div className="relative box5">
              <img src={about1} alt="" />
              <div className="edit_del">
                <div className="del">
                  <img src={deleteIcon} alt="deleteIcon" />
                </div>
              </div>
            </div>
            <div className="relative">
              <input
                className="title_h2"
                name="headTwo"
                onChange={handleEditChange}
                type="text"
                value={editContents.headTwo}
              />
              <div className="edit_del">
                <div className="edit">
                  <img src={edit} alt="edit" />
                </div>
                <div className="del">
                  <img src={deleteIcon} alt="deleteIcon" />
                </div>
              </div>
            </div>
            <div className="relative">
              <textarea rows="15" name="textTwo" onChange={handleEditChange}>
                {editContents.textTwo}
              </textarea>
              <div className="edit_del">
                <div className="edit">
                  <img src={edit} alt="edit" />
                </div>
                <div className="del">
                  <img src={deleteIcon} alt="deleteIcon" />
                </div>
              </div>
            </div>
            <div className="relative">
              <textarea
                name="textTwo"
                className="title_h2"
                onChange={handleEditChange}
                style={{ marginBottom: "20px" }}
              >
                {editContents.headThree}
              </textarea>
              <textarea rows="15" name="textThree" onChange={handleEditChange}>
                {editContents.textThree}
              </textarea>

              <div className="edit_del">
                <div className="edit">
                  <img src={edit} alt="edit" />
                </div>
                <div className="del">
                  <img src={deleteIcon} alt="deleteIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="submit">
            <h3
              onClick={() => {
                showModal();
                previewData(helpTipData);
              }}
            >
              Preview post
            </h3>
            <div>
              <button type="button" onClick={saveEditedPost}>
                Save Post
              </button>
            </div>
          </div>
        </form>
      ) : currentView === 2 ? (
        <div></div>
      ) : currentView === 3 ? (
        <div></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EditBlog;
