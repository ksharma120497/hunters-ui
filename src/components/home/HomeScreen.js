import React from 'react';
import './style';
import './style.css';
import Stack from '@mui/material/Stack';
import HuntersButton from '../common-components/HuntersButton';
import Room from '../../assets/room.jpeg';
import Roomates from '../../assets/room1.jpeg';
import HuntersSearchBar from '../common-components/HuntersSearchBar';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <div className="homescreen-content">
        <h1 className="homescreen-header">
          Student Housing Made Social and Simple
        </h1>
        <p className="homescreen-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <HuntersSearchBar />
        <Stack direction="row">
         <Link to={'/newscreen'}><HuntersButton name={'Search Housing'} width="200px" /> </Link>
          <HuntersButton name={'Post Housing'} width="200px" />
        </Stack>
      </div>
      <div className="hommescreen-images">
        <img src={Room} alt="student housing" className="room-img" />
        <img
          src={Roomates}
          alt="students enjoying in living room"
          className="room-img"
        />
      </div>
    </div>
  );
};

export default HomeScreen;
