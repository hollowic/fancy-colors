import React from "react";
import "./SubHeaderStyles.scss";
import Tooltip from "@material-ui/core/Tooltip";

export default function SubHeader() {
  return (
    <div className="sub-header">
      <p>Press the spacebar to generate color schemes!</p>
      <ul>
        <li>
          <Tooltip title="Help" arrow placement="top">
            <i className="fas fa-question-circle"></i>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Settings" arrow placement="top">
            <i className="fas fa-cog"></i>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Pick Colors From Image" arrow placement="top">
            <i className="fas fa-camera"></i>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Toggle Alternative Shades" arrow placement="top">
            <i className="fas fa-th" />
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Export" arrow placement="top">
            <i className="fas fa-share-alt"></i>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Saved Palettes" arrow placement="top">
            <i className="fas fa-bars"></i>
          </Tooltip>
        </li>
      </ul>
    </div>
  );
}
