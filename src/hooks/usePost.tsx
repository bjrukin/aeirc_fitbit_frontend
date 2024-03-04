import { useCallback, useState } from "react";
import Service from "../setup/Service";

const usePost = (url: string) => {
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const postData = useCallback(
    async (body: any) => {
      setIsLoading(true);
      try {
        const response = await Service.post(url, body);
        console.log("The response is", response);
        setData(response?.data?.data);
        setIsLoading(false);
      } catch (err) {
        setError("Error");
        console.log("The err is", err);
        setIsLoading(false);
      }
    },
    [url]
  );

  return { loading, data, error, postData };
};

export default usePost;
