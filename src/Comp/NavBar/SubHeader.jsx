import React from "react";
import "./SubHeaderStyles.scss";
export default function SubHeader() {
  return (
    <div className="sub-header">
      <p>Press the spacebar to generate color schemes!</p>
      <ul>
        <li>
          <i className="fas fa-question-circle"></i>
        </li>
        <li>
          <i className="fas fa-cog"></i>
        </li>
        <li>
          <i className="fas fa-camera"></i>
        </li>
        <li>
          <i className="fas fa-share-alt"></i>
        </li>
        <li>
          <i className="fas fa-bars"></i>
        </li>
      </ul>
    </div>
  );
}
