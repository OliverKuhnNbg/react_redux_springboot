import React from 'react'
import { add, format } from 'date-fns';

export function SingleTimesPanel({slot, index}) {

  return (
    <div className='singleTimes'>
        { slot.$H !== 0 ? (format(slot.$d, 'kk:mm')) : (format(slot.$d, '00:mm')) }
     </div>
  )
}