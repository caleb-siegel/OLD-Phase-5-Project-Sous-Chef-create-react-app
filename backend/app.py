from flask import Flask, make_response, jsonify, request, session, g
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, User, User_Tag, User_Recipe, User_Recipe_Tag, Meal_Prep, Recipe, Recipe_Ingredient, Tag, Recipe_Tag, Source_Category
from dotenv import dotenv_values
from flask_bcrypt import Bcrypt
import json
config = dotenv_values(".env")

app = Flask(__name__)
app.secret_key = config['FLASK_SECRET_KEY']
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)

db.init_app(app)

@app.route("/")
def root():
    return "<h1>Welcome to the simple json server<h1>"

# @app.get('/check_session')
# def check_session():
#     user = db.session.get(User, session.get('user_id'))
#     print(f'check session {session.get("user_id")}')
#     if user:
#         return user.to_dict(rules=['-password_hash']), 200
#     else:
#         return {"message": "No user logged in"}, 401

# @app.delete('/logout')
# def logout():
#     session.pop('user_id')
#     return { "message": "Logged out"}, 200

# @app.post('/login')
# def login():
#     print('login')
#     data = request.json
#     user = User.query.filter(User.name == data.get('name')).first()
#     if user and bcrypt.check_password_hash(user.password_hash, data.get('password')):
#         session["user_id"] = user.id
#         print("success")
#         return user.to_dict(), 200
#     else:
#         return { "error": "Invalid username or password" }, 401
    
# @app.post('/user')
# def post_user():
#     data = request.json
#     try:
#         new_user = User(
#             name= data.get("name"),
#             password_hash= bcrypt.generate_password_hash(data.get("password_hash"))
#         )
#         db.session.add(new_user)
#         db.session.commit()
        
#         return new_user.to_dict(), 201
#     except Exception as e:
#         print(e)
#         return {"error": f"could not post user: {e}"}, 405

if __name__ == "__main__":
    app.run(port=5555, debug=True)