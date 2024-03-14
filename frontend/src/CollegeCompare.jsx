import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making API requests
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
import PlacementChart from './PlacementChart';

const CollegeCompare = () => {
  const [college1, setCollege1] = useState('');
  const [college2, setCollege2] = useState('');
  const [collegeData, setCollegeData] = useState({}); // Object to store college data

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/api/compare', {
        params: { college1, college2 },
      });
      setCollegeData(response.data);
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display an error message
    }
  };

  useEffect(() => {
    // Clear college data when component unmounts to avoid stale data
    return () => {
      setCollegeData({});
    };
  }, []);

  return (
    <div className="container-fluid" style={{ backgroundColor: '#3F5757', minHeight: '100vh' }}>
      <h2 className="mt-4 mb-4 text-white">College Comparison</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="College 1"
              value={college1}
              onChange={(e) => setCollege1(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="College 2"
              value={college2}
              onChange={(e) => setCollege2(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Compare</button>
          </div>
        </div>
      </form>
      {collegeData.college1 && collegeData.college2 && (
        <div className="comparison-table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th>{collegeData.college1.name}</th>
                <th>{collegeData.college2.name}</th>
              </tr>
              {/* <tr>
                <th></th>
                <th><img src='https://yuvamind.com/edu/yuvaeducation/images/iit-kanpur-college.jpg' alt='IIT Kanpur'></img></th>
                <th><img src="https://img.jagranjosh.com/imported/images/E/Articles/what-makes-iit-bombay.jpg" alt="IIT Bombay" /></th>
              </tr> */}
            </thead>
            <tbody>
              <tr>
                <td> Location</td>
                <td>{collegeData.college1.location}</td>
                <td>{collegeData.college2.location}</td>
              </tr>
              <tr>
                <td> Description</td>
                <td><ReactMarkdown>{collegeData.college1.description}</ReactMarkdown></td>
                <td><ReactMarkdown>{collegeData.college2.description}</ReactMarkdown></td>
                {/* <td>{collegeData.college2.description}</td> */}
              </tr>
              <tr>
                <td>NIRF Ranking</td>
                <td>{collegeData.college1.nirfRanking}</td>
                <td>{collegeData.college2.nirfRanking}</td>
              </tr>
              <tr>
                <td>Placement Stats</td>
                <td><PlacementChart placementData={collegeData.college1.placementStatistics} /></td>
                <td><PlacementChart placementData={collegeData.college2.placementStatistics} /></td>
                {/* <td>{collegeData.college2.placementStatistics}</td> */}
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CollegeCompare;
