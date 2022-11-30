import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import albumVector from "../../assets/set_of_album_and_magazine_template_blank_page_vector_570825.jpg";
import { useTranslation } from "react-i18next";
import useDeleteRequest from "../../hooks/useDeleteRequest";

const AlbumItem = (props) => {
  const { t } = useTranslation();

  const { isFetching, refetch } = useDeleteRequest(`/album/${props.name}`);

  const deleteHandler = () => {
    refetch();
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
          <Button size="small" onClick={deleteHandler}>
            {t("DELETE.lable")}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AlbumItem;
