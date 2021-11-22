from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SelectField
from wtforms.validators import DataRequired, ValidationError

genre = ['Other', 'Unity', 'Unreal', 'Godot', 'Ren\'Py']


class NewProjectForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    project_description = StringField("project_description", validators=[DataRequired()])
    owner_description = StringField("owner_description", validators=[DataRequired()])
    genres = SelectField("genre", choices=genre)
    image = StringField("image")
