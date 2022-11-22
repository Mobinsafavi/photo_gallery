import React from "react";
import ReactDOM from "react-dom";
import Darkbg from "../albumModal/DarkBg"
import AddPhotoModalBox from "./AddPhotoModalBox.js";

const AddPhotoModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Darkbg onClose={props.onClose}></Darkbg>,
        document.getElementById("dark-bg")
      )}
      {ReactDOM.createPortal(
        <AddPhotoModalBox onClose={props.onClose} param={props.param}></AddPhotoModalBox>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default AddPhotoModal;
