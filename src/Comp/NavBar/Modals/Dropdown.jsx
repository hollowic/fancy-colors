import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dropDown: {
    width: "140px",
    height: "32px",
    borderRadius: "7px",
  },
  scroller: {},
  arrow: {},
  list: {},
  listScroller: {},
}));

export default function Dropdown() {
  const classes = useStyles();
  return (
    <div className={classes.dropDown}>
      <input type="hidden" value="Off" />
      <div className={classes.scroller}>
        <input type="text" />
        <div className={classes.list}>
          <div className={classes.listScroller}>
            <div data-index="0">Off</div>
            <div data-index="1">Name</div>
            <div data-index="2">RGB</div>
            <div data-index="3">HSV</div>
            <div data-index="4">CMYK</div>
          </div>
        </div>
      </div>
      <div className={classes.arrow}>
        <i class="fas fa-angle-down" />
      </div>
    </div>
  );
}
