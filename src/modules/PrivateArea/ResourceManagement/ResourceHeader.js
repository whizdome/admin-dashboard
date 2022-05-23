import React from "react";

const ResourceHeader = ({ currentView }) => {
  console.log(currentView, "currentView log");
  return (
    <div className="resourceHeader">
      <div className="container">
        <h3>ResourceHeader</h3>
        {currentView === 1 ? "" : <button>+ Create New Post</button>}
      </div>
    </div>
  );
};

export default ResourceHeader;
