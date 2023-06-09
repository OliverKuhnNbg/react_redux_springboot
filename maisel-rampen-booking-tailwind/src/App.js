import React, { useState } from 'react';
import './App.css';
import { getMonth } from './util';
import CalendarHeader from './components/calendar/CalendarHeader';
import Sidebar from './components/calendar/Sidebar';
import Month from './components/calendar/Month';

function App() {
  console.table(getMonth());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  return (
    <div className="App">
      <div className='h-screen flex flex columns my-10 mx-10'>
        <CalendarHeader />

        <div className='flex flex-1'>
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </div>
  );
}

export default App;
