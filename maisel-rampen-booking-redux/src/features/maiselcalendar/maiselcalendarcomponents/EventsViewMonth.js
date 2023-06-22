import React from 'react'

function EventsViewMonth( { currentDayEvents } ) {
  return (
    <div className='singleEventEntry'>
        {currentDayEvents.map( 
            (item, index) =>
                <div key={index}>{item.title}</div>
        )}
    </div>
  )
}

export default EventsViewMonth