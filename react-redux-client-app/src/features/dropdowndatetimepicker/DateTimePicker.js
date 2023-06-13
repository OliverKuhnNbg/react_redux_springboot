import React, { useState } from 'react'
import ReactCalendar from 'react-calendar';
import { add, format } from 'date-fns';
import { TIMESLOT_START, TIMESLOT_END, TIMESLOT_INTERVAL} from './dateTimePickerConfig'

import '../dropdowndatetimepicker/dateTimePicker.scss'



function DateTimePicker() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const getTimes = () => {
    if(!date) return;

    const selectedDate = date;
    const startTime = add(date, { hours: TIMESLOT_START });
    const endTime = add(date, { hours: TIMESLOT_END });
    
    const interval = TIMESLOT_INTERVAL;

    const timeSlots = [];
    console.log(startTime.hours);

    for(let i = startTime; i < endTime; i=add(i, { minutes: interval })) {
      timeSlots.push(i);
    }

    return timeSlots;
  };

  const times = getTimes();

  const [showCheck, setShowCheck] = useState("false");

  return (
    <div>
      <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
              <button className='btn'
                onClick={ () => {
                  setShowCheck(!showCheck);
                }}
              >@</button>
          </span>
          <span className={"input-group-text " + (date === null ? 'hide-element' : '')} id="basic-addon1">
              <button className='btn'
                onClick={ () => {
                  setShowCheck(!showCheck);
                }}
              >@</button>
          </span>
          <input type="date" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                
          <div className={"dropdown-menu " + (showCheck ? '' : 'show-element')}>
              <li><a className="dropdown-item" >Action</a></li>
              <ReactCalendar 
                minDate={new Date()}
                view='month'
                onClickDay={(d) => {
                  setDate(d);
                }}
              />

              {date !== null &&
                times?.map((time, i) => (
                  <div className={'timeSlot-' + i} key={'timeSlot-' + i}> {i}
                    <button 
                      type='button'
                      onClick={(t) => {
                        console.log(t);
                        setTime(t);
                        console.log(time);
                      }}
                    >{format(time, 'kk:mm')}</button>
                  </div>
                ))  
              }
          </div>
      </div>
    </div>
  )
}

export default DateTimePicker;