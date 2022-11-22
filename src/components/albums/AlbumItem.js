import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { albumsSliceActions } from "../../store/albums-slice";
import { Link } from "react-router-dom";
import albumVector from "../../assets/set_of_album_and_magazine_template_blank_page_vector_570825.jpg";
import { useTranslation } from "react-i18next";

const AlbumItem = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const authConfigUsername = localStorage.getItem("username");
  const authConfigPassword = localStorage.getItem("password");

  const deleteRequest = async () => {
    try {
      await axios.delete(`http://137.74.230.245:8000/album/${props.name}`, {
        auth: {
          username: authConfigUsername,
          password: authConfigPassword,
        },
      });
      dispatch(albumsSliceActions.changerHandler());
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
        <CardMedia component="img" image={albumVector} alt="random" />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {props.name}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small">
            <Link to={`/albums/${props.name}`}>{t("View.label")} </Link>
          </Button>
          <Button size="small" onClick={deleteItemHandler}>
            {t("DELETE.lable")}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AlbumItem;
