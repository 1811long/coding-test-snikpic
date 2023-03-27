type SearchBarProps = { 
    searchTerm: string;
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar = ({ searchTerm, handleSearchChange,  handleSubmit }: SearchBarProps) => {

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Search for movie" 
            value={searchTerm}
            onChange={handleSearchChange}
        />
        <button type="submit">
            Search
        </button>
    </form>
  )
}

export default SearchBar