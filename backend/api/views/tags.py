#!/usr/bin/python3
"""
file: tags.py
Desc: Responsible for API end points related to tags
Authors: .....
Date Created: Apr 21 2023
"""
from api.views import app_views
from flask import jsonify, request, abort
from models import storage
from models.tag import Tag


def validate_tag_input(data):
    """Method to validate tag data sent from the front end"""
    if data is None:
        abort(400, "Not a Json")
    if data.get("name") is None:
        abort(400, "Missing name")
    if type(data.get('name')) != str:
        abort(400, "Name must be string")
    tags = storage.all(Tag).values()
    for t in tags:
        if t.name == data.get('name'):
            abort(400, "This tag is already in the database")


@app_views.route('/tags', methods=['GET', 'POST'])
def handle_requests_for_all_tags() -> jsonify:
    """Handles requests for tags"""
    if request.method == 'GET':
        tags = storage.all(Tag).values()
        tags = [t.to_dict() for t in tags]
        return jsonify(tags), 200

    if request.method == 'POST':
        data = request.get_json()
        validate_tag_input(data)
        tag_data = {'name': data.get('name')}
        tag = Tag(**tag_data)
        tag.save()
        return jsonify(tag.to_dict()), 201


@app_views.route('/tags/<tag_id>', methods=['GET', 'DELETE', 'PUT'])
def handle_requests_for_single_tag(tag_id=None):
    "Handle request for single tag"
    tag = storage.get(Tag, tag_id)
    if tag is None:
        abort(404, "Tag with id {} Not found".format(tag_id))
    if request.method == 'GET':
        return jsonify(tag.to_dict()), 200
    if request.method == 'DELETE':
        storage.delete(tag)
        storage.save()
        return jsonify(tag.to_dict()), 200
    if request.method == 'PUT':
        data = request.get_json()
        validate_tag_input(data)
        setattr(tag, 'name', data.get('name'))
        tag.save()
        return jsonify(tag.to_dict()), 200
