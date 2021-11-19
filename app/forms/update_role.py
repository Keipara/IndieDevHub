from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, DateTimeField, SelectField
from wtforms.validators import DataRequired, ValidationError

type = ['Producer', 'Programmer', 'Designer', 'Writer', 'Artist', 'Audio Technician']
quantity = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']

class UpdateRoleForm(FlaskForm):
    id = IntegerField("id", validators=[DataRequired()])
    custom_name = StringField("custom_name", validators=[DataRequired()])
    type = SelectField("genre", choices=type)
    quantity = SelectField("genre", choices=quantity)
    description = StringField("description")
