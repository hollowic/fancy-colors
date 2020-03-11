import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";

const ColorPanel = props => {
  //Random HSL value
  const generateRandomHSL = () => {
    const h = Math.floor(Math.random() * 361);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);
    return `hsl(${h},${s}%,${l}%)`;
  };
  //Returns the selected query
  const fetchDropDownParams = param => {
    if (
      param === "name" ||
      param === "rgb" ||
      param === "hsl" ||
      param === "hsv"
    ) {
      setColorQuery([param, "id"]);
    }
    if (param === "monochrome" || param === "analogic" || param === "quad")
      setColorQuery([param, "scheme"]);
  };
  //Color div hook
  const [color, setColor] = useState({
    div1: generateRandomHex(),
    div2: generateRandomHex(),
    div3: generateRandomHex(),
    div4: generateRandomHex()
  });
  //Color info hook
  const [colorInfo, setColorInfo] = useState({
    info: null
  });
  //Creation timestamp
  const [timeStamp, setTimeStamp] = useState(new Date());
  //TimeStamp options
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  //get time function
  const timeSince = function(time) {
    const now = new Date(Date.now());
    const past = new Date(time);
    const mins = (now.getTime() - past.getTime()) / (60 * 1000);
    const hours = (now.getTime() - past.getTime()) / (60 * 60 * 1000);
    const days = (now.getTime() - past.getTime()) / (24 * 60 * 60 * 1000);
    let result = "";
    if (days > 1) {
      return (result += `${Math.floor(days)} Day`);
    }
    if (hours > 1) {
      return (result += `${Math.floor(hours)} Hour`);
    }
    if (mins > 1) {
      return (result += `${Math.floor(mins)} Min`);
    }
    if (mins < 1) {
      return "Now";
    }
  };
  //Color query hook
  const [colorQuery, setColorQuery] = useState(["name", "id"]);
  //Fetch info about color
  const getInfo = color => {
    const clean = color.slice(1);
    const proxy = "http://0.0.0.0:8080/"; //local machine as server
    if (colorQuery[1] === "scheme") {
      fetch(
        proxy +
          `https://www.thecolorapi.com/${colorQuery[1]}?hex=${clean}&mode=${colorQuery[0]}&count=4&format=json`
      )
        .then(res => res.json())
        .then(response => {
          console.log("Success:", response);
          setColor({
            div1: response.colors[0].hex.value,
            div2: response.colors[1].hex.value,
            div3: response.colors[2].hex.value,
            div4: response.colors[3].hex.value
          });
        })
        .catch(error => console.error("Error:", error));
    }
    if (colorQuery[1] === "id") {
      fetch(proxy + `http://thecolorapi.com/${colorQuery[1]}?hex=${clean}`)
        .then(res => res.json())
        .then(response => {
          console.log("Success:", response);
          setColorInfo({
            info: `${response[colorQuery[0]].value}`
          });
        })
        .catch(error => console.error("Error:", error));
    }
  };
  return (
    <div className="color-panel">
      <i
        onClick={() => {
          props.remove(props.uniqueID);
        }}
        className="fas fa-minus"
      ></i>
      <div
        onClick={() => getInfo(color.div1)}
        className="color1"
        style={{ backgroundColor: color.div1 }}
      >
        <p className="hover-content">{color.div1}</p>
      </div>
      <div
        onClick={() => getInfo(color.div2)}
        className="color2"
        style={{ backgroundColor: color.div2 }}
      >
        <p className="hover-content">{color.div2}</p>
      </div>
      <div
        onClick={() => getInfo(color.div3)}
        className="color3"
        style={{ backgroundColor: color.div3 }}
      >
        <p className="hover-content">{color.div3}</p>
      </div>
      <div
        onClick={() => getInfo(color.div4)}
        className="color4"
        style={{ backgroundColor: color.div4 }}
      >
        <p className="hover-content">{color.div4}</p>
      </div>
      <button
        onClick={() =>
          setColor({
            div1: generateRandomHex(),
            div2: generateRandomHex(),
            div3: generateRandomHex(),
            div4: generateRandomHex()
          })
        }
      >
        Randomize
      </button>
      <div className="colorBlock">{colorInfo.info}</div>
      <DropDown fetchDropDownParams={fetchDropDownParams} />
      <i
        onClick={e =>
          e.target.style.color === "rgb(219, 48, 86)"
            ? (e.target.style.color = "rgb(36, 54, 69)")
            : (e.target.style.color = "rgb(219, 48, 86)")
        }
        className="fas fa-heart"
      ></i>
      <div className="time-stamp">{timeSince(timeStamp)}</div>
    </div>
  );
};

export default ColorPanel;
