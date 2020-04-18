import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  spinner: {
    width: "20px",
    height: "20px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#ffffff transparent transparent",
    borderRadius: "50%",
    animation: "$spin 1s linear infinite",
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(359deg)",
    },
  },
}));

export default function Spinner() {
  const classes = useStyles();
  return <div className={classes.spinner}></div>;
}
