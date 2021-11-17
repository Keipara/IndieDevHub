from app.models import db, Role


def seed_roles():
    one = Role(
        user_id=1, project_id=1, custom_name='role One', type='Producer', quantity='3', description='Description')
    two = Role(
        user_id=2, project_id=1, custom_name='role Two', type='Programmer', quantity='2', description='Description')
    three = Role(
        user_id=3, project_id=1, custom_name='role Three', type='Designer', quantity='1', description='Description')

    db.session.add(one)
    db.session.add(two)
    db.session.add(three)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_roles():
    db.session.execute('TRUNCATE roles RESTART IDENTITY CASCADE;')
    db.session.commit()
