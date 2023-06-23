import React from 'react';
import HuntersSlider from '../common-components/HuntersSlider';
import './style.css';

const HuntersSliderComponent = ({ name = 'range' }) => {
  return (
    <div>
      <p className="search-housing-slider-text">{name}</p>
      <HuntersSlider />
    </div>
  );
};

export default HuntersSliderComponent;
