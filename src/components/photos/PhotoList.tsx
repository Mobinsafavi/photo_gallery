import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PhotoItem from "./PhotoItem";
import React, { FC } from "react";
import { IPhotoItem } from "../../interfaces";

interface IphotoListProps {
  photos: IPhotoItem[]
}

const PhotoList: FC<IphotoListProps> = (props) => {
  
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {props.photos?.length > 0 ? (
          props.photos?.map((item) => (
            <PhotoItem
              itemObj={{
                id: item.id,
                title: item.title,
                desc: item.desc,
                img: item.img,
              }}
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
