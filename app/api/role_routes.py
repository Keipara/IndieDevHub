from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Role
from app.forms import NewRoleForm
from app.forms.update_role import UpdateRoleForm
from .auth_routes import validation_errors_to_error_messages
import datetime
from sqlalchemy import desc

role_routes = Blueprint('roles', __name__)

#GET all roles
@role_routes.route('/')
def all_roles():
    roles = Role.query.all()
    return {'roles': [role.to_dict() for role in roles]}

#POST role
@role_routes.route('/new', methods=['POST'])
@login_required
def post_role():
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
@role_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def update_role(id):
    form = UpdateRoleForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        role = Role.query.filter(Role.id == form.data['id']).first()
        role.custom_name = form.data['custom_name']
        role.type = form.data['type']
        role.quantity = form.data['quantity']
        role.description = form.data['description']
        db.session.commit()

        return role.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#DELETE project
@role_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_role(id):
    role = Role.query.filter(Role.id == id).first()
    if role:
        db.session.delete(role)
        db.session.commit()
    return "Deleted role"
