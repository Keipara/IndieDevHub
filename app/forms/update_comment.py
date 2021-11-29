from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired, ValidationError

class UpdateCommentForm(FlaskForm):
    comment_id = IntegerField("comment_id", validators=[DataRequired()])
    project_id = IntegerField("project_id", validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    message = StringField("message", validators=[DataRequired()])
