import {useEffect, useState} from 'react';

function TaskList() {
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
    return tasks.map((task) => (<div key={task["id"]}>{task["title"]} : {task["description"]}</div>));
  }

  return (
    <div>{renderTasks()}</div>
  );
}

export default TaskList;
