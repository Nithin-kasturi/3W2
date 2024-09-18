import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getLeaderboard } from '../api';

const Leaderboard = ({selectedUser}) => {
  const [leaderboard, setLeaderboard] = useState([]);
    const [currentName,setCurrentName]=useState("");
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await getLeaderboard();
        console.log(response.data);
        setLeaderboard(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
    const intervalId = setInterval(fetchLeaderboard, 1000); // Updated interval to 10 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=''>
      <h2 className='text-center'>Leaderboard</h2>
      <div className='table-responsive'>
        <Table striped bordered hover className='w-100'>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.points}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Leaderboard;
