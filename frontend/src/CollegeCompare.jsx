import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMarkdown from 'react-markdown';

const CollegeCompare = () => {
    const [college1, setCollege1] = useState('');
    const [college2, setCollege2] = useState('');
    const [branch1, setBranch1] = useState('');
    const [branch2, setBranch2] = useState('');
    const [collegeData, setCollegeData] = useState({});
    const [userOpinions, setUserOpinions] = useState({ user1: [], user2: [] });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const collegeResponse = await axios.get('http://localhost:3001/api/compare', {
          params: { college1, college2 },
        });
        setCollegeData(collegeResponse.data);

        const userOpinionResponse = await axios.get('http://localhost:3001/api/useropinion', {
          params: { college1, college2, branch1, branch2 },
        });
        setUserOpinions(userOpinionResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      return () => {
        setCollegeData({});
        setUserOpinions({ user1: [], user2: [] });
      };
    }, []);

    const opinionTitles = ["Academic Opinion", "Non-Academic Opinion", "Placement Opinion", "Overall Opinion"];

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
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Branch"
                value={branch1}
                onChange={(e) => setBranch1(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Branch"
                value={branch2}
                onChange={(e) => setBranch2(e.target.value)}
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
                </tr>
                <tr>
                  <td>NIRF Ranking</td>
                  <td>{collegeData.college1.nirfRanking}</td>
                  <td>{collegeData.college2.nirfRanking}</td>
                </tr>
                <tr>
                  <td>Average Package</td>
                  <td>{collegeData.college1.placementStats}</td>
                  <td>{collegeData.college2.placementStats}</td>
                </tr>
                <tr>
                  <td>User Opinions</td>
                  <td>
                    {userOpinions.user1.map((user, index) => (
                      <div key={index} className="card mb-3">
                        <div className="card-header" style={{ backgroundColor: 'rgb(139, 178, 178)', color: 'white' }}>{user.name}</div>
                        <div className="card-body">
                          {user.opinion.map((opinion, opinionIndex) => (
                            <React.Fragment key={opinionIndex}>
                              <h5 className="card-title">{opinionTitles[opinionIndex]}</h5>
                              <p className="card-text">{opinion}</p>
                            </React.Fragment>
                          ))}
                          {user.opinion.length === 0 && <p className="card-text">No opinions available</p>}
                        </div>
                      </div>
                    ))}
                  </td>
                  <td>
                    {userOpinions.user2.map((user, index) => (
                      <div key={index} className="card mb-3">
                        <div className="card-header" style={{ backgroundColor: 'rgb(139, 178, 178)', color: 'white' }}>{user.name}</div>
                        <div className="card-body">
                          {user.opinion.map((opinion, opinionIndex) => (
                            <React.Fragment key={opinionIndex}>
                              <h5 className="card-title">{opinionTitles[opinionIndex]}</h5>
                              <p className="card-text">{opinion}</p>
                            </React.Fragment>
                          ))}
                          {user.opinion.length === 0 && <p className="card-text">No opinions available</p>}
                        </div>
                      </div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
};

export default CollegeCompare;
