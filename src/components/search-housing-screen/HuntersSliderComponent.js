import React from 'react';
import HuntersSlider from '../common-components/HuntersSlider';
import './style.css';

const HuntersSliderComponent = ({name = 'range'}) => {
    return (
        <div>
            <h3 className="search-housing-slider-text">
                {name}
            </h3>
            <HuntersSlider/>
        </div>
    );
};

export default HuntersSliderComponent;