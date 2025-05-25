import { useState, useEffect } from "react";
import axios from "axios";

export default function useGetMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("useGetMovies initialized"); // ✅ Check hook execution

  useEffect(() => {
    const fetchMovies = async () => {
      console.log("Fetching movies...");
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "a1db14cbe9b1aeaa9a050b489c9c533f",
              include_adult: false,
              include_video: false,
              language: "en-US",
              page: 1,
              sort_by: "popularity.desc",
            },
          }
        );
        console.log("Response data:", response.data.results);
        setMovies(response.data.results);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const result = { movies, loading, error };
  console.log("Returning from hook:", result); // ✅ Check return value
  return result;
}
