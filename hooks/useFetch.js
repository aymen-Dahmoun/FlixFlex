import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(path, params) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("useGetMovies initialized");

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching movies...");
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${path}`,
          {
            params: {
              api_key: "a1db14cbe9b1aeaa9a050b489c9c533f",
              // include_adult: false,
              // include_video: true,
              // language: "en-US",
              // page: 3,
              // sort_by: "popularity.desc",
              ...params
            },
          }
        );
        console.log("Response data: path: ", path);
        setData(response.data.results? response.data.results : response.data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err);
      } finally {
        setLoading(false);
        // console.log("Fetch completed, keys: ", data);
        console.log(`https://api.themoviedb.org/3/${path}`)
      }
    };

    fetchData();
  }, [path, JSON.stringify(params)]);


  const result = { data, loading, error };

  return result;
}
