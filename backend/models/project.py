#!/usr/bin/python3
"""
file: project.py
Desc: Module that contains project model of the app
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


class Project(BaseModel, Base):
    """Project model"""
    __tablename__ = "projects"
    title = Column(String(1024))
    content = Column(Text)
    signatures = Column(String(20000))
    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)
