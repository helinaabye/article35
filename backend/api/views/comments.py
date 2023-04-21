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


@app_views.route('/comments', methods=['GET', 'POST'])
def handle_requests_for_all_comments():
    """Handles requests for comments"""
    if request.method == 'GET':
        comments = storage.all(Comment).values()
        comments = [c.to_dict() for c in comments]
        return jsonify(comments), 200

    if request.method == 'POST':
        data = request.get_json()
        print(data)
        return {'Hello': 'World'}
