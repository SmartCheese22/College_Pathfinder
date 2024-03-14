import React from 'react';

const CollegeCard = ({ college }) => {
  return (
    <div className="card">
      <h2>{college.name}</h2>
      <p>Location: {college.location}</p>
      <p>NIRF Ranking: {college.nirfRanking}</p>
      <p>Description: {college.description}</p>
      <p>Placement Statistics: {college.placementStatistics.join(', ')}</p>
    </div>
  );
};

export default CollegeCard;
