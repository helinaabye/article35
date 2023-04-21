#!/usr/bin/python3
"""
file: projects.py
Desc: Responsible for API end points related to projects
Authors: .....
Date Created: Apr 21 2023
"""
from api.views import app_views
from flask import jsonify, request, abort
from models import storage
from models.project import Project


@app_views.route('/projects', methods=['GET', 'POST'])
def handle_requests_for_all_projects():
    """Handles requests for projects"""
    if request.method == 'GET':
        projects = storage.all(Project).values()
        projects = [p.to_dict() for p in projects]
        return jsonify(projects), 200

    if request.method == 'POST':
        data = request.get_json()
        print(data)
        return {'Hello': 'World'}
