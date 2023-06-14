import React from 'react';
import Button from '@mui/material/Button';

const HuntersButton = ({ name = 'ABC' , onClick}) => {
  return <Button variant="contained" onClick={onClick}>{name}</Button>;
};
export default HuntersButton;
