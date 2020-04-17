import React, { useState } from "react";
import SettingsModal from "./Modals/SettingModal";
import HelpModal from "./Modals/HelpModal";
import UploadModal from "./Modals/UploadModal";
import ExportModal from "./Modals/ExportModal";
import Tooltip from "@material-ui/core/Tooltip";
import "./SubHeaderStyles.scss";

export default function SubHeader({ toggleShades }) {
  const [open, setOpen] = useState({
    help: false,
    settings: false,
    camera: false,
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

  const [active, setActive] = useState(false);

  const toggleActive = () => {
    toggleShades();
    setActive((prevState) => !prevState);
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
          <span className="divider"></span>
        </li>
        <li>
          <Tooltip title="Settings" arrow placement="top">
            <i className="fas fa-cog" onClick={() => handleOpen("settings")} />
          </Tooltip>
        </li>
        <li>
          <span className="divider"></span>
        </li>
        <li>
          <Tooltip title="Pick Colors From Image" arrow placement="top">
            <i className="fas fa-camera" onClick={() => handleOpen("camera")} />
          </Tooltip>
        </li>
        <li>
          <span className="divider"></span>
        </li>
        <li>
          <Tooltip title="Toggle Alternative Shades" arrow placement="top">
            <i
              className={active ? "fas fa-square active" : "fas fa-square"}
              onClick={toggleActive}
            />
          </Tooltip>
        </li>
        <li>
          <span className="divider"></span>
        </li>
        <li>
          <Tooltip title="Export" arrow placement="top">
            <i
              className="fas fa-share-alt"
              onClick={() => handleOpen("export")}
            />
          </Tooltip>
        </li>
        <li>
          <span className="divider"></span>
        </li>
        <li>
          <Tooltip title="Saved Palettes" arrow placement="top">
            <i
              className="fas fa-bars"
              onClick={() => console.log("This will be great!")}
            />
          </Tooltip>
        </li>
      </ul>
      <HelpModal handleClose={handleClose} open={open.help} />
      <SettingsModal handleClose={handleClose} open={open.settings} />
      <UploadModal handleClose={handleClose} open={open.camera} />
      <ExportModal handleClose={handleClose} open={open.export} />
    </div>
  );
}
