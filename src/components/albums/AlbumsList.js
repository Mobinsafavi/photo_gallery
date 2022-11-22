import { useEffect, useState, useCallback } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AlbumItem from "./AlbumItem";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux/es/exports";
import axios from "axios";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const albumChanger = useSelector((state) => state.albums.changer);
  const authConfigUsername = localStorage.getItem("username");
  const authConfigPassword = localStorage.getItem("password");

  const getAlbums = useCallback(async () => {
    try {
      const res = await axios.get("http://137.74.230.245:8000/albums", {
        auth: {
          username: authConfigUsername,
          password: authConfigPassword,
        },
      });
      setAlbums(res.data);
    } catch (e) {
      console.log(e);
    }
  } , [authConfigUsername,authConfigPassword] );

  useEffect(() => {
    getAlbums();
  }, [getAlbums, albumChanger]);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {albums.length > 0 ? (
          albums.map((item) => (
            <AlbumItem key={item.id} id={item.id} name={item.name}></AlbumItem>
          ))
        ) : (
          <Typography variant="h6" color="inherit" noWrap>
            no album found
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default AlbumList;
