import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { IPhotoItem } from "../../interfaces";
import useDeleteRequest from "../../hooks/useDeleteRequest";

interface IPhotoItemProps {
  itemObj: IPhotoItem;
}

const PhotoItem: FC<IPhotoItemProps> = ({ itemObj }) => {
  const { isFetching, refetch } = useDeleteRequest(`/picture/${itemObj.id}`);

  const deleteItemHandler = () => {
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
        <CardMedia component="img" image={itemObj.img} alt="random" />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {itemObj.title}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            {itemObj.desc}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small">
            <Link to={`/pictures/${itemObj.id}`}>View picture</Link>
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
