import React from 'react'

export default function Day({day}) {
  return (
    <div className='border border-gray-200 d-flex flex-row'>
        <header>
          <p className='text-sm m-1'>{day.format("ddd").toUpperCase()}</p>
          <p classNme='text-sm p-1 my-1 text-center'>{day.format('DD')}</p>
        </header>
    </div>
  )
}