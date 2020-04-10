import React, { useState, useRef } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import "./ColorRangeGroup.styles.scss";

export default function ColorRangeGroup() {
  const [hue, setHue] = useState(300);
  const timeoutID = useRef(false);
  const intervalID = useRef(false);

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

  const initWait = 0.5;
  const changeRate = 20;

  const waitIsOver = (input) => {
    if (input) {
      intervalID.current = setInterval(handlePlusClick, 1000 / changeRate);
    } else {
      intervalID.current = setInterval(handleMinusClick, 1000 / changeRate);
    }
  };

  const callBackOnceAndWait = (input) => {
    input ? handlePlusClick() : handleMinusClick();
    timeoutID.current = setTimeout(waitIsOver(input), initWait * 1000);
  };

  const stopTimers = () => {
    clearTimeout(timeoutID.current);
    clearInterval(intervalID.current);
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
          <RemoveIcon
            className="minus"
            onTouchStart={() => callBackOnceAndWait(false)}
            onTouchEnd={stopTimers}
            onTouchMove={stopTimers}
            onMouseDown={() => callBackOnceAndWait(false)}
            onMouseUp={stopTimers}
            onMouseLeave={stopTimers}
            onClick={stopTimers}
          />
          <AddIcon
            className="plus"
            onTouchStart={() => callBackOnceAndWait(true)}
            onTouchEnd={stopTimers}
            onTouchMove={stopTimers}
            onMouseDown={() => callBackOnceAndWait(true)}
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
