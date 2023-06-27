import React from 'react'

import MaterialIcon, {colorPalette} from 'material-icons-react';
import { weekDays, months } from '../constants';
import { getMonthCalendar } from '../util';

function CalendarPagingMonth(props) {
  console.log('test month Paging')

  const setParentCurrentFullDate = (date) => {
    props.setCurrentFullDate(date);
  }
  const setParentCurrentMonthDateArr = (newPagingDate) => {
    props.setCurrentMonthDateArr(getMonthCalendar(newPagingDate));
  }
  const setParentCurrentYear = (year) => {
    props.setCurrentYear(year);
  }
  const setParentCurrentMonth = (month) => {
    props.setCurrentMonth(month);
  }

  return (
    <div className='calendarOptionsWrapper'>
      <a className='paging' onClick={
        (e) => {
          let newPagingDate = new Date(props.currentFullDate.getFullYear(), props.currentFullDate.getMonth() - 1, 1);
          setParentCurrentFullDate(newPagingDate);
          setParentCurrentMonthDateArr(newPagingDate);
          setParentCurrentYear(newPagingDate.getFullYear());
          setParentCurrentMonth(newPagingDate.getMonth());
        }
      }>
        <MaterialIcon icon='chevron_left' />
      </a>
      <div>{months[props.currentMonth]} {props.currentYear}</div>
      <a className='paging' onClick={
        (e) => {
          let newPagingDate = new Date(props.currentFullDate.getFullYear(), props.currentFullDate.getMonth() + 1, 1);
          setParentCurrentFullDate(newPagingDate);
          setParentCurrentMonthDateArr(newPagingDate);
          setParentCurrentYear(newPagingDate.getFullYear());
          setParentCurrentMonth(newPagingDate.getMonth());
        }
      }>
        <MaterialIcon icon='chevron_right' />
      </a>
    </div>
  )
}

export default CalendarPagingMonth