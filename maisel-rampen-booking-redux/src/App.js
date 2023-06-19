//import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import EventBookingForm from './features/eventbookingform/EventBookingForm';

function App() {
  return (
    <div className='App'>
      <div className='container-fluid'>
        <div className='row'>
          <EventBookingForm />
        </div>
      </div>
    </div>
  );
}

export default App;
