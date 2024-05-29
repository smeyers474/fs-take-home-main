import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    const response = await fetch("http://127.0.0.1:5000/tasks");
    const result = await response.json();
    setTasks(result);
  }

  useEffect(() => {
    fetchTasks();
  }, [])

  function renderTasks() {
    return tasks.map((task) => (<div>{task["title"]} : {task["description"]}</div>));
  }

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
      <div>{renderTasks()}</div>
    </div>
  );
}

export default App;
