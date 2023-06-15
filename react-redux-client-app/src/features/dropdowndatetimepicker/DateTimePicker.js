import React, { useState } from 'react'
import ReactCalendar from 'react-calendar';
import { add, format } from 'date-fns';
import { TIMESLOT_START, TIMESLOT_END, TIMESLOT_INTERVAL} from './dateTimePickerConfig'

import '../dropdowndatetimepicker/dateTimePicker.scss'
import MaterialIcon, {colorPalette} from 'material-icons-react';



function DateTimePicker(props) {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [inputFieldDateValue, setInputFieldDateValue] = useState("");

  const setParentDate = (time) => {
    props.setDate(time)
  }

  const getTimes = () => {
    if(!date) return;

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
  const [showCheckTime, setShowCheckTime] = useState("false");

  return (
    <div>
      <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
              <button className='btn'
                onClick={ () => {
                  setShowCheck(!showCheck);
                  setShowCheckTime("false");
                }}
              >
                <MaterialIcon icon="calendar_month" />
              </button>
          </span>
          <span className={"input-group-text " + (date === null ? 'hide-element' : '')} id="basic-addon1">
              <button className='btn'
                onClick={ () => {
                  setShowCheckTime(!showCheckTime);
                  setShowCheck("false");
                }}
              >
                <MaterialIcon icon="query_builder" />
              </button>
          </span>
          <input type="text" className="form-control" placeholder="Datum und Zeit wählen DD.MM.JJJJ - hh:mm" aria-label="Username" aria-describedby="basic-addon1" 
            value={inputFieldDateValue} />

          <div className={"dropdown-menu " + (showCheck ? '' : 'show-element')}>
              <ReactCalendar 
                minDate={new Date()}
                view='month'
                onClickDay={(d) => {
                  setDate(d);
                  setInputFieldDateValue((format(d, 'dd.MM.yyyy') + ' - 00:00 Uhr'));
                }}
              />
        </div>

        <div className={"dropdown-menu timeslot-container " + (showCheckTime ? '' : 'show-element')}>
          {date !== null &&
            times?.map((time, i) => (
              <div className={'timeSlot-' + i} key={'timeSlot-' + i}>
                <button className='btn btn-outline-primary btn-sm col-11 mb-1 mx-1'
                  type='button'
                  onClick={(t) => {
                    setTime(t);
                    setShowCheck("false");
                    setShowCheckTime("false");

                    setInputFieldDateValue((format(time, 'dd.MM.yyyy - kk:mm') + ' Uhr'));
                    setParentDate(time);
                  }}
                >
                  {format(time, 'kk:mm')}
                </button>
              </div>
            ))  
          }
        </div>
      </div>
    </div>
  )
}

export default DateTimePicker;