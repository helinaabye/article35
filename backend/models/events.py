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

class Events(BaseModel, Base):
    __tablename__ = 'events'
    user_id = Column(Integer, ForeignKey('users.id'), primary_key=True)
    title = Column(String(255), nullable=False)
    address = Column(String(255), nullable=False)
    image_url = Column(String(1000), nullable=False)
    due_date = Column(Integer, nullable=False)
    web_link = Column(String(1000), nullable=False)
    