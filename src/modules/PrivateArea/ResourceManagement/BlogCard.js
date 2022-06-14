import React, { useState } from 'react';
import image1 from "../../../assets/images/image1.jpg";
import checkedIcon from "../../../assets/images/checked-icon.svg";
import editIcon from "../../../assets/images/edit-icon.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const BlogCard = ({ blogCards }) => {
  const [showBubble, setShowBubble] = useState();
  const [status, setStatus] = useState(false);
  
      const handleOpenBubble = (index) => {
        setShowBubble(index);
        setStatus(!status);
      };


  return (
    <div className="blogCards">
      {blogCards.map((blogCard, index) => (
        <div key={index} className="blogCard">
          <img src={image1} alt="image1" />
          <div>
            <p>{blogCard.text}</p>
            <small>{blogCard.date}</small>
            <div className="view">
              <strong className="viewMore">
                <Link to="/resource-management/blogs/1">
                  View More
                  <img className="editIcon" src={editIcon} alt="editIcon" />
                </Link>
              </strong>
              <div className="dropdown_bubble">
                <ul
                  className="dropdown_menu"
                  style={{
                    display: showBubble === index && status ? "block" : "none",
                  }}
                  aria-labelledby="dLabel"
                >
                  <li>
                    <Link to="/resource-management/blogs/1?edit=true">
                      edit help tip
                    </Link>
                  </li>
                  <li>delete help tip</li>
                </ul>
              </div>
              <span onClick={() => handleOpenBubble(index)}>...</span>

              {/* <div className='editTooltip'>
                edit post
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard