
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import events from "./events";


const localizer = momentLocalizer(moment);
console.log(localizer)

//const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

function App() {
  return (
    <div className="App">
      <h1 className='text-center text-uppercase'>big calendar App-Test</h1>
      <div className="calendar-wrapper">
        <BigCalendar
          localizer={localizer}
          events={events}
          step={60}
          defaultDate={new Date(2015, 3, 1)}
          popup={false}
          onShowMore={(events, date) => this.setState({ showModal: true, events })}
        />
      </div>
    </div>
  );
}

export default App;
