import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import "./ColorRangeGroup.styles.scss";

export default function ColorRangeGroup() {
  return (
    <div className="adjust-h range-group">
      <label>Hue</label>
      <div className="input-number">
        <input
          type="number"
          className="number"
          data-min="0"
          data-max="360"
          min="0"
          max="360"
          tabIndex="1"
          style={{
            width: 40,
            textAlign: "center",
            fontSize: 12,
            height: 23,
            borderRadius: "7px 0px 0px 7px",
            border: "1px solid #d3dce6",
          }}
        />
        <RemoveIcon
          style={{ border: "1px solid #d3dce6", cursor: "pointer" }}
        />
        <AddIcon style={{ border: "1px solid #d3dce6", cursor: "pointer" }} />
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
