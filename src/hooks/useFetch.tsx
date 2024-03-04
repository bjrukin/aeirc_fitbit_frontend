import { useCallback, useEffect, useState } from "react";
import Service from "../setup/Service";

const useFetch = (url: string) => {
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<any[]>([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await Service.get(url);
      console.log("The response is", response?.data);
      const value: any = response?.data;
      setData(value);
      setIsLoading(false);
    } catch (err) {
      setError("Error");
      console.log("The err is", err);
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData, url]);
  return { loading, data, error, fetchData };
};

export default useFetch;
