from random import choice as rc
import random
import math

# from faker import Faker

from app import app
from models import db, User, User_Tag, User_Recipe, User_Recipe_Tag, Meal_Prep, Recipe, Recipe_Ingredient, Tag, Recipe_Tag, Source_Category
from flask_bcrypt import Bcrypt

# fake = Faker()

with app.app_context():

    bcrypt = Bcrypt(app)
    data = {}

    Source_Category.query.delete()
    source_category_instances = []
    source_categories = ["Website", "Cookbook", "Life", "Instagram"]
    for source_category in source_categories:
        category_instance = Source_Category(name=source_category)
        source_category_instances.append(category_instance)
    db.session.add_all(source_category_instances)

    # Recipe.query.delete()


    db.session.commit()

print("seed complete")
