#!/usr/bin/python3
"""
file: users.py
Desc: Responsible for API end points related to users
Authors: .....
Date Created: Apr 21 2023
"""
from api.views import app_views
from flask import jsonify, request, abort
from models import storage
from models.user import User
from api.auth.encrypt_password import hash_password, is_valid
import os


def validate_user_data(data):
    """Validates user data while registering"""
    expected_data = ['first_name', 'last_name', 'username', 'email',
                     'phone_number', 'is_admin', 'password']
    for ex_data in expected_data:
        if data.get(ex_data) is None:
            abort(400, "Missing {}".format(ex_data))
    for ex_data in expected_data:
        if type(data.get(ex_data)) != str:
            abort(400, "{} must be string".format(ex_data))
    if data.get('is_admin') not in ['True', 'False']:
        abort(400, "is_admin must be either True or False")

    users = storage.all(User).values()
    for user in users:
        if user.username == data.get('username'):
            abort(400, "Username exists")
        if user.phone_number == data.get('phone_number'):
            abort(400, 'Phone Number exists')
        if user.email == data.get('email'):
            abort(400, 'Email exists')


@app_views.route('/users', methods=['GET'])
def handle_requests_for_all_users():
    """Handles requests for users"""
    if request.method == 'GET':
        users = storage.all(User).values()
        users = [u.to_dict() for u in users]
        return jsonify(users), 200


@app_views.route('/users/sign-up', methods=['POST'])
def user_signup():
    """Handles user registration"""
    if request.method == 'POST':
        data = request.form
        validate_user_data(data)
        # Get all required user data from the request object
        user_data = {
            'first_name': data.get('first_name'),
            'last_name': data.get('last_name'),
            'username': data.get('username'),
            'password_digest': hash_password(data.get('password')),
            'is_admin': True if data.get('password') == 'True' else False,
            'email': data.get('email'),
            'phone_number': data.get('phone_number')
        }
        new_user = User(**user_data)
        new_user.save()
        return jsonify(new_user.to_dict()), 201


@app_views.route('users/<user_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_request_for_single_user(user_id):
    """Hanldes api requests for single user"""
    user = storage.get(User, user_id)
    if user is None:
        abort(404, "User with id {} Not found".format(user_id))
    if request.method == 'GET':
        return jsonify(user.to_dict()), 200
    if request.method == 'PUT':
        file = request.files
        data = request.form
        if file:
            image = file['image']
            file_name = user.username + '-' + user.id + image.filename
            file_name = file_name.replace(' ', '-')
            full_path = os.path.join(
                os.getcwd(), 'api/assets/users/', file_name)
            image.save(full_path)
            path_to_be_stored = os.path.join(
                'assets/users/', file_name)
            setattr(user, 'image_url', path_to_be_stored)
            user.save()
        if data:
            bio = data.get('bio')
            setattr(user, 'bio', bio)
            user.save()

        return jsonify(user.to_dict()), 200

    if request.method == 'DELETE':
        storage.delete(user)
        storage.save()
        return jsonify(user.to_dict()), 200
