#!/usr/bin/python3
"""
file: base.py
Desc: Base model which will be shared among other models
Authors: Gizachew Bayness, Tesfay Teshome, Helina Gebryes, Bruk Gelelcha
Date Created: April 07 2023
"""
from flask import Flask
from models.base import BaseModel
from models.base import Base
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship

class Blogs(BaseModel, Base):
    __tablename__ = 'blogs'
    user_id = Column(Integer, ForeignKey('users.id'), primary_key=True)
    title = Column(String(200), nullable=False)
    blog_data= Column(String(5000), nullable=False)
    image_url = Column(String(1000), nullable=False)
    checked = Column(String(150), nullable=False)
