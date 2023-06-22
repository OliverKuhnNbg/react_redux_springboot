import React from 'react';
import events from '../events';
import EventsViewMonth from './EventsViewMonth';

function SingleDaysPanel(props) {
  const eventList = events;

  const isEventPresent = (currentPanelDate) => {
    let eventListPerDay = []
    eventList.map((event) => {
      let eventDate = event.start;
      let eventDateDay = eventDate.getDate()
      let eventDateMonth = eventDate.getMonth();
      let eventDateYear = eventDate.getFullYear();
      
      if (eventDateDay === currentPanelDate.getDate() && eventDateMonth === currentPanelDate.getMonth() && eventDateYear === currentPanelDate.getFullYear()) {
        console.log("\n\ntest logic");
        console.log(currentPanelDate);
        console.log(event.start)
        eventListPerDay.push(event);
      }
    });

    return eventListPerDay;
  }
  const currentDayEvents = isEventPresent(props.dayDate);
  console.log("events per day: " + currentDayEvents.length)
  console.log(currentDayEvents[0])

  return (
    <div className={'singleDay '}>
      <span className={ props.isDateToday ? 'currentDay' : ''}>{props.dayDate.getDate()}</span>
      {currentDayEvents.length > 0 &&
        <EventsViewMonth currentDayEvents={currentDayEvents} />
      }
    </div>
  )
}

export default SingleDaysPanel