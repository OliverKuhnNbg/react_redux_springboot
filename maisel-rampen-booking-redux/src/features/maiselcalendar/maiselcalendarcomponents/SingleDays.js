import React from 'react'

function SingleDays(props) {
  return (
    <div className={'singleDay ' + (props.active ? ' currentDay' : '')}>{props.day}</div>
  )
}

export default SingleDays