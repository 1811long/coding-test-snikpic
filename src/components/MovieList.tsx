import { Movie } from "../App";
import MovieCard from "./MovieCard";

type MovieListProps = {
  movies: Movie[];
  handleShowMovieDetail: (movieId: string) => void;
}

const MovieList = ({ movies, handleShowMovieDetail }: MovieListProps) => {
  return (
    <div className="movieList">
      {movies.map((movie) => {
        return <MovieCard  key={ movie.id } movie = { movie } handleShowMovieDetail={ handleShowMovieDetail }/>
      })}
    </div>
  )
}

export default MovieList