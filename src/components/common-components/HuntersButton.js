import React from 'react';
import Button from '@mui/material/Button';

const HuntersButton = ({ name = 'ABC', width = 'auto' }) => {
  return (
    <Button
      variant="contained"
      sx={{
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
