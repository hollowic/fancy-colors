import React, { useState, useRef } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Spinner from "./Spinner";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(30, 45, 90, 0.64)",
  },
  paper: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "75px 20px 20px",
    outline: 0,
    width: "350px",
    height: "420px",
    boxShadow: "rgba(0, 0, 0, .04) 0 0 0 1px, rgba(0, 0, 0, .1) 0 2px 10px",
    position: "relative",
    "&.error": {
      animation: "$shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
    },
  },
  root: {
    background: "linear-gradient(45deg, #23ADF0 30%, #04C8F4 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(104, 109, 255, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    width: "310px",
    textAlign: "center",
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
  imagePickerArea: {
    width: "100%",
    height: "137px",
    border: "1px dashed #d3dce6",
    borderRadius: "5px",
    position: "relative",
    color: "#d3dce6",
    cursor: "pointer",
    "&:hover": {
      color: "#8e98a7",
    },
  },
  hr: {
    height: "0",
    border: "none",
    borderBottom: "1px solid #e8edf2",
    width: "100%",
    margin: "20px 0",
  },
  imageInput: {
    opacity: "0",
    cursor: "pointer",
    height: "100%",
    width: "100%",
  },
  imageAreaText: {
    textAlign: "center",
    position: "absolute",
    width: "100%",
    bottom: "20px",
    fontSize: "13px",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    height: "15px",
    lineHeight: "14px",
    fontSize: "14px",
  },
  linkInput: {
    width: "100%",
    marginBottom: "15px",
    padding: "16px 18px",
    borderRadius: "7px",
    border: "1px solid #d3dce6",
    outline: "none",
  },
  "@keyframes shake": {
    "10%, 90%": {
      transform: "translate3d(-1px, 0, 0)",
    },

    "20%, 80%": {
      transform: "translate3d(2px, 0, 0)",
    },

    "30%, 50%, 70%": {
      transform: "translate3d(-4px, 0, 0)",
    },

    "40%, 60%": {
      transform: "translate3d(4px, 0, 0)",
    },
  },
}));

export default function UploadModal({ open, handleClose }) {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const ref = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      if (
        e.target.files[0].type === "image/jpeg" ||
        e.target.files[0].type === "image/png"
      ) {
        if (e.target.files[0].size / 1048576 < 5) {
          //do someshit
          console.log("i got the image file");
        }
      } else {
        setError(true);
        ref.current.classList.add("error");
        setTimeout(() => ref.current.classList.remove("error"), 500);
        console.log("uh oh something went wrong");
      }
    }
  };

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const handleOkSubmit = async (e) => {
    console.log("i am looking for your query");
    // try {
    //   const res = await axios.get(query);
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <>
      <Modal
        aria-labelledby="Pick Colors From an Image"
        aria-describedby="Upload your own image file or use a remote link"
        className={classes.modal}
        open={open}
        onClose={() => handleClose("camera")}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} ref={ref}>
            <div className={classes.header}>
              <div className={classes.headerTitle}>
                Pick Colors From an Image
              </div>
              <div className={classes.close}>
                <i
                  className="fas fa-times modal-close"
                  onClick={() => handleClose("camera")}
                />
              </div>
            </div>
            <div className={classes.imagePickerArea}>
              {error && (
                <Tooltip
                  title="This is not a valid image"
                  arrow
                  placement="top"
                >
                  <i
                    className="fas fa-exclamation-circle"
                    style={{
                      position: "absolute",
                      color: "#e0356c",
                      top: 15,
                      right: 15,
                      zIndex: 90,
                    }}
                  />
                </Tooltip>
              )}
              <i
                className="far fa-images"
                style={{
                  position: "absolute",
                  top: "40px",
                  fontSize: "40px",
                  left: "50%",
                  marginLeft: "-20px",
                }}
              />
              <div className={classes.imageAreaText}>Browse or drop image</div>
              {/* <div className={classes.imageAreaText}>Drop image</div> */}
              <input
                type="file"
                className={classes.imageInput}
                onChange={handleFileChange}
              />
            </div>
            <hr className={classes.hr}></hr>
            <div className="link-input-group" style={{ height: "145px" }}>
              <label className={classes.label}>Remote image</label>
              <input
                type="text"
                value={query}
                onChange={handleOnChange}
                placeholder="http://"
                className={classes.linkInput}
              />
              <Button className={classes.root} onClick={handleOkSubmit}>
                {isLoading ? <Spinner /> : "OK"}
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
