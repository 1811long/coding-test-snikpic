import { MovieDetailData } from "../App";

type MovieDetailProps = {
    movieDetailData: MovieDetailData | null;
}

const MovieDetail = ({ movieDetailData }: MovieDetailProps) => {
    return (
        <div>
            {
                movieDetailData ?  
                <div>
                    <h3> Movie title: {movieDetailData.title} </h3>
                    <h3> Release date: {movieDetailData.releaseDate} </h3>
                    <h3> Director: {movieDetailData.director}</h3>
                    <h3> Genre: {movieDetailData.genre}</h3>
                    <h3> Runtime: {movieDetailData.runtime}</h3>
                </div> : 
                'Select a movie shown below to view detail'
            }
        </div>
    )
}

export default MovieDetail