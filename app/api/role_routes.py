from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Role
from app.forms import NewRoleForm
from .auth_routes import validation_errors_to_error_messages
import datetime
from sqlalchemy import desc

server_routes = Blueprint('roles', __name__)

#GET all roles
@server_routes.route('/')
def all_roles():
    roles = Role.query.all()
    return {'roles': [role.to_dict() for role in roles]}

#POST role
@server_routes.route('/', methods=['POST'])
@login_required
def post_channel():
    form = NewRoleForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        role = Role(
            name=form.data['name'],
            role_description=form.data['role_description'],
            owner_description=form.data['owner_description'],
            deadline=form.data['deadline'],
            genres=form.data['genres'],
            image=form.image['image'])
        db.session.add(role)
        db.session.commit()
        return role.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#PUT role

#DELETE role
