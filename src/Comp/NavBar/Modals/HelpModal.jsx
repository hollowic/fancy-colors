import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(30, 45, 90, 0.64)",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    width: "350px",
    height: "200px",
    boxShadow: "rgba(0, 0, 0, .04) 0 0 0 1px, rgba(0, 0, 0, .1) 0 2px 10px",
  },
  h2: {
    fontWeight: "900",
    fontSize: "26px",
    textAlign: "center",
  },
}));

export default function HelpModal({ open, handleClose }) {
  const classes = useStyles();
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => handleClose("help")}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className={classes.h2}>Welcome!</h2>
            <span role="img" aria-label="book emoji">
              📖 personal project for learning 📖
            </span>
            <p>
              <a
                href="https://coolors.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clone of Coolor
              </a>
            </p>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
