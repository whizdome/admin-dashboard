import React from "react";
import View from "./View";
// import about1 from "../../../../assets/images/about1.jpg";


const blogData = {
  title: "Nunc dictum lectus sem, vel dignissim",
  cover_img: "about1",
  text:"Mauris neque ns id lacus aliquet."
};

const ViewBlog = () => {
  return (
    <div>
      <View veiwData={blogData} />
    </div>
  );
};

export default ViewBlog;