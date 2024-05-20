import { useState, useEffect } from "react";
import axios from "axios";

const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return ; 

    const fetchData = async () => {
      setLoading(true);
      setData(null);  
      setError(null); 
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useGetData;
