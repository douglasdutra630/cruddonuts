from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_heroku import Heroku
from environs import Env
import os

app = Flask(__name__)
CORS(app)
heroku = Heroku(app)

env= Env()
env.read_env()
DATABASE_URL = env('DATABASE_URL')

basedir = os.path.abspath(os.path.dirname(__file__))
#app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(basedir, "app.sqlite")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL


db = SQLAlchemy(app)
ma = Marshmallow(app)

class User(db.Model):
    __tablename__= "user"
    user_id = db.Column(db.Integer, primary_key = True)
    user_email = db.Column(db.String(50))
    user_password = db.Column(db.String(50))

    def __init__(self, user_email, user_password):
        self.user_email = user_email
        self.user_password = user_password

class UserSchema(ma.Schema):
    class Meta:
        fields = ('user_id', 'user_email', 'user_password')

user_schema = UserSchema()
users_schema = UserSchema(many=True)

@app.route("/auth/<id>", methods=['GET', 'PATCH'])
def get_user():
    user = User.query.get(id)

    result = user_schema.dump(user)
    return jsonify(result)

def update_user():
    user = User.query.get(id)

    new_email = request.json['user_email']
    new_password = request.json['user_password']

    user.user_email = new_email
    user.user_password = new_password

    db.session.commit()
    return user_schema.jsonify(user)

@app.route("/auth/<id>", methods=["POST"])
def create_user():

    user_email = request.json['user_email']
    user_password = request.json['user_password']

     add_user = User(user_email, user_password)

    db.session.add(add_user)
    db.session.commit()

    user = User.query.get(add_user.id)
    return user_schema.jsonify(user)

@app.route('/auth/<id>', methods=["DELETE"])
def delete_user(id):
    record = User.query.get(id)
    db.session.delete(record)
    db.session.commit()

    return jsonify('Deleted.')


class Product(db.Model):
    __tablename__ = "product"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100))
    image = db.Column(db.String(500))
    description = db.Column(db.String(300))
    review = db.Column(db.String(300))
    category = db.Column(db.String(50))
    quantity = db.Column(db.Integer)
    available = db.Column(db.Integer)

    def __init__(self, name, image, description, review, category, quantity, available):
        self.name = name
        self.image = image
        self.description = description
        self.review = review
        self.category = category
        self.quantity = quantity
        self.available = available

class ProductSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'image', 'description', 'review', 'category', 'quantity', 'available')

product_schema = ProductSchema()
products_schema = ProductSchema(many=True)

@app.route("/", methods=["GET"])
def home():
    return "<h1> Flask Backend </h1>"

#GET
@app.route("/products", methods=["GET"])
def get_products():
    all_products = Product.query.all()
    result = products_schema.dump(all_products)
    return jsonify(result)

@app.route('/product/<id>', methods=['GET'])
def get_product():
    product = Product.query.get(id)

    result = product_schema.dump(product)
    return jsonify(result)

#POST
@app.route("/product", methods=["POST"])
def add_product():
    name = request.json['name']
    image = request.json['image']
    description = request.json['description']
    review = request.json['review']
    category = request.json['category']
    quantity = request.json['quantity']
    available = request.json['available']

    new_product = Product(name, image, description, review, category, quantity, available)

    db.session.add(new_product)
    db.session.commit()

    product = Product.query.get(new_product.id)
    return product_schema.jsonify(product)

#PUT / PATCH
@app.route("/product/<id>", methods=["PATCH"])
def update_product(id):
    product = Product.query.get(id)

    new_name = request.json['name']
    new_image = request.json['image']
    new_description = request.json['description']
    new_review = request.json['review']
    new_category = request.json['category']
    new_quantity = request.json['quantity']
    new_available = request.json['available']

    product.name = new_name
    product.image = new_image
    product.description = new_description
    product.review = new_review
    product.category = new_category
    product.quantity = new_quantity
    product.available = new_available

    db.session.commit()
    return product_schema.jsonify(product)

#DELETE
@app.route('/product/<id>', methods=["DELETE"])
def delete_product(id):
    record = Product.query.get(id)
    db.session.delete(record)
    db.session.commit()

    return jsonify('Deleted.')

if __name__ == "__main__":
    app.debug = True
    app.run()