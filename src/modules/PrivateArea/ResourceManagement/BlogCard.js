import React from 'react';
import image1 from "../../../assets/images/image1.jpg";
import checkedIcon from "../../../assets/images/checked-icon.svg";
import editIcon from "../../../assets/images/edit-icon.svg";


const BlogCard = ({ blogCards }) => {

  const hadnleLog = (val) => {
    console.log(val, "")
  }

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
                View More
                <img className="editIcon" src={editIcon} alt="editIcon" />
              </strong>
              <span onClick={() => hadnleLog(index)}>...</span>

              <div className='editTooltip'>
                edit post
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard