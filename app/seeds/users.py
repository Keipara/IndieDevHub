from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='Marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='Bobbie', email='bobbie@aa.io', password='password')
    mystic = User(
        username='7.0.7.', email='mystic@aa.io', password='password')
    jun = User(
        username='Jun', email='jun@aa.io', password='password')
    saber = User(
        username='Saber', email='saber@aa.io', password='password')
    garm = User(
        username='Garm', email='garm@aa.io', password='password')
    magnificus = User(
        username='Magnificus', email='magnificus@aa.io', password='password')
    sus = User(
        username='Sus', email='sus@aa.io', password='password')
    sebastian = User(
        username='Sebastian', email='sebastian@aa.io', password='password')


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(mystic)
    db.session.add(jun)
    db.session.add(saber)
    db.session.add(garm)
    db.session.add(magnificus)
    db.session.add(sus)
    db.session.add(sebastian)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
