import { Movie } from "../App";
import MovieCard from "./MovieCard";

type MovieListProps = {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div>
      {movies.map((movie) => {
        return <MovieCard movie = { movie } />
      })}
    </div>
  )
}

export default MovieList