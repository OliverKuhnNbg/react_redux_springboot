import React, { useState } from 'react';
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


function MaiselCalendar({ startingDate }) { 
  return (
    <div>
      <CalendarMonthlyView startingDate={startingDate} />
      <br />
      <CalendarDailyView startingDate={startingDate} />
    </div>
  )
}

export default MaiselCalendar