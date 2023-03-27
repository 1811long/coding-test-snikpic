type SearchBarProps = { 
    movieTitle: string;
}

const SearchBar = ({ movieTitle }: SearchBarProps) => {
  return (
    <form action="">
        <input 
            type="text" 
            placeholder="Search for movie" 
            value={movieTitle}
        />
    </form>
  )
}

export default SearchBar