import { useQuery } from "@tanstack/react-query";
import axios from "../api";
import { changerSliceActions } from "../store/changer-slice";
import { useAppDispatch } from "src/store/hooks";

const useDeleteRequest = (reqUrl: string) => {
  const dispatch = useAppDispatch();

  const { refetch, isFetching } = useQuery({
    queryFn: () => deleteRequest(reqUrl),
    queryKey: ["test"],
    enabled: false,
  });

  const deleteRequest = async (reqUrl: string) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.delete(reqUrl, {});
        dispatch(changerSliceActions.changerHandler());
        resolve(res);
      } catch (e) {
        reject(e);
        alert(e);
      }
    });
  };

  return { refetch, isFetching };
};

export default useDeleteRequest;
