from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, DateTimeField, SelectField
from wtforms.validators import DataRequired, ValidationError

genre = ['Other', 'RPG', 'Visual Novel', 'Puzzle', 'Strategy', 'Action', 'Card game', 'Multiplayer', '2D', '3D']

class NewProjectForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    project_description = StringField("project_description", validators=[DataRequired()])
    owner_description = StringField("owner_description", validators=[DataRequired()])
    deadline = DateTimeField("deadline", validators=[DataRequired()])
    genres = SelectField("genre", choices=genre)
    image = StringField("project_description")
