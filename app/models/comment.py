from .db import db

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False, unique=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, unique=False)
    message = db.Column(db.String(2000), nullable=False, unique=False)

    projects = db.relationship("Project", back_populates="comments")
    user = db.relationship("User", back_populates="comments")

    def to_dict(self):
        return {
            'id': self.id,
            'project_id': self.project_id,
            'user_id': self.user_id,
            'message': self.message,
            'user': self.user.to_dict()
        }
