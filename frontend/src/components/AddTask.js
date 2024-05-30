import {useState} from 'react';

function AddTask({tasks, setTasks}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function addTask() {
    if (title === "" || description === "") {
      return;
    }
    const form = new FormData();
    form.append("title", title);
    form.append("description", description);
    const response = await fetch("http://127.0.0.1:5000/task", {
      method: "POST",
      body: form,
    });
    if (response.status !== 201) {
      alert("Create task failed");
      return;
    }
    const result = await response.json();
    setTasks([...tasks, result])
  }

  return (
    <form id="create-task-form">
      <div className="form-group">
        <label for="title">What is the task title?</label>
        <input 
          className="form-control"
          id="title" 
          onChange={event => setTitle(event.target.value)} 
          required />
      </div>
      <div>
        <label for="description">What is the task description?</label>
        <input
          className="form-control"
          id="description"
          onChange={event => setDescription(event.target.value)}
          required />
      </div>
      <div>
        <button type="button" className="btn btn-primary mt-2" onClick={() => addTask()}>
          Create task
        </button>
      </div>
    </form>
  );
}

export default AddTask;
