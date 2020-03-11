import React, { useState, useEffect } from "react";

const DropDown = props => {
  const [selection, setSelection] = useState([
    "name",
    "rgb",
    "hsl",
    "hsv",
    "monochrome",
    "analogic",
    "quad"
  ]);

  return (
    <React.Fragment>
      <ul className="drop-down-content">
        {selection.map((el, index) => {
          return (
            <li onClick={() => props.fetchDropDownParams(el)} key={index}>
              {el.toUpperCase()}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default DropDown;
