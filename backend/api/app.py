#!/usr/bin/python3
"""
file: app.py
Desc: A module to initiate the API
Authors: .....
Date Created: April 21 2023
"""

from flask import Flask, make_response, jsonify
from models import storage
from api.views import app_views
from flask_cors import CORS
app = Flask(__name__)
app.url_map.strict_slashes = False
app.register_blueprint(app_views)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.errorhandler(404)
def page_not_found(error):
    """Page Not Found handler"""
    d = error.description
    return make_response(jsonify({'error': d}), 404)


@app.errorhandler(400)
def bad_request(error):
    """Bad Request handler"""
    d = error.description
    return make_response(jsonify({'error': d}), 400)


@app.errorhandler(401)
def unauthorized(error) -> str:
    """Unauthorized handler.
    """
    return jsonify({"error": "Unauthorized"}), 401


@app.errorhandler(403)
def forbidden(error) -> str:
    """Forbidden handler.
    """
    return jsonify({"error": "Forbidden"}), 403


@app.errorhandler(405)
def forbidden(error) -> str:
    """Method not allowed handler.
    """
    return jsonify({"error": "Method not allowed"}), 405


@app.teardown_appcontext
def tear_down_db(execute):
    """Removes the current SQLAlchemy session after each request
    is completed"""
    storage.close()


if __name__ == "__main__":
    app.run(host='0.0.0.0',
            port=5000,
            threaded=True, debug=True)
