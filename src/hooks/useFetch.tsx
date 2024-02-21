// import { useCallback, useEffect, useState } from "react";
// import Service from "../setup/Service";

// const useFetch = (url: string) => {
//   const [loading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");
//   const [data, setData] = useState<any[]>([]);

//   const fetchData = useCallback(async () => {
//     setIsLoading(true);
//     try {
//       const response = await Service.get(url);
//       console.log("The response is", response);
//       const value: any = setData(response?.data?.data);
//       setData(value);
//       setIsLoading(false);
//     } catch (err) {
//       setError("Error");
//       console.log("The err is", err);
//       setIsLoading(false);
//     }
//   }, [url]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData, url]);
//   return { loading, data, error, fetchData };
// };

// export default useFetch;

import { useCallback, useEffect, useState } from "react";
import Service from "../setup/Service";

const useFetch = (
  url: string,
  method: string = "GET",
  requestData: any = null
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      let response;
      if (method === "GET") {
        response = await Service.get(url);
      } else if (method === "POST") {
        response = await Service.post(url, requestData);
      }
      console.log("The response is", response);
      setData(response?.data);
      setIsLoading(false);
    } catch (err) {
      setError("Error");
      console.log("The err is", err);
      setIsLoading(false);
    }
  }, [url, method, requestData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, data, error, fetchData };
};

export default useFetch;
