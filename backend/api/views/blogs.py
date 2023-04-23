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
from models.user import User
import os
from uuid import uuid4
from models.tag import Tag


def validate_blog_data(data):
    """Validates blog data"""
    exp_fields = ['title', 'summery', 'content', 'user_id', 'links']
    for field in exp_fields:
        if not data.get(field):
            abort(400, 'Missing {}'.format(field))
    for field in exp_fields:
        if type(data.get(field)) != str:
            abort(400, "{} filed must be a string".format(field))
    user = storage.get(User, data.get('user_id'))
    if not user:
        abort(400, 'User with id {} does\'nt exist.'.format(data.get('user_id')))


@app_views.route('/blogs', methods=['GET', 'POST'])
def handle_requests_for_all_blogs():
    """Handles requests for blogs"""
    if request.method == 'GET':
        blogs = storage.all(Blog).values()
        for b in blogs:
            if type(b.links) == str:
                setattr(b, 'links', eval(b.links))
        blogs = [b.to_dict() for b in blogs]
        return jsonify(blogs), 200

    if request.method == 'POST':
        data = request.form
        validate_blog_data(data)
        file = request.files
        if not file:
            abort(400, 'File not uploaded')
        image = file['image']
        if not image:
            abort(400, 'Uploaded file is not an image')
        file_name = str(uuid4()) + '-' + data.get('title') + \
            '-' + image.filename
        file_name = file_name.replace(' ', '-')
        full_path = os.path.join(
            os.getcwd(), 'api/assets/blogs/', file_name)
        image.save(full_path)
        path_to_be_stored = os.path.join(
            'assets/blogs/', file_name)
        blog_data = {
            'title': data.get('title'),
            'summery': data.get('summery'),
            'approved': False,
            'content': data.get('content'),
            'user_id': data.get('user_id'),
            'links': data.get('links'),
            'image_url': path_to_be_stored
        }

        blog = Blog(**blog_data)
        blog.save()
        if type(blog.links) == str:
            setattr(blog, 'links', eval(blog.links))

        return jsonify(blog.to_dict()), 201


@app_views.route('/blogs/<blog_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_request_for_single_blog(blog_id):
    """Handles request for single blog based on blog id"""
    blog = storage.get(Blog, blog_id)
    if blog is None:
        abort(404, "Blog with id {} not found".format(blog_id))
    if request.method == 'GET':
        if type(blog.links) == str:
            setattr(blog, 'links', eval(blog.links))
        return jsonify(blog.to_dict())
    if request.method == 'DELETE':
        storage.delete(blog)
        storage.save()
        if type(blog.links) == str:
            setattr(blog, 'links', eval(blog.links))
        return jsonify(blog.to_dict())
    if request.method == 'PUT':
        data = request.form
        if data.get('title'):
            setattr(blog, 'title', data.get('title'))
        if data.get('content'):
            setattr(blog, 'content', data.get('content'))
        if data.get('summery'):
            setattr(blog, 'summery', data.get('summery'))
        if data.get('links'):
            links = data.get('links')
            if type(links) == str:
                links = eval(links)
            stored_links = blog.links
            if type(stored_links) == str:
                stored_links = eval(stored_links)
            if type(stored_links) == list:
                for link in links:
                    stored_links.append(link)
            setattr(blog, 'links', str(stored_links))
        blog.save()
        if type(blog.links) == str:
            setattr(blog, 'links', eval(blog.links))
        return jsonify(blog.to_dict()), 200


@app_views.route('/blogs/<blog_id>/comments', methods=['GET'])
def get_comments_for_blog(blog_id):
    """Handles requests to retrieve and post comments for blogs"""
    blog = storage.get(Blog, blog_id)
    if blog is None:
        abort(404, "Blog with id {} not found".format(blog_id))
    if request.method == 'GET':
        comments = blog.comments
        comments = [c.to_dict() for c in comments]
        return jsonify(comments), 200


@app_views.route('/blogs/<blog_id>/tags', methods=['GET', 'POST'])
def get_tags_for_blog(blog_id):
    """Handles requests to retrieve and link tags for blogs"""
    blog = storage.get(Blog, blog_id)
    if blog is None:
        abort(404, "Blog with id {} not found".format(blog_id))
    if request.method == 'GET':
        tags = blog.tags
        tags = [t.to_dict() for t in tags]
        return jsonify(tags), 200
    if request.method == 'POST':
        data = request.get_json()
        tag_ids = data.get("tag_ids")
        if tag_ids is None:
            abort(400, "Missing tag_ids")
        tags = []
        for tag_id in tag_ids:
            tags.append(storage.get(Tag, tag_id))
        if tags:
            tags_to_be_added = [
                t for t in tags if t not in blog.tags]
            [blog.tags.append(t) for t in tags_to_be_added]
        storage.save()
        return jsonify({"number_of_new_tags_added": len(tags_to_be_added)})


@app_views.route('/blogs/<blog_id>/likes', methods=['GET', 'POST'])
def handle_likes_for_blogs(blog_id):
    """Handles like related tasks for blogs"""
    blog = storage.get(Blog, blog_id)
    if blog is None:
        abort(404, "Blog with id {} not found".format(blog_id))
    if request.method == 'GET':
        return jsonify({'likes': blog.likes})
    if request.method == 'POST':
        data = request.get_json()
        if not data.get('status'):
            abort(400, "Status is required")
        if data.get('status') not in ['up', 'down']:
            abort(400, 'Status must be up or down')
        if (data.get('status')) == 'up':
            setattr(blog, 'likes', blog.likes + 1)
        else:
            setattr(blog, 'likes', blog.likes - 1)
        blog.save()
        if type(blog.links) == str:
            setattr(blog, 'links', eval(blog.links))
        return jsonify(blog.to_dict())


@app_views.route('/blogs/<blog_id>/approve', methods=['POST'])
def approve_single_blog(blog_id):
    """Handles requests for approving blogs"""
    blog = storage.get(Blog, blog_id)
    if blog is None:
        abort(404, "Blog with id {} not found".format(blog_id))
    data = request.get_json()
    user_id = data.get('user_id')
    if user_id is None:
        abort(400, 'User id is missed')
    user = storage.get(User, user_id)
    if user is None:
        abort(400, 'No user found with id {}'.format(user_id))
    # Check if the user is admin. Users with admin privilege can approve blogs
    if user.is_admin is False:
        abort(400, 'User is not admin')
    setattr(blog, 'approved', True)
    blog.save()
    if type(blog.links) == str:
        setattr(blog, 'links', eval(blog.links))
    return jsonify(blog.to_dict())


@app_views.route('/blogs/unapproved')
def unapproved_blog_posts():
    """Handles requests to retrive un approved blog posts"""
    posts = storage.all(Blog).values()
    posts = [p for p in posts if p.approved == False]
    for p in posts:
        if type(p.links) == str:
            setattr(p, 'links', eval(p.links))
    posts = [p.to_dict() for p in posts]
    return jsonify(posts), 200


@app_views.route('/blogs/approved')
def approved_blog_posts():
    """Handles requests to retrive approved blog posts"""
    posts = storage.all(Blog).values()
    posts = [p for p in posts if p.approved == True]
    for p in posts:
        if type(p.links) == str:
            setattr(p, 'links', eval(p.links))
    posts = [p.to_dict() for p in posts]
    return jsonify(posts), 200
