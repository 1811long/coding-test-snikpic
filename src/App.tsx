import { useState } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar'

type MovieData = {
  title: string;
  plot: string;
  summary: string;
  genre: string;
  rating: string | number;
}

export type Movie = {
  id: string;
} & MovieData

function App() {
  const [movieTitle, setMovieTitle] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <div className="container">
      <SearchBar movieTitle= { movieTitle } />
      <MovieList movies= { movies }/>
    </div>
  )
}

export default App
