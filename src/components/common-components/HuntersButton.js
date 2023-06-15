import React from 'react';
import Button from '@mui/material/Button';
import '../home/style.css';

const HuntersButton = ({ name = 'ABC', width = 'auto' }) => {
  return (
    <Button
      variant="contained"
      style={{
        margin: '50px 60px',
        padding: '10px 15px',
        background: '#000000',
        width: { width },
        textAlign: 'center',
        borderRadius: '15px',
      }}
    >
      {name}
    </Button>
  );
};
export default HuntersButton;
