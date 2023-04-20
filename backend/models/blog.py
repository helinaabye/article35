#!/usr/bin/python3
"""
file: blog.py
Desc: Module that contains Blog model of the app
Authors: .....
Date Created: Apr 20 2023
"""
from models.base import BaseModel, Base
from sqlalchemy import (
    Column,
    String,
    Text,
    ForeignKey,
    Boolean,
    Table
)
from typing import Any


blog_tag = Table(
    'blog_tag',
    Base.metadata,
    Column('blog_id', String(60),
           ForeignKey('blogs.id', onupdate="CASCADE", ondelete="CASCADE"),
           primary_key=True),
    Column('tag_id', String(60),
           ForeignKey('tags.id', onupdate="CASCADE", ondelete="CASCADE"),
           primary_key=True,)
)


class Blog(BaseModel, Base):
    """Blog Model"""
    __tablename__ = 'blogs'
    title = Column(String(4000), nullable=False)
    summery = Column(String(5000), nullable=False)
    checked = Column(Boolean, default=False)
    image_url = Column(String(2048))
    blog_data = Column(Text, nullable=False)
    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)

    def __init__(self, *args: str, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
