import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './features/counter/counter';
import ToDoList from './features/todolist/ToDoList';
import DateTimePicker from './features/dropdowndatetimepicker/DateTimePicker';
import Dropdown from './features/dropdown/Dropdown';
import DateTimePickerParent from './features/datetimepickerparent/DateTimePickerParent';


const mystyle = {
  marginTop: "50px",
  marginBottom: "30px",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Counter />
      </div>
      <hr style={mystyle}></hr>
      <div style={mystyle}>
        <ToDoList />
      </div>
      <hr style={mystyle}></hr>
      <div style={mystyle}>
        <DateTimePicker />
      </div>
      <hr style={mystyle}></hr>
      <div className='row col-12 my-5'>
        <Dropdown />
      </div>
      <hr style={mystyle}></hr>
      <div className='row col-12 my-5'>
        <DateTimePickerParent />
      </div>
    </div>
  );
}

export default App;
