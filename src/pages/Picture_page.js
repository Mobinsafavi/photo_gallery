import { useParams } from "react-router-dom";
import SinglePhoto from "../components/photos/SinglePhoto";

const PicturePage = () => {
  const params = useParams();
  return <SinglePhoto param={params.pictureId}></SinglePhoto>;
};

export default PicturePage;
