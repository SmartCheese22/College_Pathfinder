import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs'; // Import BsSearch icon
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Button from 'react-bootstrap/Button';

const SearchForm = ({ onSearch }) => {
  const [college, setCollege] = useState('');
  const [major, setMajor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ college, major });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter College"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter Major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
        <Button variant="primary" type="submit">
          <BsSearch />
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
