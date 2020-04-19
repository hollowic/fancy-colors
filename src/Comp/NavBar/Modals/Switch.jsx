import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  switch: {
    "-webkit-appearance": "none",
    border: "1px solid #d3dce6",
    width: "40px",
    height: "22px",
    borderRadius: "11px",
    outline: "none",
    position: "relative",
    cursor: "pointer",
    "&:checked": {
      borderColor: "#0facf3",
    },
    "&:hover": {
      borderColor: "#b2c2d4",
    },
    "&::after": {
      background: "#d3dce6",
      content: '""',
      width: "16px",
      height: "16px",
      position: "absolute",
      borderRadius: "50%",
      top: "2px",
      left: "2px",
    },
  },
}));

export default function Switch() {
  const classes = useStyles();
  return (
    <div>
      <input type="checkbox" className={classes.switch} />
    </div>
  );
}
