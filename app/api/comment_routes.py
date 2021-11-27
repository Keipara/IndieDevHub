from flask import Blueprint, jsonify, request, Flask
from flask_login import login_required
from app.forms.update_comment import UpdateCommentForm
from app.models import db, Comment
from app.forms import NewProjectForm, NewRoleForm
from app.forms.update_project import UpdateProjectForm
from .auth_routes import validation_errors_to_error_messages
import flask

comment_routes = Blueprint('comments', __name__)
project_routes = Blueprint('projects', __name__)

app = flask.Flask(__name__)

# Get project comments
@comment_routes.route('/<int:projectId>/comments')
@login_required
def get_comments(projectId):

    projectComments = Comment.query.filter(Comment.project_id == projectId).all()
    comments = [comment.to_dict() for comment in projectComments]
    return {"comments": comments}

# # Add a message to a channel
# @project_routes.route('/<int:projectId>', methods=['POST'])
# @login_required
# def add_message(channel_id):
#     form = NewMessageForm()

#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         message = Channel_Message(channel_id=form.data['channel_id'],
#             user_id=form.data['user_id'],
#             message=form.data['message'],
#             date=datetime.datetime.today()
#             )
#         db.session.add(message)
#         db.session.commit()

#         return message.to_dict()

#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# Update a message
@comment_routes.route('/<int:comment_id>', methods=['PATCH'])
@login_required
def update_comment(comment_id):
    form = UpdateCommentForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment.query.filter(Comment.id == form.data['comment_id']).first()
        comment.comment = form.data['comment']
        db.session.commit()

        return comment.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Delete a message
@comment_routes.route('/<int:comment_id>', methods=['DELETE'])
@login_required
def delete_comment(comment_id):
    comment = Comment.query.filter(Comment.id == comment_id).first()
    if comment:
        db.session.delete(comment)
        db.session.commit()
    return "Deleted comment"
