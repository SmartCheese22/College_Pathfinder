import axios from 'axios';

export const getCollegeDetails = async (collegeName) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/college/${collegeName}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching college details');
  }
};

export const getOpinions = async (collegeName) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/opinions/${collegeName}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching opinions');
  }
};
