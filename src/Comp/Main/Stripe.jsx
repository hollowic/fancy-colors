import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import "./StripeStyles.scss";
const Stripe = ({ backgroundColour, isLocked, handleLockClick, index }) => {
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
        <input type="text" defaultValue={backgroundColour} />
      </Tooltip>
    </div>
  );
};
export default Stripe;
