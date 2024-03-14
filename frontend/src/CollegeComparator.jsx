import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCollegeDetails, getOpinions } from './api';

const CollegeComparator = () => {
  const [college1, setCollege1] = useState(null);
  const [college2, setCollege2] = useState(null);
  const [opinions1, setOpinions1] = useState([]);
  const [opinions2, setOpinions2] = useState([]);
  const { collegeName1, collegeName2 } = useParams();

  useEffect(() => {
    const fetchCollegeData = async () => {
      try {
        const collegeData1 = await getCollegeDetails(collegeName1);
        const collegeData2 = await getCollegeDetails(collegeName2);
        const opinionsData1 = await getOpinions(collegeName1);
        const opinionsData2 = await getOpinions(collegeName2);
        setCollege1(collegeData1);
        setCollege2(collegeData2);
  
        // Verify if opinionsData1 and opinionsData2 are arrays before setting state
        if (Array.isArray(opinionsData1)) {
          setOpinions1(opinionsData1);
        } else {
          console.error('Opinions data for college 1 is not an array:', opinionsData1);
        }
  
        if (Array.isArray(opinionsData2)) {
          setOpinions2(opinionsData2);
        } else {
          console.error('Opinions data for college 2 is not an array:', opinionsData2);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCollegeData();
  }, [collegeName1, collegeName2]);
  

  if (!college1 || !college2) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>College Comparator</h1>
      <div className="college-card">
        <h2>{college1.name}</h2>
        <p>Description: {college1.description}</p>
        <p>NIRF Ranking: {college1.nirfRanking}</p>
        {/* Display other college details */}
      </div>
      <div className="college-card">
        <h2>{college2.name}</h2>
        <p>Description: {college2.description}</p>
        <p>NIRF Ranking: {college2.nirfRanking}</p>
        {/* Display other college details */}
      </div>
      <div>
        <h2>Opinions about {college1.name}</h2>
        {opinions1.map((opinion, index) => (
          <div key={index}>
            <p>Name: {opinion.name}</p>
            <p>Username: {opinion.username}</p>
            {/* Display other user details */}
          </div>
        ))}
      </div>
      <div>
        <h2>Opinions about {college2.name}</h2>
        {opinions2.map((opinion, index) => (
          <div key={index}>
            <p>Name: {opinion.name}</p>
            <p>Username: {opinion.username}</p>
            {/* Display other user details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeComparator;
