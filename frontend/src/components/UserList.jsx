import React from 'react';
import { Form } from 'react-bootstrap';

const UserList = ({ users, selectedUser, setSelectedUser }) => {
  return (
    <Form.Group controlId="userSelect">
      <h1>Select User and click claim button</h1>
      <Form.Control
        className="border border-primary"
        as="select"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="" disabled>
          Select
        </option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default UserList;
