//import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import EventBookingForm from './features/eventbookingform/EventBookingForm';


function App() {
  return (
    <div className='App'>
      <div className='container-fluid'>
        <EventBookingForm />
      </div>
      <div className='row'>
        <div className='col-12 alert alert-primary' role='alert'>
          A simple primary alert—check it out!
        </div>
      </div>
    </div>
  );
}

export default App;
