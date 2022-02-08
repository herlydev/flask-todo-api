# Python Flask TODO Api Project
> Python Flask backend app for keeping track of todos.  It uses a flask sqlite database along with flask-marshmallow for object serialization/deserialization.  You can Post, Get, Patch, and Delete todos through flask routes.
- Dependencies
  - Python
    - [python](https://www.python.org/)
  - Flask
    - [flask-pypi](https://pypi.org/project/Flask/)
    - [flask-docs](https://flask.palletsprojects.com/en/1.1.x/)
  - Flask-SQLAlchemy
    - [flask-sqlalchemy-pypi](https://pypi.org/project/Flask-SQLAlchemy/)
    - [flask-sqlalchemy-docs](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
  - Flask-Marshmallow
    - [flask-marshmallow-pypi](https://pypi.org/project/flask-marshmallow/)
    - [flask-marshmallow-docs](https://flask-marshmallow.readthedocs.io/)

- Install all dependencies
```
$ pipenv install Flask Flask-SQLAlchemy flask-marshmallow
```
- Create your sqlite database
```
$ pipenv shell
$ python
>>> from app import db
>>> db.create_all()
```
- Flask Routes
  - POST One Todo
    - http://localhost:5000/todo
    ```
    {
        "title": "Clean My Bedroom",
        "done": false
    }
    ```
  - GET All Todos
    - http://localhost:5000/todos
  - PATCH One Todo (only updates done)
    - http://localhost:5000/todo/id
    ```
    {
        "done": true
    }
    ```
  - DELETE One Todo
    - http://localhost:5000/todo/id
