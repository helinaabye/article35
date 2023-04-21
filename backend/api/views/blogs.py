#!/usr/bin/python3
"""
file: blogs.py
Desc: Responsible for API end points related to blogs
Authors: .....
Date Created: Apr 21 2023
"""
from api.views import app_views
from flask import jsonify, request, abort
from models import storage
from models.blog import Blog


@app_views.route('/blogs', methods=['GET', 'POST'])
def handle_requests_for_all_blogs():
    """Handles requests for blogs"""
    if request.method == 'GET':
        blogs = storage.all(Blog).values()
        blogs = [b.to_dict() for b in blogs]
        return jsonify(blogs), 200

    if request.method == 'POST':
        data = request.get_json()
        print(data)
        return {'Hello': 'World'}
