import React, { useState, useRef } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import "./StripeStyles.scss";
import { validateHexValue } from "../../Helpers/helperFn";
const Stripe = ({ backgroundColour, isLocked, handleLockClick, index }) => {
  const [colour, setColour] = useState(backgroundColour);
  const handleOnFocus = e => {
    e.target.focus();
    textInput.current.setSelectionRange(1, 7);
  };

  const textInput = useRef(null);

  const inputFilter = e => {
    const regex = /[#0-9A-F]/i;
    if (regex.test(e.target.value[e.target.value.length - 1])) {
      setColour(e.target.value.toUpperCase());
    }
  };

  // const revertColour = () => {
  //   textInput.current.value = colour;
  // };

  return (
    <div
      className="single-stripe"
      style={{ backgroundColor: backgroundColour }}
    >
      <Tooltip title="Alternative shades" arrow>
        <i className="fas fa-th" />
      </Tooltip>

      <Tooltip title="Drag" arrow>
        <i className="fas fa-arrows-alt-h" />
      </Tooltip>

      <Tooltip title="Adjust" arrow>
        <i className="fas fa-sliders-h" />
      </Tooltip>

      {isLocked ? (
        <Tooltip title="Unlock" arrow>
          <i
            className="fas fa-lock"
            onClick={() => handleLockClick(index)}
            style={{ visibility: "visible", opacity: 1 }}
          />
        </Tooltip>
      ) : (
        <Tooltip title="Lock" arrow>
          <i
            className="fas fa-lock-open"
            onClick={() => handleLockClick(index)}
          />
        </Tooltip>
      )}

      <Tooltip title="Edit" arrow>
        <input
          ref={textInput}
          type="text"
          maxLength="7"
          value={colour}
          onFocus={handleOnFocus}
          onChange={e => inputFilter(e)}
          onBlur={e => console.log(validateHexValue(e.target.value))}
          onKeyPress={e => {
            if (e.key === "Enter") {
              console.log(validateHexValue(e.target.value));
            }
          }}
        />
      </Tooltip>
    </div>
  );
};
export default Stripe;
