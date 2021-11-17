from .db import db

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, unique=False)
    project_description = db.Column(db.String(5000), nullable=False, unique=False)
    owner_description = db.Column(db.String(5000), nullable=False, unique=False)
    created_at = db.Column(db.Date, nullable=False, unique=False)
    deadline = db.Column(db.Date, nullable=False, unique=False)
    genres = db.Column(db.String(200), nullable=False, unique=False)
    image = db.Column(db.String(1000), nullable=True, unique= False)

    user = db.relationship("User", back_populates="projects")
    roles = db.relationship("Role", back_populates="project", cascade='all, delete')


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'user_id': self.user_id,
            'project_description': self.project_description,
            'owner_description': self.owner_description,
            'created_at': self.created_at,
            'deadline': self.deadline,
            'genres': self.genres,
            'image': self.image
        }
