#!/usr/bin/python3
"""
file: events.py
Desc: Responsible for API end points related to events
Authors: .....
Date Created: Apr 21 2023
"""
from api.views import app_views
from flask import jsonify, request, abort
from models import storage
from models.event import Event
from uuid import uuid4
import os
from datetime import datetime


def validate_event_data(data):
    """Validates the data being sent"""
    fields = ['location', 'title', 'web_link', 'description',
              'due_date', 'user_id']
    for f in fields:
        if (data.get(f)) is None:
            abort(400, 'Missing {}'.format(f))
    for f in fields:
        if f == 'due_date':
            continue
        if type(data.get(f)) != str:
            abort(400, '{} must have a string value'.format(f))


def validate_type_of_attr(attr):
    """Validates the type of attribute"""
    if type(attr) != str:
        abort(400, '{} must be string'.format(attr))


@app_views.route('/events', methods=['GET', 'POST'])
def handle_requests_for_all_events():
    """Handles requests for events"""
    if request.method == 'GET':
        events = storage.all(Event).values()
        events = [e.to_dict() for e in events]
        return jsonify(events), 200

    if request.method == 'POST':
        data = request.form
        validate_event_data(data)
        path_to_be_stored = None
        file = request.files
        if file:
            image = file.get('image')
            if not image:
                abort(400, 'Uploaded file is not an image')
            file_name = str(uuid4()) + '-' + data.get('title') + \
                '-' + image.filename
            file_name = file_name.replace(' ', '-')
            full_path = os.path.join(
                os.getcwd(), 'api/assets/events/', file_name)
            image.save(full_path)
            path_to_be_stored = os.path.join(
                'assets/events/', file_name)
        date = data.get('due_date')
        if type(date) == str:
            date = datetime.strptime(date, '%y-%m-%d')
        event_data = {
            'location': data.get('location'),
            'title': data.get('title'),
            'web_link': data.get('web_link'),
            'description': data.get('description'),
            'due_date': date,
            'user_id': data.get('user_id'),
            'image_url': path_to_be_stored
        }
        event = Event(**event_data)
        event.save()
        return jsonify(event.to_dict()), 201


@app_views.route('/events/<event_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_request_for_single_events(event_id):
    """Handles requests for single events based on event_id"""
    event = storage.get(Event, event_id)
    if event is None:
        abort(404, 'Event with id {} not found'.format(event_id))
    if request.method == 'GET':
        return jsonify(event.to_dict()), 200
    if request.method == 'DELETE':
        storage.delete(event)
        storage.save()
        return jsonify(event.to_dict()), 200
    if request.method == 'PUT':
        data = request.get_json()
        title = data.get('title')
        description = data.get('description')
        due_date = data.get('due_date')
        web_link = data.get('web_link')

        if title:
            validate_type_of_attr(title)
            setattr(event, 'title', title)
        if description:
            validate_type_of_attr(description)
            setattr(event, 'description', description)
        if due_date:
            setattr(event, 'due_date', due_date)
        if web_link:
            validate_type_of_attr(web_link)
            setattr(event, 'web_link', web_link)

        event.save()
        return jsonify(event.to_dict()), 200
