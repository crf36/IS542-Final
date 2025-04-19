import { useEffect, useState } from "react";
import { Movies } from "./Types";

export const useFetchMovies = function () {
  const [movies, setMovies] = useState({} as Movies);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";
    const URL_QUERY_PARAMS =
      "/discover/movie?with_genres=10751&sort_by=popularity.desc&language=en-US&certification=G|PG|PG-13&certification_country=US";

    const fetchMovies = async () => {
      try {
        const url = `${BASE_URL}${URL_QUERY_PARAMS}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const data = await response.json();

        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, isLoading };
};
