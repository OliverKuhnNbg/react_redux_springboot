import React, { useState } from 'react';
import dayjs from 'dayjs';

export default function Day({day, rowIndex}) {
  console.log(rowIndex);
  
  
  let classes = getCurrentDayClass(day);
  return (
    <div className='border border-gray-200 d-flex flex-row'>
          {rowIndex === 0 && (
            <p className='text-sm m-1 bg-gray-200'>{day.format("ddd").toUpperCase()}</p>
          )}
          
          <p className= {'text-sm p-1 my-1 text-center ' + classes }>{day.format('DD')}</p>
    </div>
  )
}

function getCurrentDayClass(day) {
  let check = false;
  let isDayCurrent = day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? true : false;
  console.log('get class test' + isDayCurrent);
  return isDayCurrent ? 'bg-blue-600 text-white rounded-full' : '';
}