import React from 'react'

function SingleDaysPanel(props) {
  
  return (
    <div className={'singleDay '}>
      <span className={ props.isDateToday ? 'currentDay' : ''}>{props.day}</span>
    </div>
  )
}

export default SingleDaysPanel