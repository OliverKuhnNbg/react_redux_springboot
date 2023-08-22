import React, {useState} from 'react';
import CalendarPagingMonth from './CalendarPagingMonth';
import HeadDays from './HeadDays';
import SingleDaysPanel from './SingleDaysPanel';
import { range, getDateObj, getSortedDays, getMonthCalendar, isDateToday } from '../util';
import { weekDays} from '../constants';

import dayjs, {format}from 'dayjs';

function CalendarMonthlyView({startingDate}) {

    const [currentFullDate, setCurrentFullDate] = useState(startingDate);

    const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
    const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());

    const[currentMonthDateArr, setCurrentMonthDateArr] = useState(getMonthCalendar(currentFullDate));

    /* console.log('\ntest oli output');
    console.table(currentMonthDateArr); */

    return (
        <div className='wrapper'>
            <CalendarPagingMonth 
                currentFullDate={currentFullDate}
                currentMonth={currentMonth}
                currentYear={currentYear}
                setCurrentFullDate={setCurrentFullDate} 
                setCurrentMonthDateArr={setCurrentMonthDateArr} 
                setCurrentYear={setCurrentYear} 
                setCurrentMonth={setCurrentMonth} 
            />

            <div className='calendarHead'>
                {currentMonthDateArr[0].map((day) => 
                <HeadDays day={weekDays[day.$d.getDay()]} />
                )}
            </div>
            
            <div className='calendarBody '>
                {currentMonthDateArr.map((week) => 
                    week.map((day) =>
                        <SingleDaysPanel dayDate={day.$d} isDateToday={isDateToday(startingDate, day.$d)} />
                    )
                )}
            </div>
        </div>
    )
}

export default CalendarMonthlyView