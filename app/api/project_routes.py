from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Project
from app.forms import NewProjectForm
from .auth_routes import validation_errors_to_error_messages

project_routes = Blueprint('projects', __name__)

#GET all projects
@project_routes.route('/')
def all_projects():
    allProjects = Project.query.all()
    projects = [project.to_dict() for project in allProjects]
    return {'projects': projects}

#GET single project
@project_routes.route('/<int:id>')
def single_project(id):
    projects = Project.query.get(id)
    return projects.to_dict()

#POST project
@project_routes.route('/', methods=['POST'])
@login_required
def post_channel():
    form = NewProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        project = Project(
            name=form.data['name'],
            project_description=form.data['project_description'],
            owner_description=form.data['owner_description'],
            deadline=form.data['deadline'],
            genres=form.data['genres'],
            image=form.image['image'])
        db.session.add(project)
        db.session.commit()
        return project.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


#PUT project

#DELETE project
