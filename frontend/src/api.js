import axios from 'axios';

const API_URL = 'https://3-w2.vercel.app/api/users';

export const claimPoints = (userId) => {
  return axios.post(`${API_URL}/claim/${userId}`);
};

export const getLeaderboard = () => {
  return axios.get(`${API_URL}/leaderboard`);
};
