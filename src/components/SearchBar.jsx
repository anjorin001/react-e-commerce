import { Search } from 'lucide-react'
const SearchBar = ({ onSearch, search, setSearch }) => {
  

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value
    setSearch(value)
    onSearch(value)
  };
  
  return (
    <div className='search-bar-container'>
        <div className="search-bar">
       <Search className="search-icon" size={20} />
        <input
          type="search"
          value={search}
          placeholder="Search products..."
        onChange={handleChange}
        className='search-input'
        />
    </div>
    </div>
  );
};

export default SearchBar;
