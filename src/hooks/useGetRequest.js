import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "../api";
import { useQuery } from "@tanstack/react-query";

const getData = async (reqUrl) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(reqUrl, {});
      resolve(res);
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
};

const useGetRequest = (reqUrl) => {
  const Changer = useSelector((state) => state.changer.changer);

  const { data, isLoading, refetch } = useQuery({
    queryFn: () => getData(reqUrl),
    queryKey: [Changer],
  });

  return { data, isLoading, refetch };
};

export default useGetRequest;
