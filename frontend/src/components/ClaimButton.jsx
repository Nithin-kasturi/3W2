import React from 'react';
import { Button } from 'react-bootstrap';
import { claimPoints } from '../api';
import './styles.css'; 

const ClaimButton = ({ selectedUser, onClaim }) => {
  const handleClick = async () => {
    const response = await claimPoints(selectedUser);
    onClaim(response.data);
  };

  return (
    <div>
        <Button
      variant="primary"
      onClick={handleClick}
      className="ml-3 rounded-lg w-100 text-responsive"
    >
      Claim Points
    </Button>
    </div>
    
  );
};

export default ClaimButton;
