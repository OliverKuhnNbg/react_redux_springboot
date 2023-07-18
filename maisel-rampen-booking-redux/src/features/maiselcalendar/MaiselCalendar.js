import React, { useState, useEffect } from 'react';
import './maisel-calendar.scss';

import MaterialIcon, {colorPalette} from 'material-icons-react';
import { weekDays, months } from './constants';
import HeadDays from './maiselcalendarcomponents/HeadDays';
import SingleDaysPanel from './maiselcalendarcomponents/SingleDaysPanel';
import CalendarPagingMonth from './maiselcalendarcomponents/CalendarPagingMonth';
import CalendarMonthlyView from './maiselcalendarcomponents/CalendarMonthlyView';
import { getMonthCalendar, isDateToday } from './util';
import { getDaysInMonth } from 'date-fns';
import dayjs, {format}from 'dayjs';
import { CalendarDailyView } from './maiselcalendarcomponents/CalendarDailyView';
import { RampFilter } from './maiselcalendarcomponents/RampFilter';
import { ramps } from './constants';


function MaiselCalendar({ startingDate }) { 

  const [checkedFilters, setCheckedFilters] = useState(new Array(ramps.length).fill(false));
  const [filterIndex, setFilterIndex] = useState(null);

  console.log('checked filters - maiselCalendar');
  console.log(checkedFilters);

  /* listen to filter options */
  useEffect(() => {
    console.log('\n\n\n\ti changed');
    let dataArr = checkedFilters;
    dataArr[filterIndex] = !dataArr[filterIndex];
    setCheckedFilters(dataArr);

    console.log('\n\n\n arr chged');
    console.table(checkedFilters);
      
  }, [filterIndex])

  return (
    <div>
      <RampFilter allResourcesList={ramps} setFilterIndex={ setFilterIndex } />
      <br/>
      <CalendarMonthlyView startingDate={startingDate} />
      <br />
      <CalendarDailyView startingDate={startingDate} />
    </div>
  )
}

export default MaiselCalendar