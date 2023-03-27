import { Movie } from "../App";
import MovieCard from "./MovieCard";

type MovieListProps = {
    movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div>
    {movies.length ?? movies.map((movie) => {
        <MovieCard movie={movie}/>
    })}
    </div>
  )
}

export default MovieList