import styles from "./Modal.module.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import axios from "../../api";
import { useDispatch } from "react-redux/es/exports";
import { changerSliceActions } from "../../store/changer-slice";

const AddAlbumModalBox = (props) => {
  const newAlbumeName = useRef();
  const dispatch = useDispatch();

  const addAlbumHandler = () => {
    const albumName = newAlbumeName.current.value;
    postNewAlbumHandler(albumName);
    props.onClose();
  };

  const postNewAlbumHandler = async (albumName) => {
    const postData = { name: albumName };
    try {
      await axios.post("/albums", postData);
      dispatch(changerSliceActions.changerHandler());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid container item xs={4} className={styles.modal}>
      <Grid
        item
        xs={12}
        className={styles.modalHeader}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <h5 className={styles.heading}> Adding Form</h5>
      </Grid>
      <button className={styles.closeBtn} onClick={props.onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </button>
      <div className={styles.modalContent}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="AlbumName"
          label="AlbumName"
          name="AlbumName"
          autoFocus
          inputRef={newAlbumeName}
        />
      </div>
      <div className={styles.modalActions}>
        <div className={styles.actionsContainer}>
          <button className={styles.deleteBtn} onClick={addAlbumHandler}>
            Add Album
          </button>
        </div>
      </div>
    </Grid>
  );
};

export default AddAlbumModalBox;
