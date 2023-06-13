import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import ToDoList from './features/todolist/ToDoList';
import DateTimePicker from './features/datetimepicker/DateTimePicker';


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
      <div style={mystyle}>
        <DateTimePicker />
      </div>
    </div>
  );
}

export default App;
