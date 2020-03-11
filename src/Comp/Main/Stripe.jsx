import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import "./StripeStyles.scss";
const Stripe = ({ backgroundColour, locked }) => {
  const [isLocked, setIsLocked] = useState(false);

  const handleLockClick = () => {
    setIsLocked(isLocked ? false : true);
  };

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
            onClick={handleLockClick}
            style={{ visibility: "visible", opacity: 1 }}
          />
        </Tooltip>
      ) : (
        <Tooltip title="Lock" arrow>
          <i className="fas fa-lock-open" onClick={handleLockClick} />
        </Tooltip>
      )}

      <Tooltip title="Edit" arrow>
        <p>{backgroundColour}</p>
      </Tooltip>
    </div>
  );
};
export default Stripe;
