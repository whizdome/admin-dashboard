import React, { useState} from "react";
import { Link } from "react-router-dom";

import { Select } from "antd";
const { Option, OptGroup } = Select;

const EditBlog = ({ showModal, previewData }) => {

   const [currentView, setcurrentView] = useState(1);
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
            <h1>Title</h1>
            <div className="relative">
              <h1>Wall Street In Lagos</h1>
              <div className="edit_delte">
                <div>D</div>
                <div>E</div>
              </div>
            </div>
            <div className="relative">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem.
              </p>
              <div className="edit_delte">
                <div>D</div>
                <div>E</div>
              </div>
            </div>
            <div className="relative">
              <p>Paragraph Line</p>
              <div className="edit_delte">
                <div>D</div>
              </div>
            </div>
            <div className="relative">
              <img src="" alt="" />
              <div className="edit_delte">
                <div>D</div>
              </div>
            </div>

            <div className="relative">
              <p></p>
              <div className="edit_delte">
                <div>D</div>
                <div>E</div>
              </div>
            </div>
            <div className="relative">
              <p></p>
              <div className="edit_delte">
                <div>D</div>
                <div>E</div>
              </div>
            </div>
            <div className="relative">
              <p></p>
              <div className="edit_delte">
                <div>D</div>
                <div>E</div>
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
              {/* <button type="button">
              <Link to="/resource-management/help-tip/1">Cancel</Link>
            </button> */}

              <button type="submit">
                <Link to="/resource-management/help-tip/1">
                  Update Help Tip
                </Link>
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
