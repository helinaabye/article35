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
    first_name = Column(String(200), nullable=False)
    last_name = Column(String(200))
    username = Column(String(200), nullable=False)
    age = Column(Integer)
    email = Column(String(200), nullable=False)
    phone_number = Column(String(200), nullable=False)
    password_digest = Column(String(1024), nullable=False)

    blogs = relationship('Blog', backref='users')
    events = relationship('Event', backref='users')

    def __init__(self, *args: str, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
