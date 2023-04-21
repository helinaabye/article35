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


@app_views.route('/events', methods=['GET', 'POST'])
def handle_requests_for_all_events():
    """Handles requests for events"""
    if request.method == 'GET':
        events = storage.all(Event).values()
        events = [e.to_dict() for e in events]
        return jsonify(events), 200

    if request.method == 'POST':
        data = request.get_json()
        print(data)
        return {'Hello': 'World'}
