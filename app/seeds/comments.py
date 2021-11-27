from app.models import db, Comment
import datetime

def seed_comments():
    a = Comment(project_id=1, user_id=1,  message="comment a")
    b = Comment(project_id=1, user_id=2,  message="comment b")
    c = Comment(project_id=1, user_id=3,  message="comment c")
    d = Comment(project_id=2, user_id=3,  message="comment d")
    e = Comment(project_id=2, user_id=2,  message="comment e")
    f = Comment(project_id=3, user_id=1,  message="comment f")

    db.session.add(a)
    db.session.add(b)
    db.session.add(c)
    db.session.add(d)
    db.session.add(e)
    db.session.add(f)

    db.session.commit()

def undo_comment():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
