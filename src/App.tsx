import { useState } from 'react';
import './App.css';
import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar'

type MovieData = {
  poster: string;
  title: string;
  type: string;
  year: string | number;
}

export type MovieDetailData = {
  title: string;
  releaseDate: string;
  runtime: string;
  genre: string;
  director: string;
} 

export type Movie = {
  id: string;
} & MovieData

const API_KEY = "d37dede0";
const API_URL = "http://www.omdbapi.com";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieDetailData, setMovieDetail] = useState<MovieDetailData | null>(null);

  const fetchMovies = async (movieTitle: string) => {
    const response = await fetch(`${API_URL}?apiKey=${API_KEY}&s=${movieTitle}`)
    const data = await response.json();

    const movies = data.Search.map((m: any) => {
      return {
        poster: m.Poster,
        title: m.Title,
        type: m.Type,
        year: m.Year,
        id: m.imdbID,
      }
    })

    return movies;
  }

  const fetchMovieDetail = async (movieId: string) => {
    const response = await fetch(`${API_URL}?apiKey=${API_KEY}&i=${movieId}`)
    const data = await response.json();

    const movieDetail ={
      title: data.Title,
      releaseDate: data.Released,
      runtime: data.Runtime,
      director: data.Director,
      genre: data.Genre,
    };

    return movieDetail;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const movies = await fetchMovies(searchTerm);
    setMovies(movies);
    setMovieDetail(null);
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const handleShowMovieDetail = async (movieId: string) => {
    const movieDetail = await fetchMovieDetail(movieId);
    setMovieDetail(movieDetail);
  }

  return (
    <div className="container">
      <SearchBar 
        searchTerm= { searchTerm } 
        handleSearchChange = { handleSearchChange }
        handleSubmit = { handleSubmit }
      />

      {!movies.length ? 'Search a movie' :  <MovieDetail movieDetailData = { movieDetailData }/>}
     
      <MovieList movies= { movies } handleShowMovieDetail={handleShowMovieDetail}/>
    </div>
  )
}

export default App
