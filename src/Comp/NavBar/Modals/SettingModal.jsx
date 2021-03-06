import React from "react";
import Switch from "./Switch";
import Dropdown from "./Dropdown";
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
    padding: "75px 20px 20px",
    outline: 0,
    width: "350px",
    height: "200px",
    boxShadow: "rgba(0, 0, 0, .04) 0 0 0 1px, rgba(0, 0, 0, .1) 0 2px 10px",
    position: "relative",
  },
  header: {
    position: "absolute",
    display: "flex",
    height: "55px",
    width: "100%",
    top: 0,
    left: 0,
    borderBottom: "1px solid #e8edf2",
    alignItems: "center",
  },
  headerTitle: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#9facbd",
  },
  close: {
    color: "#d3dce6",
    width: "55px",
    height: "55px",
    position: "absolute",
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      color: "#9facbd",
    },
  },
  settingInput: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "27px",
    marginBottom: "9px",
  },
  label: {
    fontSize: "14px",
    padding: "10px 0",
    marginBottom: "5px",
  },
}));

export default function SettingModal({ open, handleClose }) {
  const classes = useStyles();
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => handleClose("settings")}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.header}>
              <div className={classes.headerTitle}>Generator Settings</div>
              <div className={classes.close}>
                <i
                  className="fas fa-times modal-close"
                  onClick={() => handleClose("settings")}
                />
              </div>
            </div>

            <div className={classes.settingInput}>
              <label className={classes.label}>Isolation mode</label>
              <Switch />
            </div>
            <div className={classes.settingInput}>
              <label className={classes.label}>Monochromatic mode</label>
              <Switch />
            </div>
            <div className={classes.settingInput}>
              <label className={classes.label}>Secondary info</label>
              <Dropdown />
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
