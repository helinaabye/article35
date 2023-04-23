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
from models.user import User


def validate_type_of_attr(attr):
    """Validate the data type of attributes"""
    if type(attr) != str:
        abort(400, '{} must be string'.format(attr))


def validate_project_data(data):
    """Validates a project data"""
    fields = ['title', 'content', 'user_id']
    for f in fields:
        if data.get(f) is None:
            abort(400, 'Missing {}'.format(f))
    for f in fields:
        if type(data.get(f)) != str:
            abort(400, '{} must have string value'.format(f))
    user_id = data.get('user_id')
    user = storage.get(User, user_id)
    if not user:
        abort(400, 'User with id {} does not exist'.format(user_id))


@app_views.route('/projects', methods=['GET', 'POST'])
def handle_requests_for_all_projects():
    """Handles requests for projects"""
    if request.method == 'GET':
        projects = storage.all(Project).values()
        for project in projects:
            if type(project.signatures) == str:
                setattr(project, 'signatures', eval(project.signatures))
        projects = [p.to_dict() for p in projects]
        return jsonify(projects), 200

    if request.method == 'POST':
        data = request.get_json()
        validate_project_data(data)
        project_data = {
            'title': data.get('title'),
            'content': data.get('content'),
            'user_id': data.get('user_id'),
            'signatures': "[]"
        }

        project = Project(**project_data)
        project.save()

        if type(project.signatures) == str:
            setattr(project, 'signatures', eval(project.signatures))

        return jsonify(project.to_dict()), 201


@app_views.route('/projects/<project_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_request_for_single_project(project_id):
    """Handles requests for single project based on project_id"""
    project = storage.get(Project, project_id)
    if project is None:
        abort(404, 'Project with id {} not found'.format(project_id))
    if request.method == 'GET':
        if type(project.signatures) == str:
            setattr(project, 'signatures', eval(project.signatures))
        return jsonify(project.to_dict()), 200
    if request.method == 'DELETE':
        storage.delete(project)
        storage.save()
        if type(project.signatures) == str:
            setattr(project, 'signatures', eval(project.signatures))
        return jsonify(project.to_dict()), 200
    if request.method == 'PUT':
        data = request.get_json()
        title = data.get('title')
        content = data.get('content')
        signature = data.get('signature')
        if title:
            validate_type_of_attr(title)
            setattr(project, 'title', title)
        if content:
            validate_type_of_attr(content)
            setattr(project, 'content', content)
        if signature:
            validate_type_of_attr(signature)
            signatures = project.signatures
            if type(signatures) == str:
                signatures = eval(signatures)
            signatures.append(signature)
            setattr(project, 'signatures', str(signatures))

        project.save()
        if type(project.signatures) == str:
            setattr(project, 'signatures', eval(project.signatures))
        return jsonify(project.to_dict())
