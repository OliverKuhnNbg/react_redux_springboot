import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { getMonth } from './util'
import CalendarHeader  from './components/calendar/CalendarHeader';
import Sidebar  from './components/calendar/Sidebar';
import Month from './components/calendar/Month';

function App() {
  //console.table(getMonth())
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  console.log(currentMonth.length)
  return (
    <div className="App">
      <div className="h-100 d-flex flex-column">
        <CalendarHeader />
        <div className="row">
          <div className='col-1'>
            <Sidebar />
          </div>
          <div className='col-2'>
            <Month month={currentMonth} />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
