from flask import abort, request, jsonify
from app import app, db
from app.models import Task

@app.route('/tasks', methods=['GET'])
def handle_tasks():
    if request.method == 'GET':
        tasks = Task.query.all()
        return jsonify([{'id': task.id, 'title': task.title, 'description': task.description, 'completed': task.completed} for task in tasks]), 200
    else: abort(400)

@app.route('/task', methods=['POST'])
def create_task():
    if request.method == 'POST':
        task = Task(
            title=request.form.get("title"),
            description=request.form.get("description")
        )
        db.session.add(task)
        db.session.commit()
        # after commit, the task object has the other fields set by the database
        return jsonify({'id': task.id, 'title': task.title, 'description': task.description, 'completed': task.completed}), 201
    else: abort(400)

@app.route('/task/<task_id>', methods=['PUT', 'DELETE'])
def handle_task(task_id):
    if request.method == 'PUT':
        task = Task.query.get(task_id)
        if not task:
            abort(404)
        task.completed = True
        db.session.add(task)
        db.session.commit()
        return "success", 200
    elif request.method == 'DELETE':
        task = Task.query.get(task_id)
        if not task:
            abort(404)
        db.session.delete(task)
        db.session.commit()
        return "success", 200
    else: abort(400)
