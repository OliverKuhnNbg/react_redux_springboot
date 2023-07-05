import React, { useState } from 'react';
import { SingleTimesPanel } from './SingleTimesPanel';
import SingleTimeslotsPanel from './SingleTimeslotsPanel';
import { getDayCalendar } from '../util';
import { add, format } from 'date-fns';
import { ramps } from '../constants';

export function CalendarDailyView({ startingDate }) {

    console.log(startingDate);

    const [currentFullDate, setCurrentFullDate] = useState(startingDate);

    const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
    const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());

    const[currentDayDateArr, setCurrentDayDateArr] = useState(getDayCalendar(currentFullDate));

    console.table(currentDayDateArr);
    
    return (
        <div className='wrapper'>
            <div className='flex-container'>
                <div className='calenderHeadAdd'>Zeit</div>
                <div className='calendarHeadRamps'>
                    {ramps.map((ramp, index) => 
                        <div className={'headDay ramp-' + index}>{ramp}</div>
                    )}
                </div>
            </div>
            
            <div className='flex-container'>
                <div className='calenderBodyAdd'>
                    {currentDayDateArr.map((slots) => 
                        slots.map((slot) => <SingleTimesPanel slot={slot}/>)
                    )}
                </div>
                <div className='calendarBodyRamps'>
                    {currentDayDateArr.map((slots) => 
                        slots.map((slot) => 
                            ramps.map((ramp, index) => 
                                <SingleTimeslotsPanel slotDate={slot.$d} rampIndex={index} />
                            )
                        )
                    )}
                </div>
            </div>
        </div>
    )
}