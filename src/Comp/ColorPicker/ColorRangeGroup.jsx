import React from "react";

export default function ColorRangeGroup() {
  return (
    <div className="adjust-h range-group">
      <label>Hue</label>
      <div className="input-number">
        <input
          type="text"
          className="number"
          data-min="0"
          data-max="360"
          tabIndex="1"
        />
        <i className="fas fa-minus"></i>
        <i className="fas fa-plus"></i>
      </div>

      <input
        type="range"
        className="range"
        min="0"
        max="360"
        value="150"
        style={{
          background:
            "-webkit-linear-gradient(left, rgb(175, 33, 33), rgb(175, 175, 33), rgb(33, 175, 33), rgb(33, 175, 175), rgb(33, 33, 175), rgb(175, 33, 175), rgb(175, 33, 33))",
        }}
      />
    </div>
  );
}
