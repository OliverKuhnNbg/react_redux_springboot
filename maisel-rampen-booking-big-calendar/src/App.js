
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import { getCurrentDayDate } from './util'


const localizer = momentLocalizer(moment);
console.log(localizer)

//const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

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
        <div className="calendar-wrapper">
          <BigCalendar
            localizer={localizer}
            events={events}
            step={60}
            defaultDate={currentDate}
            popup={false}
            onShowMore={(events, date) => this.setState({ showModal: true, events })}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
