import React from "react";
import { Link } from "react-router-dom";

const ResourceHeader = ({ currentView }) => {
  return (
    <div className="resourceHeader">
      <div className="container">
        <h3>Resource Center</h3>
        {currentView === 1 ? (
          ""
        ) : (
          <Link
            to={
              currentView === 2
                ? "/resource-management/help-tip/1?edit=true"
                : "/resource-management/blogs/1?edit=true"
            }
          >
            <button>+ Create New Post</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ResourceHeader;