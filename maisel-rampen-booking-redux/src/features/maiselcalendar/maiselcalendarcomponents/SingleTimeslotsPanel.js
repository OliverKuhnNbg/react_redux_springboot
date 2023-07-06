import React from 'react'
import { add, format } from 'date-fns';
import events from '../events';
import { getAmountOfTimeSlots } from '../util'

function SingleTimeslotsPanel({slotDate, rampIndex}) {
  const fullEventList = events;

  const getCurrentSlotEvents = (currentSlotDate) => {
    let eventListPerDay = [];

    fullEventList.map((event) => {
      let eventDate = event.start;
      let day = eventDate.getDate();
      let month = eventDate.getMonth();
      let year = eventDate.getFullYear();
      let min = eventDate.getMinutes();
      let hour = eventDate.getHours();

      if(currentSlotDate.getDate() === day && currentSlotDate.getMonth() === month && currentSlotDate.getFullYear() === year) {
        if(min === currentSlotDate.getMinutes() && hour === currentSlotDate.getHours()){
          eventListPerDay.push(event);
        }
      }
    })
    return eventListPerDay;
  }
  const currentSlotEventsStart = getCurrentSlotEvents(slotDate);

  /* check if current slot is a Event-START slot */
  const isSlotBookedStart = () => {
    let isBooked = false;
    
    if(currentSlotEventsStart.length > 0) {
      isBooked = true;
    }
    return isBooked;
  }
  const isBookedStart = isSlotBookedStart();

  /* define height for event */
  const eventUsageOfSlots = isBookedStart ? getAmountOfTimeSlots(currentSlotEventsStart[0].start, currentSlotEventsStart[0].end) : 0;
  const eventHeight = {
    height: eventUsageOfSlots*28+'px',
  }

  return (
    <div className={'bodyDay ramp-' + rampIndex}>
      <div className={'ramp '} style={eventHeight}>{isBookedStart===true ? 'Start' : '' }</div>
    </div>
  )
}

export default SingleTimeslotsPanel