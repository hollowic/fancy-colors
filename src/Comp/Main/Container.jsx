import React from "react";
import "./ContainerStyles.scss";
import StripeComp from "./Stripe";

const Container = ({
  colours,
  handleLockClick,
  handleAdjustClick,
  handleAlternateShadeClick,
  handleEditColourChange,
  handleAdjustmentColourChange,
}) => {
  return (
    <div id="container">
      {colours.map((el, i) => {
        return (
          <StripeComp
            key={i}
            index={i}
            ID={String(el.ID)}
            isLocked={el.isLocked}
            backgroundColour={el.colour}
            colorPickerVisible={el.colorPickerVisible}
            alternateShadeVisible={el.alternateShadeVisible}
            handleLockClick={handleLockClick}
            handleAdjustClick={handleAdjustClick}
            handleAlternateShadeClick={handleAlternateShadeClick}
            handleEditColourChange={handleEditColourChange}
            handleAdjustmentColourChange={handleAdjustmentColourChange}
          />
        );
      })}
    </div>
  );
};
export default Container;
