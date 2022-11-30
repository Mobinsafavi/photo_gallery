import { useParams } from "react-router-dom";
import AlbumPhotos from "../components/photos/AlbumPhotos.tsx";

const AlbumPage = () => {
  const params = useParams();
  return <AlbumPhotos param={params.albumName}></AlbumPhotos>;
};

export default AlbumPage;
