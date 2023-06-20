import React from 'react';
import './maisel-calendar.scss';

import MaterialIcon, {colorPalette} from 'material-icons-react';
import { days } from './constants'
import HeadDays from './maiselcalendarcomponents/HeadDays';
import SingleDays from './maiselcalendarcomponents/SingleDays';
import { range } from './util';


function MaiselCalendar() {
  return (
    <div className='wrapper'>
        <div className="calendarHeadWrapper">
          <MaterialIcon icon="chevron_left" />
          <div className='calendar-head'>test</div>
          <MaterialIcon icon="chevron_right" />
        </div>

        <div className='sevenColGrid'>
          {days.map((day) => 
            <HeadDays day={day} />
          )}
        </div>

        <div className='calendarBody'>
          {range(31).map((day) => 
            <SingleDays day={day} />
          )}
        </div>
    </div>
  )
}

export default MaiselCalendar