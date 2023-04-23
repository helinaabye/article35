#!/usr/bin/python3
"""
file: send_image.py
Desc: Responsible for API end points related to images
Authors: .....
Date Created: Apr 21 2023
"""
from api.views import app_views
from flask import jsonify, request, abort, send_file
from models import storage
from models.user import User
from models.blog import Blog
from models.event import Event


@app_views.route('images/user/<user_id>', methods=['GET'])
def handle_requests_for_user_images(user_id):
    """Handles requests related to user profile pictures"""
    if request.method == 'GET':
        user = storage.get(User, user_id)
        if not user:
            abort(400, 'No user found with id {}'.format(user_id))
        if not user.image_url:
            return {'message': 'No image uploaded'}
        filename = user.image_url
        return send_file(filename, mimetype='image/png')


@app_views.route('images/blog/<blog_id>', methods=['GET'])
def handle_requests_for_blog_images(blog_id):
    """Handles requests related to blog imagegs"""
    if request.method == 'GET':
        blog = storage.get(Blog, blog_id)
        if not blog:
            abort(400, 'No blog found with id {}'.format(blog_id))
        if not blog.image_url:
            return {'message': 'No image uploaded'}
        filename = blog.image_url
        return send_file(filename, mimetype='image/png')


@app_views.route('images/event/<event_id>', methods=['GET'])
def handle_requests_for_event_images(event_id):
    """Handles requests related to event images"""
    if request.method == 'GET':
        event = storage.get(Event, event_id)
        if not event:
            abort(400, 'No event found with id {}'.format(event_id))
        if not event.image_url:
            return {'message': 'No image uploaded'}
        filename = event.image_url
        return send_file(filename, mimetype='image/png')
