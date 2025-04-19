// import { useFetchMovies } from "../api/MovieListApi";
import { ReactNode } from "react";
import { MoviesDataContext } from "./Data";
import { useFetchMovies } from "../MovieAPI";

export function DataProvider({ children }: { children: ReactNode }) {
  const { movies, isLoading } = useFetchMovies();

  return (
    <MoviesDataContext value={{ movies, isLoading }}>
      {children}
    </MoviesDataContext>
  );
}
