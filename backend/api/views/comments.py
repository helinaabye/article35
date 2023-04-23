#!/usr/bin/python3
"""
file: comments.py
Desc: Responsible for API end points related to comments
Authors: .....
Date Created: Apr 21 2023
"""
from api.views import app_views
from flask import jsonify, request, abort
from models import storage
from models.comment import Comment
from models.blog import Blog
from models.user import User


def validate_comment_data(data):
    """Validates comment data before storing it into the database"""
    expected_fields = ['user_id', 'blog_id', 'comment']
    for field in expected_fields:
        if data.get(field) is None:
            abort(400, 'Missing {}'.format(field))
    for filed in expected_fields:
        if type(data.get(field)) != str:
            abort(400, 'Value of {} must be a string'.format(field))
    user = storage.get(User, data.get('user_id'))
    if user is None:
        abort(400, 'User with id {} not found'.format(data.get('user_id')))
    blog = storage.get(Blog, data.get('blog_id'))
    if blog is None:
        abort(400, 'Blog with id {} not fund'.format(data.get('blog_id')))


@app_views.route('/comments', methods=['POST'])
def publish_comments():
    """Handles requests for posting comments"""
    if request.method == 'POST':
        data = request.get_json()
        validate_comment_data(data)
        comment_data = {
            'comment': data.get('comment'),
            'user_id': data.get('user_id'),
            'blog_id': data.get('blog_id')
        }
        comment = Comment(**comment_data)
        comment.save()
        return jsonify(comment.to_dict()), 201


@app_views.route('/comments/<comment_id>', methods=['PUT', 'DELETE', 'GET'])
def handle_for_single_comment(comment_id):
    """Handles requests for single comment"""
    comment = storage.get(Comment, comment_id)
    if comment is None:
        abort(404, 'Comment with id {} not found'.format(comment_id))
    if request.method == 'GET':
        return jsonify(comment.to_dict()), 200
    if request.method == 'DELETE':
        storage.delete(comment)
        storage.save()
        return jsonify(comment.to_dict()), 200
    if request.method == 'PUT':
        data = request.get_json()
        comment_body = data.get('comment')
        if comment_body is None:
            abort(400, 'comment is missing')
        if type(comment_body) != str:
            abort(400, 'Contnet of comment must be a string')
        setattr(comment, 'comment', comment_body)
        comment.save()

        return jsonify(comment.to_dict()), 200
