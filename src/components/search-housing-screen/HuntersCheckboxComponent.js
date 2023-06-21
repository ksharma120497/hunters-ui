import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const HuntersCheckboxComponent = ({name = 'default'}) => {
    return (
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label={name} className="search-housing-slider-text"/>   
            </FormGroup>
        </div>
    );
};


export default HuntersCheckboxComponent;