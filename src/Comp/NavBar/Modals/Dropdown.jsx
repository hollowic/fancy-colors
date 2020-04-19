import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dropDown: {},
  scroller: {},
  arrow: {},
}));

export default function Dropdown() {
  const classes = useStyles();
  return (
    <div className={classes.dropdown}>
      <input type="hidden" value="Off" />
      <div className={classes.scroller}></div>
      <div className={classes.arrow}>
        <i class="fas fa-angle-down" />
      </div>
    </div>
  );
}
