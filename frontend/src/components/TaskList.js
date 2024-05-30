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
    return tasks.map((task) => (
      <tr key={task["id"]}>
        <td>{task["completed"] ? <del>{task["title"]}</del> : task["title"]}</td>
        <td>{task["completed"] ? <del>{task["description"]}</del> : task["description"]}</td>
        <td>
          {task["completed"] ? "" : <button className="btn btn-secondary me-1" onClick={() => completeTask(task["id"])}>complete</button>}
          <button className="btn btn-danger" onClick={() => deleteTask(task["id"])}>delete</button>
        </td>
      </tr>
    ));
  }

  function completeTask(task_id) {
    fetch("http://127.0.0.1:5000/task/" + task_id, {
      method: "PUT",
    });
    setTasks(tasks.map((task) => {
      if (task.id === task_id) {
        task.completed = true;
      }
      return task
    }))
  }

  function deleteTask(task_id) {
    fetch("http://127.0.0.1:5000/task/" + task_id, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== task_id))
  }

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderTasks()}
      </tbody>
    </table>
  );
}

export default TaskList;
