import React, { useState } from 'react';
import SingleDaysPanel from './SingleDaysPanel';
import { SingleTimeslotsPanel } from './SingleTimeslotsPanel';
import { getDayCalendar } from '../util';
import { add, format } from 'date-fns';

export function CalendarDailyView({ startingDate }) {

    console.log(startingDate);

    const [currentFullDate, setCurrentFullDate] = useState(startingDate);

    const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
    const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());

    const[currentDayDateArr, setCurrentDayDateArr] = useState(getDayCalendar(currentFullDate));

    console.table(currentDayDateArr);
    
    return (
        <div>
            <div>CalendarDailyView</div>
            {currentDayDateArr.map((slots) => 
                slots.map((slot) => <SingleTimeslotsPanel slot={slot}/>)
            )}
        </div>
    )
}