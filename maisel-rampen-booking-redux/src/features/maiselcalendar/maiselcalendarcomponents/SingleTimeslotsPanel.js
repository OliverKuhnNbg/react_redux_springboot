import React from 'react'
import { add, format } from 'date-fns';
import events from '../events';

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
  const currentSlotEvents = getCurrentSlotEvents(slotDate);

  const isSlotBookedStart = (currentSlotDate) => {
    let isBooked = false;
    
    if(currentSlotEvents.length > 0) {
      isBooked = true;
    }
    return isBooked;
  }
  const isBookedStart = isSlotBookedStart(slotDate); 

  console.log('\n\nevents per day');
  console.log(isBookedStart);
  console.log(currentSlotEvents.length);
  console.log(currentSlotEvents);

  return (
    <div className={'bodyDay ramp-' + rampIndex}>{isBookedStart===false ? '' : 'Oli'} {rampIndex + ' '} ** {(format(slotDate, 'kk:mm'))} *</div>
  )
}

export default SingleTimeslotsPanel