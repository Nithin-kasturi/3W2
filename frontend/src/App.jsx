import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserList from './components/userList';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
      console.log(response.data);
      setSelectedUser(response.data[0]._id);
    };

    fetchUsers();
  }, []);

  const handleClaim = (data) => {
    toast.success(data)
    toast.success(`${data.user.name} got ${data.randomPoints} points! Total : ${data.user.points}`);
    console.log(data.user);
  };

  return (
    <div className="d-flex flex-column p-4">
      <div className="mb-4  d-flex flex-row w-100">
        <div className=''>
        <UserList users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div>
        <div className='d-flex flex-column justify-content-end'>
        <ClaimButton selectedUser={selectedUser} onClaim={handleClaim}  />

        </div>

        
      </div>
      <div className="">
        <Leaderboard />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
