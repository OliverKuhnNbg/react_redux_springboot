import React from 'react'
import { add, format } from 'date-fns';

export function SingleTimeslotsPanel({slot, index}) {

  return (
    <div className='singleTimes'>
        <div>{ slot.$H !== 0 ? (format(slot.$d, 'kk:mm')) : (format(slot.$d, '00:mm')) }</div>
     </div>
  )
}