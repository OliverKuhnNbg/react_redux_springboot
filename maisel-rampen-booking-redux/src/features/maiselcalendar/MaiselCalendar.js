import React, { useState } from 'react';
import './maisel-calendar.scss';

import MaterialIcon, {colorPalette} from 'material-icons-react';
import { weekDays, months } from './constants';
import HeadDays from './maiselcalendarcomponents/HeadDays';
import SingleDays from './maiselcalendarcomponents/SingleDays';
import SingleDaysPanel from './maiselcalendarcomponents/SingleDaysPanel';
import { range, getDateObj, getSortedDays, getMonthCalendar, isDateToday } from './util';
import { getDaysInMonth } from 'date-fns';
import dayjs, {format}from 'dayjs';


function MaiselCalendar({ startingDate }) {
  const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
  const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());

  const[currentMonthDateArr, setCurrentMonthDateArr] = useState(getMonthCalendar(startingDate));

  console.log("\ntest oli output");
  console.table(currentMonthDateArr);
  
  return (
    <div className='wrapper'>
        <div className="calendarHeadWrapper">
          <MaterialIcon icon="chevron_left" />
          <div className='calendar-head'>{months[currentMonth]} {currentYear}</div>
          <MaterialIcon icon="chevron_right" />
        </div>

        <div className='calendarHead'>
          {currentMonthDateArr[0].map((day) => 
            <HeadDays day={weekDays[day.$d.getDay()]} />
          )}
        </div>
        
        <div className='calendarBody '>
          {currentMonthDateArr.map((week) => 
                week.map((day) => 
                  <SingleDaysPanel day={day.$D} isDateToday={isDateToday(startingDate, day.$d)} />
                )
          )}
        </div>
    </div>
  )
}

export default MaiselCalendar