import React, { useState } from 'react';
import {ramps} from '../constants';

export function RampFilter({ allResourcesList, checkedFilters, setCheckedFilters }) {
    /* const ramps = allResourcesList; */
    
    const setParentCheckedFilters = (arr) => {
        setCheckedFilters(arr);
        console.table(arr);
    }

    const handleCheck = (index) => {
        checkedFilters[index] = !checkedFilters[index];
        setParentCheckedFilters(checkedFilters);
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