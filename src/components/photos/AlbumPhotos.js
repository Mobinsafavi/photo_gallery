import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddPhotoModal from "../photoModal/AddPhotoModal";
import PhotoList from "./PhotoList";
import { Collapse, Grid } from "@mui/material";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const theme = createTheme();

const AlbumPhotos = (props) => {
  const { param } = props;
  const [showModal, setShowModal] = useState(false);
  const [collapseExpanded, setCollapseExpanded] = useState(false);
  const newAlbumeName = useRef();
  const history = useHistory();

  const authConfigUsername = localStorage.getItem("username");
  const authConfigPassword = localStorage.getItem("password");

  const redirectHandler = () => {
    history.push("/home");
  };

  const submitChangeHandler = async () => {
    if (newAlbumeName.current.value.length > 0) {
      try {
        await axios.put(
          `http://137.74.230.245:8000/album/${param}`,
          { name: newAlbumeName.current.value },
          {
            auth: {
              username: authConfigUsername,
              password: authConfigPassword,
            },
          }
        );
        redirectHandler();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const collapseExpandedHandler = () => {
    setCollapseExpanded(!collapseExpanded);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  return (
    <React.Fragment>
      {showModal && <AddPhotoModal onClose={closeModalHandler} param={param}></AddPhotoModal>}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
            Photo Gallery App
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {param} Album
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained" onClick={showModalHandler}>
                  Adding New Photo
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={collapseExpandedHandler}
                >
                  Edit Album Name
                </Button>
              </Stack>
              <Grid item>
                <Collapse in={collapseExpanded} sx={{ pt: 4 }}>
                  <TextField
                    name="albumName"
                    required
                    fullWidth
                    id="albumName"
                    label="New album name"
                    autoFocus
                    inputRef={newAlbumeName}
                  />
                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={submitChangeHandler}
                  >
                    submit change
                  </Button>
                </Collapse>
              </Grid>
            </Container>
          </Box>
        </main>
      </ThemeProvider>
      <PhotoList albumName={param}></PhotoList>
    </React.Fragment>
  );
};

export default AlbumPhotos;
