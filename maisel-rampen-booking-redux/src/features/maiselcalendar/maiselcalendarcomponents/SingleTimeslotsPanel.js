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

  let eventUsageOfSlots = 0;
  if(currentSlotEventsStart.length>0) {
    console.log("\n\n currentslot event");
    console.log(currentSlotEventsStart);
    eventUsageOfSlots = getAmountOfTimeSlots(currentSlotEventsStart[0].start, currentSlotEventsStart[0].end);
  }

  const getCurrentSlotEventsEnd = (currentSlotDate) => {
    let eventListPerDay = [];

    fullEventList.map((event) => {
      let eventDate = event.end;
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
  const currentSlotEventsEnd = getCurrentSlotEventsEnd(slotDate);

  /* check if current slot is START slot */
  const isSlotBookedStart = () => {
    let isBooked = false;
    
    if(currentSlotEventsStart.length > 0) {
      isBooked = true;
    }
    return isBooked;
  }
  const isBookedStart = isSlotBookedStart(slotDate); 

  /* check if current slot is END slot */
  const isSlotBookedEnd = () => {
    let isBooked = false;
    
    if(currentSlotEventsEnd.length > 0) {
      isBooked = true;
    }
    return isBooked;
  }
  const isBookedEnd = isSlotBookedEnd(slotDate); 

  /* console.log('\n\nevents per day');
  console.log(isBookedStart);
  console.log(currentSlotEventsStart.length);
  console.log(currentSlotEventsStart);
  console.log(currentSlotEventsStart.length);
  console.log(currentSlotEventsStart); */

  const eventHeight = {
    height: (eventUsageOfSlots+1)*28+'px',
  }

  return (
    <div className={'bodyDay ramp-' + rampIndex}>
      <div className={'ramp '} style={eventHeight}>{isBookedStart===true ? 'Start' : '' }</div>
    </div>
  )
}

export default SingleTimeslotsPanel