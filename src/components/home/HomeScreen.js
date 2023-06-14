import React from 'react';
import './style';
import './style.css';
import Stack from '@mui/material/Stack';
import HuntersButton from '../common-components/HuntersButton';

const HomeScreen = () => {
  return (
    <div>
      <h1 className="homescreen-header">
        Student Housing Made Social and Simple
      </h1>
      <p className="homescreen-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Stack spacing={20} direction="row">
        <HuntersButton name={'Search Housing'} />
        <HuntersButton name={'Post Housing'} />
      </Stack>
    </div>
  );
};

export default HomeScreen;
