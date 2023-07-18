import React, { useState } from 'react';
import {ramps} from '../constants';

export function RampFilter({ allResourcesList, setFilterIndex }) {
    /* const ramps = allResourcesList; */
    
    const setParentFiltersIndex = (i) => {
        setFilterIndex(i);
        console.log('\n\n\nseelcted index: ' + i);
    }

    const handleCheck = (index) => {
        /* checkedFilters[index] = !checkedFilters[index]; */
        setParentFiltersIndex(index);
    };

    return (
        <div className='filter-wrapper'>
            {ramps.map( (ramp, index) => 
                <div className='flex-container'>
                    <input
                        type='checkbox'
                        onChange={() => handleCheck(index)}
                    />
                    <div>{ramp}</div>
                </div>
            )}
        </div>
    )
}