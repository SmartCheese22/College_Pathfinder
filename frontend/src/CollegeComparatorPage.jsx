import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CollegeComparatorPage = () => {
  const [collegeName1, setCollegeName1] = useState('');
  const [collegeName2, setCollegeName2] = useState('');
  const navigate = useNavigate(); // Changed from history to navigate

  const handleCompare = () => {
    navigate(`/compare/${collegeName1}/${collegeName2}`); // Changed from history.push to navigate
  };

  return (
    <div>
      <h1>College Comparator Page</h1>
      <div>
        <label htmlFor="college1">College 1:</label>
        <input
          type="text"
          id="college1"
          value={collegeName1}
          onChange={(e) => setCollegeName1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="college2">College 2:</label>
        <input
          type="text"
          id="college2"
          value={collegeName2}
          onChange={(e) => setCollegeName2(e.target.value)}
        />
      </div>
      <button onClick={handleCompare}>Compare</button>
    </div>
  );
};

export default CollegeComparatorPage;
