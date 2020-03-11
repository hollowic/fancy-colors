import React, { useState } from "react";

const SideBar = props => {
  const [likes, setLikes] = useState([]);
  return (
    <div className="sidebar">
      <div id="search">
        <input type="text" placeholder="Search Palettes" />
        <i className="fas fa-search"></i>
      </div>

      <div id="likes">
        <div className="title">
          You liked{" "}
          <a href="/likes">
            <span>99</span> palettes
          </a>
        </div>
      </div>
      <ol className="like-list">
        {likes.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
    </div>
  );
};

export default SideBar;
