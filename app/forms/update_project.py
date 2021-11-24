from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, DateTimeField, SelectField
from wtforms.validators import DataRequired, ValidationError

genre = ['Other', 'Unity', 'Unreal', 'Godot', 'Ren\'Py']

class UpdateProjectForm(FlaskForm):
    id = IntegerField("id", validators=[DataRequired()])
    name = StringField("name", validators=[DataRequired()])
    project_description = StringField("project_description", validators=[DataRequired()])
    owner_description = StringField("owner_description", validators=[DataRequired()])
    deadline = DateTimeField("deadline", validators=[DataRequired()])
    genres = SelectField("genre", choices=genre)
    image = StringField("project_description")
