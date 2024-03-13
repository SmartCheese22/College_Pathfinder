// Search.jsx
import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (data) => {
    try {
      // Make API request to search for students
      // You need to replace the API endpoint with your actual endpoint
      const response = await fetch(`http://localhost:3001/api/search?college=${data.college}&branch=${data.major}`);
      const searchData = await response.json();
      setSearchResults(searchData);
    } catch (error) {
        console.log(error);
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <h1>College Search</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResult students={searchResults} />
    </div>
  );
};

export default Search;
