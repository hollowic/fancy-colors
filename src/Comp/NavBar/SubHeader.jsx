import React, { useState } from "react";
import SettingsModal from "./Modals/SettingModal";
import HelpModal from "./Modals/HelpModal";
import "./SubHeaderStyles.scss";
import Tooltip from "@material-ui/core/Tooltip";

export default function SubHeader() {
  const [open, setOpen] = useState({
    help: false,
    settings: false,
    camera: false,
    shades: false,
    export: false,
  });

  const handleOpen = (item) => {
    setOpen((prevState) => {
      return { ...prevState, [item]: true };
    });
  };

  const handleClose = (item) => {
    setOpen((prevState) => {
      return { ...prevState, [item]: false };
    });
  };

  return (
    <div className="sub-header">
      <p>Press the spacebar to generate color schemes!</p>
      <ul>
        <li>
          <Tooltip title="Help" arrow placement="top">
            <i
              className="fas fa-question-circle"
              onClick={() => handleOpen("help")}
            />
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Settings" arrow placement="top">
            <i className="fas fa-cog" onClick={() => handleOpen("settings")} />
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Pick Colors From Image" arrow placement="top">
            <i className="fas fa-camera"></i>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Toggle Alternative Shades" arrow placement="top">
            <i className="fas fa-th" />
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Export" arrow placement="top">
            <i className="fas fa-share-alt"></i>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Saved Palettes" arrow placement="top">
            <i className="fas fa-bars"></i>
          </Tooltip>
        </li>
      </ul>
      <HelpModal handleClose={handleClose} open={open.help} />
      <SettingsModal handleClose={handleClose} open={open.settings} />
    </div>
  );
}
