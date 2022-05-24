import React, { useState } from "react";
import BlogCard from "./BlogCard";
import "./resourceManagement.scss";

const Blog = () => {
  const allBlogPost = [
    {
      text: "All Blog Post Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
      date: "Posted on 23| 3|2021",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
      date: "Posted on 23| 3|2021",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
      date: "Posted on 23| 3|2021",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
      date: "Posted on 23| 3|2021",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
      date: "Posted on 23| 3|2021",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
      date: "Posted on 23| 3|2021",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
      date: "Posted on 23| 3|2021",
    },
    {
      text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
      image: "",
      link: "",
      date: "Posted on 23| 3|2021",
    },
  ];
    
     const recentlyPosted = [
       {
         text: "Recently Posted Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
     ];
    
     const mostRead = [
       {
         text: "Most Read Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
       {
         text: "Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula.",
         image: "",
         link: "",
         date: "Posted on 23| 3|2021",
       },
     ];
    
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
    

    return (
      <div className="blogCardsWrapper">
        {/* <div className=""> */}
        <ul>
          <li
            className={`${currentView === 1 ? "active" : ""}`}
            onClick={() => switchView(1)}
          >
            All Blog Posts
          </li>
          <li
            className={`${currentView === 2 ? "active" : ""}`}
            onClick={() => switchView(2)}
          >
            Recently Posted
          </li>
          <li
            className={`${currentView === 3 ? "active" : ""}`}
            onClick={() => switchView(3)}
          >
            Most Read
          </li>
        </ul>
        {currentView === 1 ? (
          <BlogCard blogCards={allBlogPost} />
        ) : currentView === 2 ? (
          <BlogCard blogCards={recentlyPosted} />
        ) : currentView === 3 ? (
          <BlogCard blogCards={mostRead} />
        ) : (
          ""
        )}
        {/* </div> */}
      </div>
    );
};

export default Blog;
