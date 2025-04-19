// import { useFetchMovies } from "../api/MovieListApi";
import { ReactNode } from "react";
import { MoviesDataContext } from "./Data";
import { useFetchMovies } from "../MovieApi";

export function DataProvider({ children }: { children: ReactNode }) {
  const { movies, isLoading } = useFetchMovies();

  return (
    <MoviesDataContext value={{ movies, isLoading }}>
      {children}
    </MoviesDataContext>
  );
}
