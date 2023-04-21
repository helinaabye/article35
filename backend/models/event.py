#!/usr/bin/python3
"""
file: event.py
Desc: Module that contains event model of the app
Authors: .....
Date Created: Apr 20 2023
"""

from models.base import BaseModel, Base
from sqlalchemy import (
    Column,
    String,
    Text,
    ForeignKey,
    DateTime,
    Table
)
from typing import Any

# Many to many relationship with tags
event_tag = Table(
    'event_tag',
    Base.metadata,
    Column('event_id', String(60),
           ForeignKey('events.id', onupdate="CASCADE", ondelete="CASCADE"),
           primary_key=True),
    Column('tag_id', String(60),
           ForeignKey('tags.id', onupdate="CASCADE", ondelete="CASCADE"),
           primary_key=True,)
)


class Event(BaseModel, Base):
    """Event model"""
    __tablename__ = 'events'
    location = Column(String(1024), nullable=False)
    title = Column(String(1024), nullable=False)
    web_link = Column(String(10000))
    description = Column(Text, nullable=False)
    image_url = Column(String(2000), nullable=False)
    due_date = Column(DateTime, nullable=False)
    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)

    def __init__(self, *args: str, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
