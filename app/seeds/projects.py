from app.models import db, Project
from datetime import datetime, timedelta

deadline = datetime.now() + timedelta(days=14)

def seed_projects():
    one = Project(
        name='Project One', user_id=1, project_description='Project description', owner_description='Owner description',created_at=datetime.today(), deadline=deadline, genres='Other')
    two = Project(
        name='Project Two', user_id=2, project_description='Project description', owner_description='Owner description',created_at=datetime.today(), deadline=deadline, genres='Other')
    three = Project(
        name='Project Three', user_id=3, project_description='Project description', owner_description='Owner description',created_at=datetime.today(), deadline=deadline, genres='Other')

    db.session.add(one)
    db.session.add(two)
    db.session.add(three)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
