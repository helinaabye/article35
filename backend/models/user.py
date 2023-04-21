#!/usr/bin/python3
"""
file: user.py
Desc: Module that contains user module of the app
Authors: .....
Date Created: Apr 20 2023
"""

from models.base import BaseModel, Base
from sqlalchemy import Column, String, Text, ForeignKey, Integer, Integer, Integer, Integer
from sqlalchemy.orm import relationship
from typing import Any


class User(BaseModel, Base):
    """User model"""
    __tablename__ = 'users'
    name = Column(String(200), nullable=False)
    username = Column(String(200), nullable=False)
    email = Column(String(200), nullable=False)
    image_url = Column(String(1024))
    phone_number = Column(String(200), nullable=False)
    password_digest = Column(String(1024), nullable=False)
    type = Column(String(60), nullable=False)
    bio = Column(Text)

    # One to many relationship with blogs
    blogs = relationship('Blog', backref='users')
    # One to many relationship with events
    events = relationship('Event', backref='users')
    # One to many relationship with projects
    projects = relationship('Project', backref='users')

    def __init__(self, *args: str, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
