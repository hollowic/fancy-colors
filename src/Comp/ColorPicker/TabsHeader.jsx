import React from "react";
import "./TabsHeaderStyles.scss";

export default function TabsHeader() {
  return (
    <div className="tabs-header">
      <ul>
        <li onClick={() => console.log("I am clicked")}>HSV</li>
        <li onClick={() => console.log("I am clicked")}>RGB</li>
        <li onClick={() => console.log("I am clicked")}>CMYK</li>
        <li onClick={() => console.log("I am clicked")}>PICK</li>
      </ul>
    </div>
  );
}
