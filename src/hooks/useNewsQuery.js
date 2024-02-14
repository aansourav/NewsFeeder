import fetchData from "../utilis/fatchData";
import { useState, useEffect } from "react";


function useNewsQuery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (url) => {
    try {
      const response = await fetchData(url);
      setData(response);
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { data, fetchAPI };
}

export default useNewsQuery;
