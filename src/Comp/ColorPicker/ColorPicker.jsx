import React from "react";
import "./ColorPickerStyles.scss";

const ColorPicker = (props) => {
  return (
    <>
      <div className="tabs-header">
        <ul>
          <li>HSV</li>
          <li>RGB</li>
          <li>CMYK</li>
          <li>PICK</li>
        </ul>
      </div>
      <div className="tabs">
        <div className="adjust-hsv"></div>
        <div className="adjust-rgb"></div>
        <div className="adjust-cmyk"></div>
        <div className="adjust-pick">
          <div className="adjust-pick-picker">
            <div className="adjust-pick-s" data-value="52"></div>
            <div className="adjust-pick-v" data-value="62"></div>
            <div
              className="adjust-pick-handle"
              style={{ transform: "translate3d(131.719px, -93px, 0px)" }}
            ></div>
          </div>
          <div className="adjust-pick-h">
            <input
              type="range"
              className="range"
              min="0"
              max="360"
              value="50"
              style={{
                background:
                  "-webkit-linear-gradient(left, rgb(158, 74, 74), rgb(158, 158, 74), rgb(74, 158, 74), rgb(74, 158, 158), rgb(74, 74, 158), rgb(158, 74, 158), rgb(158, 74, 74))",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
