import { Movie } from "../App";

type MovieCardProps = {
  movie: Movie;
  handleShowMovieDetail: (movieId: string) => void;
}

const notFoundImgURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2bFljw_vR_FJ9erlrZJbjE5QPO-QO46RjRFdNKV5se7Rf6IEEzDEGE-rxUMxBqQIOGQ&usqp=CAU"

const MovieCard = ({ movie, handleShowMovieDetail }: MovieCardProps) => {
  return (
    <div className="movieCard">
      <h3>{movie.title}</h3>
      
      <div>
        <button onClick={() => handleShowMovieDetail(movie.id)}>
          <img src={movie.poster !== "N/A" ? movie.poster : notFoundImgURL } alt={movie.title} />
        </button>
      </div>

      <div>
        <p>Year of release: {movie.year}</p>
      </div>

      <div>
        <span>Type: {movie.type}</span>
      </div>
    </div>
  )
}

export default MovieCard