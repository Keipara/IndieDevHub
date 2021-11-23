from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, DateTimeField, SelectField
from wtforms.validators import DataRequired, ValidationError

type = ['Producer', 'Programmer', 'Designer', 'Writer', 'Artist', 'Audio Technician']
quantity = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']

class NewRoleForm(FlaskForm):
    custom_name = StringField("custom_name", validators=[DataRequired()])
    type = SelectField("type", choices=type)
    quantity = SelectField("quantity", choices=quantity)
    description = StringField("description")
