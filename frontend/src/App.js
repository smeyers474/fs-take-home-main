import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <div className="App-body">
        <h1 className="App-title">Task List Project</h1>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
