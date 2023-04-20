#!/usr/bin/python3
"""
file: tag.py
Desc: Module that contains tag model of the app
Authors: .....
Date Created: Apr 20 2023
"""

from models.base import BaseModel, Base
from sqlalchemy import Column, String, Text, ForeignKey, DateTime
from typing import Any


class Tag(BaseModel, Base):
    """Tag model"""
    __tablename__ = 'tags'
    name = Column(String(1024), nullable=False)

    def __init__(self, *args: str, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
