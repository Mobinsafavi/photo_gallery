import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { picturesSliceActions } from "../../store/pictures-slice";

const PhotoItem = (props) => {
  const dispatch = useDispatch();
  const authConfigUsername = localStorage.getItem('username')
  const authConfigPassword = localStorage.getItem('password')

  const deleteRequest = async () => {
    try {
       await axios.delete(
        `http://137.74.230.245:8000/picture/${props.id}`,
        {
          auth: {
            username: authConfigUsername,
            password: authConfigPassword,
          },
        }
      );
      dispatch(picturesSliceActions.changerHandler())
    } catch (e) {
      alert(e);
    }
  };

  const deleteItemHandler = () => {
    deleteRequest();
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia component="img" image={props.image} alt="random" />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small">
            <Link to={`/pictures/${props.id}`}>View picture</Link>
          </Button>
          <Button size="small" onClick={deleteItemHandler}>
            DELETE
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PhotoItem;
