import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import PhotoItem from "./PhotoItem";
import { useSelector } from "react-redux/es/hooks/useSelector";

const PhotoList = (props) => {
  const { albumName } = props;
  const [albumePictures, setAlbumePictures] = useState("");
  const picturesChanger = useSelector((state) => state.pictures.changer);
  const authConfigUsername = localStorage.getItem("username");
  const authConfigPassword = localStorage.getItem("password");

  const getAlbumsDetails = useCallback(async () => {
    try {
      const res = await axios.get(
        `http://137.74.230.245:8000/album/${albumName}/pictures`,
        {
          auth: {
            username: authConfigUsername,
            password: authConfigPassword,
          },
        }
      );
      setAlbumePictures(res.data);
    } catch (e) {
      console.log(e);
    }
  }, [albumName,authConfigUsername,authConfigPassword]);

  useEffect(() => {
    getAlbumsDetails();
  }, [getAlbumsDetails, picturesChanger]);

  let photos = [];
  if (albumePictures !== "") {
    photos = albumePictures.results;
  }

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {photos.length > 0 ? (
          photos.map((item) => (
            <PhotoItem
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.desc}
              image={item.img}
            ></PhotoItem>
          ))
        ) : (
          <Typography variant="h6" color="inherit" noWrap>
            no picture found
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default PhotoList;
