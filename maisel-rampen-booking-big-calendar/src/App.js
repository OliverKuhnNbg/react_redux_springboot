
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MaiselBaseCalendar from './components/big-calendar/MaiselBaseCalendar'
import { Calendar as BigCalendar, momentLocalizer, Views as CalendarViews } from 'react-big-calendar';

import events from './events';
import { getCurrentDayDate } from './util'



function App() {
  const currentDate = getCurrentDayDate();

  return (
    <div className="App">
      <h1 className="text-center text-uppercase">big calendar App-Test</h1>
      <div className="row ">
        <div className="col-12 my-4 text-center">
          <span className="h-5">aktuelles Datum:</span> <span className='fw-bold'>{currentDate.format("DD.MM.YYYY")}</span>
        </div>
      </div>

      <div className="row">
        <MaiselBaseCalendar currentDate={currentDate} events={events} />
      </div>
    </div>
  );
}

export default App;
