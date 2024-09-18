import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const claimPoints = (userId) => {
  return axios.post(`${API_URL}/claim/${userId}`);
};

export const getLeaderboard = () => {
  return axios.get(`${API_URL}/leaderboard`);
};
