import React, { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import "./ColorRangeGroup.styles.scss";

export default function ColorRangeGroup() {
  const [hue, setHue] = useState(5);

  const handlePlusClick = () => {
    if (hue < 360) {
      setHue((prevState) => prevState + 1);
    }
  };

  const handleMinusClick = () => {
    if (hue > 0) {
      setHue((prevState) => prevState - 1);
    }
  };

  let timeoutID, intervalID;
  const initWait = 0.5;
  const changeRate = 20;

  const waitIsOver = () => {
    intervalID = setInterval(handlePlusClick, 1000 / changeRate);
    console.log(intervalID);
  };

  const callBackOnceAndWait = () => {
    handlePlusClick();
    console.log("in here");
    timeoutID = setTimeout(waitIsOver, initWait * 1000);
    console.log(timeoutID);
  };

  const stopTimers = () => {
    console.log("out here", timeoutID, intervalID);
    clearTimeout(timeoutID);
    clearInterval(intervalID);
  };

  return (
    <div className="adjust-h range-group">
      <div className="top-portion">
        <label>Hue</label>
        <div className="input-number">
          <input
            value={hue}
            type="text"
            className="number"
            data-min="0"
            data-max="360"
            tabIndex="1"
          />
          <RemoveIcon className="minus" />
          <AddIcon
            className="plus"
            onTouchStart={callBackOnceAndWait}
            onTouchEnd={stopTimers}
            onTouchMove={stopTimers}
            onMouseDown={callBackOnceAndWait}
            onMouseUp={stopTimers}
            onMouseLeave={stopTimers}
            onClick={stopTimers}
          />
        </div>
      </div>
      <input
        type="range"
        className="range"
        min="0"
        max="360"
        value={hue}
        style={{
          width: "100%",
          height: 14,
          background:
            "-webkit-linear-gradient(left, rgb(175, 33, 33), rgb(175, 175, 33), rgb(33, 175, 33), rgb(33, 175, 175), rgb(33, 33, 175), rgb(175, 33, 175), rgb(175, 33, 33))",
        }}
      />
    </div>
  );
}
