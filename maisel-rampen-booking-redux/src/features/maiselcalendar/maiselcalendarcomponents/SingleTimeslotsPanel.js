import React from 'react'
import { add, format } from 'date-fns';

function SingleTimeslotsPanel({slotDate, keyProp}) {
  return (
    <div className={'bodyDay ramp-' + keyProp}>{keyProp + ' '} ** {(format(slotDate, 'kk:mm'))} *</div>
  )
}

export default SingleTimeslotsPanel