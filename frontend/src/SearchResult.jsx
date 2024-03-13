import React from 'react';
import './SearchResult.css';

const SearchResult = ({ students }) => {
  return (
    <div className="search-result">
      <h2>Search Results</h2>
      {students.length > 0 ? (
        <div>
          {students.map((student, index) => (
            <div key={index} className="student-card card">
              <div className="card-body">
                <h3 className="card-title">{student.name}</h3>
                <p className="card-text">Email: {student.email}</p>
                <p className="card-text">College: {student.college}</p>
                <p className="card-text">Branch: {student.major}</p>
                <h4 className="card-subtitle mb-2 text-muted">Opinions:</h4>
                <ul className="list-group list-group-flush">
                  {student.opinion.map((opinion, idx) => (
                    <li key={idx} className="list-group-item">{opinion}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResult;
