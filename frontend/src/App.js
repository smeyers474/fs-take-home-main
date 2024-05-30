import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <h1 className="App-title">Task List Project</h1>
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
