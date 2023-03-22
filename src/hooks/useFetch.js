import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [err, setError] = useState(null);

  useEffect(() => {
    handleFetch(url);
  }, [url]);

  const handleFetch = async (url) => {
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      setData(response.data);
      setIsPending(false);
      console.log(data);
    } catch (e) {
      setError(e.response);
      setIsPending(false);
      console.log(e.message);
    }
  };
  console.log(data);

  return { data, isPending, err };
};

export default useFetch;
