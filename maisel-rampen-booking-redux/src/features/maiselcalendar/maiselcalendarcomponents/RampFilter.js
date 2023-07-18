import React, { useState } from 'react';
import {ramps} from '../constants';

export function RampFilter({ allResourcesList, setFilterIndex }) {
    
    const setParentFiltersIndex = (i) => {
        setFilterIndex(i);
    }

    const handleCheck = (index) => {
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