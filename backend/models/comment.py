#!/usr/bin/python3
"""
file: comment.py
Desc: Module that contains comment model of the app
Authors: .....
Date Created: Apr 20 2023
"""

from models.base import BaseModel, Base
from sqlalchemy import (
    Column,
    String,
    Text,
    ForeignKey,
)
from typing import Any


class Comment(BaseModel, Base):
    """Comment model"""
    __tablename__ = "comments"
    comment = Column(Text)
    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)
    blog_id = Column(String(60), ForeignKey('blogs.id'), nullable=False)
