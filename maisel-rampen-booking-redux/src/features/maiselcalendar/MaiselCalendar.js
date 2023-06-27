import React, { useState } from 'react';
import './maisel-calendar.scss';

import MaterialIcon, {colorPalette} from 'material-icons-react';
import { weekDays, months } from './constants';
import HeadDays from './maiselcalendarcomponents/HeadDays';
import SingleDays from './maiselcalendarcomponents/SingleDays';
import SingleDaysPanel from './maiselcalendarcomponents/SingleDaysPanel';
import CalendarPagingMonth from './maiselcalendarcomponents/CalendarPagingMonth';
import { range, getDateObj, getSortedDays, getMonthCalendar, isDateToday } from './util';
import { getDaysInMonth } from 'date-fns';
import dayjs, {format}from 'dayjs';


function MaiselCalendar({ startingDate }) {
  const [currentFullDate, setCurrentFullDate] = useState(startingDate);

  const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
  const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());

  const[currentMonthDateArr, setCurrentMonthDateArr] = useState(getMonthCalendar(currentFullDate));

  console.log('\ntest oli output');
  console.table(currentMonthDateArr);
  
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

export default MaiselCalendar