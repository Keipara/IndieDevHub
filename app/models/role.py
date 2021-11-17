from enum import unique
from .db import db

class Role(db.Model):
    __tablename__ = 'roles'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, unique=False)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False, unique=False)
    custom_name = db.Column(db.String(100), nullable=False, unique=False)
    type = db.Column(db.String(100), nullable=False, unique=False)
    quantity = db.Column(db.Integer, nullable=False, unique=False)
    description = db.Column(db.String(1000), nullable=True, unique=False)

    user = db.relationship("User", back_populates="roles")
    project = db.relationship("Project", back_populates="roles")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'project_id': self.project_id,
            'custom_name': self.custom_name,
            'type': self.type,
            'quantity': self.quantity,
            'description': self.description
        }
