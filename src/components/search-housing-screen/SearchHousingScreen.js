import React from 'react';
import HuntersSliderComponent from './HuntersSliderComponent';
import HuntersVerticalDivider from './HuntersVerticalDivider';
import HuntersCheckboxComponent from './HuntersCheckboxComponent';
import HuntersButton from '../common-components/HuntersButton';

const SearchHousingScreen = () => {
    return (
        <div className='search-housing-screen'>
            <div className='search-housing-filters'>
                <HuntersSliderComponent name={"Price Range"}/>
                <HuntersSliderComponent name={"Bedrooms"}/>
                <HuntersSliderComponent name={"Bathrooms"}/>
                <HuntersSliderComponent name={"Distance From University"}/>
                <HuntersCheckboxComponent name={"Pet Friendly"}/>
                <HuntersCheckboxComponent name={"Parking"}/>
                <HuntersButton name={"Apply filters"}/>
            </div>
            <div className='search-housing-divider'>
                <HuntersVerticalDivider/>
            </div>
            <div className='search-housing-results'>

            </div>
        </div>
    );
};

export default SearchHousingScreen;