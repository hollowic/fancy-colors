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
    "&:checked": {
      borderColor: "#0facf3",
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
