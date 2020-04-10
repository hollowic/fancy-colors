import React, { useState, useRef } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import "./ColorRangeGroup.styles.scss";

const initWait = 0.5;
const changeRate = 20;

export default function ColorRangeGroup({ label, limit }) {
  const [currentValue, setCurrentValue] = useState(100);
  const timeoutID = useRef(false);
  const intervalID = useRef(false);

  const handlePlusClick = () => {
    setCurrentValue((prevState) => {
      if (prevState < limit) {
        return prevState + 1;
      } else {
        return limit;
      }
    });
  };

  const handleMinusClick = () => {
    setCurrentValue((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      } else {
        return 0;
      }
    });
  };

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

  const handleOnChange = (e) => {
    const regex = /[0-9]/;

    if (
      e.nativeEvent.inputType === "deleteContentBackward" &&
      currentValue.length === 1
    ) {
      setCurrentValue(0);
      return;
    }

    if (
      e.nativeEvent.inputType === "deleteContentBackward" &&
      currentValue.length !== 1
    ) {
      setCurrentValue((prevState) => {
        return Math.floor(prevState / 10);
      });
    }

    if (regex.test(e.nativeEvent.data)) {
      if (currentValue === 0) {
        setCurrentValue(Number(e.nativeEvent.data));
        return;
      }
      if (Number(e.target.value) <= limit) {
        setCurrentValue(e.target.value);
      }
    }
  };

  return (
    <div className="adjust-h range-group">
      <div className="top-portion">
        <label>{label}</label>
        <div className="input-number">
          <input
            value={currentValue}
            type="text"
            className="number"
            data-min="0"
            data-max={limit}
            maxLength={3}
            onChange={handleOnChange}
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
        max={limit}
        value={currentValue}
        onChange={(e) => console.log(e)}
        style={{
          background:
            "-webkit-linear-gradient(left, rgb(175, 33, 33), rgb(175, 175, 33), rgb(33, 175, 33), rgb(33, 175, 175), rgb(33, 33, 175), rgb(175, 33, 175), rgb(175, 33, 33))",
        }}
      />
    </div>
  );
}
