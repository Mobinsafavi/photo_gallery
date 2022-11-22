import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Collapse } from "@mui/material";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { pictureDetailsSliceActions } from "../../store/pictureDetals-slice";
import { useSelector } from "react-redux";

const SinglePhoto = (props) => {
  const [Picture, setPicture] = useState("");
  const [collapseExpanded, setCollapseExpanded] = useState(false);
  const newPictureName = useRef();
  const newPictureDiscription = useRef();
  const dispatch = useDispatch()
  const changer = useSelector(state => state.pictureDetalils.changer)

  console.log(changer);

  const authConfigUsername = localStorage.getItem("username");
  const authConfigPassword = localStorage.getItem("password");

  const submitChangeHandler = async () => {
    let newNameObj = { title: newPictureName.current.value };
    let newDescriptionObj = { desc: newPictureDiscription.current.value };
    let patchData = {};
    if (
      newPictureName.current.value.length > 0 &&
      newPictureDiscription.current.value.length === 0
    ) {
      patchData = { ...newNameObj };
    }

    if (
      newPictureName.current.value.length === 0 &&
      newPictureDiscription.current.value.length > 0
    ) {
      alert('setting name required');
      return
    }

    if (
      newPictureName.current.value.length > 0 &&
      newPictureDiscription.current.value.length > 0
    ) {
      patchData = { ...newDescriptionObj, ...newNameObj };
    }

    try {
      const res = await axios.put(
        `http://137.74.230.245:8000/picture/${props.param}`,
        patchData,
        {
          auth: {
            username: authConfigUsername,
            password: authConfigPassword,
          },
        }
      );
      console.log(res.data);
      dispatch(pictureDetailsSliceActions.changerHandler())
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPictureDetails();
  },[changer]);

  const collapseExpandedHandler = () => {
    setCollapseExpanded(!collapseExpanded);
  };

  const getPictureDetails = async () => {
    try {
      const res = await axios.get(
        `http://137.74.230.245:8000/picture/${props.param}`,
        {
          auth: {
            username: authConfigUsername,
            password: authConfigPassword,
          },
        }
      );
      setPicture(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid
        container
        spacing={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia component="img" image={Picture.img} alt="random" />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {Picture.title}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              {Picture.desc}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Button size="small" onClick={collapseExpandedHandler}>
              Edit details
            </Button>
            <Collapse in={collapseExpanded} sx={{ pt: 3 }}>
              <TextField
                name="imageName"
                fullWidth
                id="imageName"
                label="New image name"
                autoFocus
                inputRef={newPictureName}
              />
              <TextField
                sx={{ mt: 2 }}
                name="imageDesc"
                fullWidth
                id="imageDesc"
                label="New image description"
                autoFocus
                inputRef={newPictureDiscription}
              />
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={submitChangeHandler}
              >
                submit changes
              </Button>
            </Collapse>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default SinglePhoto;
