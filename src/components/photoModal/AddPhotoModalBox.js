import styles from "../albumModal/Modal.module.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { picturesSliceActions } from "../../store/pictures-slice";

const AddPhotoModalBox = (props) => {
  const [ImageInput, setImageInput] = useState("");
  const pictureTitle = useRef();
  const pictureDescription = useRef();
  const dispatch = useDispatch();

  const authConfigUsername = localStorage.getItem("username");
  const authConfigPassword = localStorage.getItem("password");

  const imageInputHandler = (event) => {
    setImageInput(event.target.files[0]);
  };

  const addAlbumHandler = () => {
    var bodyFormData = new FormData();
    bodyFormData.append("title", pictureTitle.current.value);
    bodyFormData.append("desc", pictureDescription.current.value);
    bodyFormData.append("img", ImageInput);
    postNewAlbumHandler(bodyFormData);
    props.onClose();
  };

  const postNewAlbumHandler = async (bodyFormData) => {
    try {
      await axios.post(
        `http://137.74.230.245:8000/album/${props.param}/pictures`,
        bodyFormData,
        {
          auth: {
            username: authConfigUsername,
            password: authConfigPassword,
          },
        }
      );
      dispatch(picturesSliceActions.changerHandler());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid item container xs={4} className={styles.modal}>
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
      <Grid
        className={styles.modalContent}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Grid item xs={12} sm={5}>
            <TextField
              name="title"
              required
              fullWidth
              id="title"
              label="Title"
              autoFocus
              inputRef={pictureTitle}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              inputRef={pictureDescription}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <input type="file" onChange={imageInputHandler} />
        </Grid>
      </Grid>
      <div className={styles.modalActions}>
        <div className={styles.actionsContainer}>
          <button className={styles.deleteBtn} onClick={addAlbumHandler}>
            Add Photo
          </button>
        </div>
      </div>
    </Grid>
  );
};

export default AddPhotoModalBox;
