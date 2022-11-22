import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddAlbumModal from "../albumModal/AddAlbumModal";
import AlbumList from "./AlbumsList";
import { useTranslation } from "react-i18next";

const theme = createTheme();

const Albums = () => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const languageChangeHandler = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  return (
    <React.Fragment>
      {showModal && <AddAlbumModal onClose={closeModalHandler}></AddAlbumModal>}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="relative"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Toolbar>
            <CameraIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              {t("Photo Gallery App.label")}
            </Typography>
          </Toolbar>
          <FormControl
            sx={{
              width: "10%",
              margin: "0.5rem",
            }}
          >
            <InputLabel item id="demo-simple-select-label">
              language
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="language"
              onChange={languageChangeHandler}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="fas">فارسی</MenuItem>
            </Select>
          </FormControl>
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
                {t("Albums list.label")}
              </Typography>

              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained" onClick={showModalHandler}>
                  {t("Adding New Album.label")}
                </Button>
              </Stack>
            </Container>
          </Box>
        </main>
      </ThemeProvider>
      <AlbumList></AlbumList>
    </React.Fragment>
  );
};

export default Albums;
