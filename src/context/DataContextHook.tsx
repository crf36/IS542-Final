import { use } from "react";
import { MoviesContextType } from "../Types";
import { MoviesDataContext } from "./Data";

export function useDataContext(): MoviesContextType {
  const context = use(MoviesDataContext);

  if (!context) {
    throw new Error(
      "useMoviesDataContext must be used within a MoviesDataProvider"
    );
  }

  return context;
}
