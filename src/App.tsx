import { useState } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar'

type MovieData = {
  poster: string;
  title: string;
  type: string;
  year: string | number;
}

export type Movie = {
  id: string;
} & MovieData

const API_KEY = "d37dede0";
const API_URL = "http://www.omdbapi.com";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const movies = await fetchMovies(searchTerm);
    setMovies(movies);
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="container">

      <SearchBar 
        searchTerm= { searchTerm } 
        handleSearchChange = { handleSearchChange }
        handleSubmit = { handleSubmit }
      />
      
      <MovieList movies= { movies }/>
    </div>
  )
}

export default App
