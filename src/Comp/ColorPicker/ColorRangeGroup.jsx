import React, { useState, useRef, useEffect } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import "./ColorRangeGroupStyles.scss";

const initWait = 0.5;
const changeRate = 20;

export default function ColorRangeGroup({
  label,
  index,
  limit,
  initialParam,
  handleAdjustmentColourChange,
}) {
  const [currentValue, setCurrentValue] = useState(initialParam);
  const timeoutID = useRef(false);
  const intervalID = useRef(false);

  useEffect(() => {
    setCurrentValue(initialParam);
  }, [initialParam]);

  const handlePlusClick = () => {
    setCurrentValue((prevState) => {
      if (prevState < limit) {
        handleAdjustmentColourChange(index, label, Number(prevState + 1));
        return Number(prevState + 1);
      } else {
        return limit;
      }
    });
  };

  const handleMinusClick = () => {
    setCurrentValue((prevState) => {
      if (prevState > 0) {
        handleAdjustmentColourChange(index, label, Number(prevState - 1));
        return Number(prevState - 1);
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
    //To do: write tests for this, manual testing is not enough
    const regex = /[0-9]/;

    if (
      e.nativeEvent.inputType === "deleteContentBackward" &&
      currentValue.length === 1
    ) {
      setCurrentValue(0);
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
      }
      if (Number(e.target.value) <= limit) {
        setCurrentValue(Number(e.target.value));
      }
    }
  };

  const handleDragOnChange = (e) => {
    setCurrentValue(Number(e.target.value));
    handleAdjustmentColourChange(index, label, Number(e.target.value));
  };

  return (
    <div className="range-group">
      <div className="top-portion">
        <label>{label}</label>
        <div className="input-number">
          <input
            value={currentValue}
            type="text"
            className="number"
            min={0}
            max={limit}
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
        min={0}
        max={limit}
        value={currentValue}
        onChange={handleDragOnChange}
        style={{
          background:
            "-webkit-linear-gradient(left, rgb(255, 0, 0), rgb(255, 255, 0), rgb(0, 255, 0), rgb(0, 255, 255), rgb(0, 0, 255), rgb(255, 0, 255), rgb(255, 0, 0))",
        }}
      />
    </div>
  );
}
