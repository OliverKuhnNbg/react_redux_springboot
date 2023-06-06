import React from 'react'
import Day from './Day'

export default function Month( {month} ) {
  return (
    <div className='row'>
        {month.map((row, i) => (
            <React.Fragment key={i}>
                {row.map((day, j) => (
                    
                    <Day day={day} key={j} />
                ))}
            </React.Fragment>
        ))}
    </div>
  )
}
