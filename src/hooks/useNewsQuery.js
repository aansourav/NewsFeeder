import { useEffect, useState } from "react";
import fetchNewsData from "../utils/fetchNewsData";

function useNewsQuery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (url) => {
    try {
      const response = await fetchNewsData(url);
      setData(response);
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { data, fetchAPI };
}

export default useNewsQuery;
