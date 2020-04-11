import React, { useState } from "react";
import "./TabsHeaderStyles.scss";

export default function TabsHeader() {
  const [active, setActive] = useState(initialState);

  const handleActiveTab = () => {};

  return (
    <div className="tabs-header">
      <ul>
        <li
          className={false ? "active" : "inactive"}
          onClick={() => console.log("I am clicked")}
        >
          HSV
        </li>
        <li
          className={false ? "active" : "inactive"}
          onClick={() => console.log("I am clicked")}
        >
          RGB
        </li>
        <li
          className={false ? "active" : "inactive"}
          onClick={() => console.log("I am clicked")}
        >
          PICK
        </li>
      </ul>
    </div>
  );
}
