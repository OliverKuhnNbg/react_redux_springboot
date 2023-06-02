import logo from './logo.svg';
import './App.scss';
import { Example } from './components/Example';
import { ClassExample } from './components/ClassExample';

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
        <Example color="gelb"/>
      </div>

      <div>
        <ClassExample color="blau" />
      </div>
    </div>
  );
}

export default App;
