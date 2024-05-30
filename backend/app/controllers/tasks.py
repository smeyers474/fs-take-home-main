from flask import request, jsonify
from app import app, db
from app.models import Task

@app.route('/tasks', methods=['GET', 'POST'])
def handle_tasks():
    if request.method == 'GET':
        tasks = Task.query.all()
        return jsonify([{'id': task.id, 'title': task.title, 'description': task.description, 'completed': task.completed} for task in tasks]), 200
    # Add POST logic here
    elif request.method == 'POST':
        return "post", 200
    else: return "handle_tasks error", 400

# Add more routes here
@app.route('/task', methods=['GET', 'POST'])
def handle_task():
    if request.method == 'GET':
        task = Task.query.get(request.args.get("id"))
        if task:
            return jsonify({'id': task.id, 'title': task.title, 'description': task.description, 'completed': task.completed}), 200
        else: return 'no such task', 404
    # Add POST logic here
    elif request.method == 'POST':
        task = Task(
            title=request.form.get("title"),
            description=request.form.get("description")
        )
        db.session.add(task)
        db.session.commit()
        return "success", 200
    else: return "handle_task error", 400