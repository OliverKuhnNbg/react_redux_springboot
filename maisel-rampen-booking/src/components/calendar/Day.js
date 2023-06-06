import React from 'react'

export default function Day({day}) {
  return (
    <div className='d-flex flex-row'>
        <header>
            <p className='text-center fs-6'> <span className='col-3 text-start'>{day.format("ddd").toUpperCase()} </span> <span className='col-1 text-end'>{day.format('DD')}</span></p>
        </header>
    </div>
  )
}