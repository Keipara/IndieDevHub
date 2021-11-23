from flask import Blueprint, jsonify, request, Flask
from flask_login import login_required
from app.models import db, Project, Role
from app.forms import NewProjectForm, NewRoleForm
from app.forms.update_project import UpdateProjectForm
from .auth_routes import validation_errors_to_error_messages
import flask
import datetime

project_routes = Blueprint('projects', __name__)

app = flask.Flask(__name__)

#GET all projects
@project_routes.route('/')
def all_projects():
    allProjects = Project.query.all()
    projects = [project.to_dict() for project in allProjects]
    return {'projects': projects}

#POST project
@project_routes.route('/new', methods=['POST'])
def post_project():
    form = NewProjectForm()
    body = request.json
    print("BBBBBBBBBB", body)
    string = body['array']
    print("SSSSSSSSSS", string)
    array = eval(string)
    print("RRRRRRRRRRR", array)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        project = Project(
            name=form.data['name'],
            user_id=form.data['user_id'],
            project_description=form.data['project_description'],
            owner_description=form.data['owner_description'],
            created_at=datetime.datetime.today(),
            deadline=body['deadline'],
            genres=form.data['genres'],
            image=form.data['image'],
            )
        db.session.add(project)
        db.session.commit()

        for ele in array:
            print("AAAAAAAAAAAAAAA", ele)
            role = Role(
                user_id=form.data['user_id'],
                project_id=project.id,
                custom_name=ele['customName'],
                type=ele['type'],
                quantity=ele['quantity'],
                description=ele['description'])
            db.session.add(role)
            db.session.commit()
            
        return project.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#PATCH project
@project_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def update_project(id):
    form = UpdateProjectForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        project = Project.query.filter(Project.id == form.data['id']).first()
        project.name = form.data['name']
        project.project_description = form.data['project_description']
        project.owner_description = form.data['owner_description']
        project.deadline = form.data['deadline']
        project.genres = form.data['genres']
        project.image = form.data['image']
        db.session.commit()

        return project.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#DELETE project
@project_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_project(id):
    project = Project.query.filter(Project.id == id).first()
    if project:
        db.session.delete(project)
        db.session.commit()
    return "Deleted project"
