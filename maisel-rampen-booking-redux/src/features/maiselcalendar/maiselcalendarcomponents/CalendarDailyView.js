import React, { useState } from 'react';
import SingleDaysPanel from './SingleDaysPanel';
import { SingleTimeslotsPanel } from './SingleTimeslotsPanel';
import DailyViewHead from './DailyViewHead';
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
            <div className='timeSlotHead'>
                <div className='calenderHeadAdd'>Zeit</div>
                <div className='calendarHeadRamps'>
                    {ramps.map((ramp, index) => 
                        <div className={'headDay ramp-' + index}>{ramp}</div>
                    )}
                </div>
            </div>
            
            <div className='timeSlotHead'>
                <div className='calenderHeadAdd'>
                    {currentDayDateArr.map((slots) => 
                        slots.map((slot) => <SingleTimeslotsPanel slot={slot}/>)
                    )}
                </div>
                <div className='calendarTimeslotsRamps'>test</div>
            </div>
        </div>
    )
}