import React from "react";
import ReactDOM from "react-dom";
import DarkBg from "./DarkBg";
import AddAlbumModalBox from "./AddAlbumModalBox.js";

const AddAlbumModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DarkBg onClose={props.onClose}></DarkBg>,
        document.getElementById("dark-bg")
      )}
      {ReactDOM.createPortal(
        <AddAlbumModalBox onClose={props.onClose}></AddAlbumModalBox>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default AddAlbumModal;
