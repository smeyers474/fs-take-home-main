import {useState} from 'react';

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addTask() {
    const form = new FormData();
    form.append("title", title);
    form.append("description", description);
    fetch("http://127.0.0.1:5000/task", {
      method: "POST",
      body: form,
    });
  }

  return (
    <form id="create-task-form">
      <div>
        <label for="title">What is the task title?</label>
        <input name="title" id="title" onChange={event => setTitle(event.target.value)} />
      </div>
      <div>
        <label for="description">Who is the task description?</label>
        <input name="description" id="description" onChange={event => setDescription(event.target.value)} />
      </div>
      <div>
        <button onClick={addTask()}>Create task</button>
      </div>
    </form>
  );
}

export default AddTask;
