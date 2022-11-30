import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AlbumItem from "./AlbumItem";
import Typography from "@mui/material/Typography";
import useGetRequest from "../../hooks/useGetRequest";

const AlbumList = () => {
  const { data, isLoading } = useGetRequest("/albums");

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {data?.length > 0 ? (
          data.map((item) => (
            <AlbumItem key={item.id} id={item.id} name={item.name}></AlbumItem>
          ))
        ) : isLoading ? (
          <Typography variant="h6" color="inherit" noWrap>
            Loading...
          </Typography>
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
