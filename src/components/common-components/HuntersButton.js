import React from 'react';
import Button from '@mui/material/Button';

const HuntersButton = ({ name = 'ABC' }) => {
  return <Button variant="contained">{name}</Button>;
};
export default HuntersButton;
