import React from 'react';
import HomeScreen from './home/HomeScreen';
import SearchHousingScreen from './search-housing-screen/SearchHousingScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search-housing" element={<SearchHousingScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainContainer;
