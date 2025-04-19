export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
}

export interface Movies {
  [key: string]: Movie;
}

export interface MoviesContextType {
  movies: { [id: string]: Movie };
  isLoading: boolean;
}

export interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}
