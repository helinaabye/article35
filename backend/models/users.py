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


class User(BaseModel, Base):
    __tablename__ = 'users'
    username = Column(String(250), nullable=False)
    email = Column(String(250), nullable=False, unique=True)
    nick_name = Column(String(250), nullable=False)
    password = Column(String(500), nullable=False)
    confirm_password = Column(String(500), nullable=False)
    phone_number = Column(String(100), nullable=False)
    age = Column(Intger(50), nullable=False)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __setattr__(self, name, value):
        if name == "password":
            value = md5(value.encode()).hexdigest()
        super().__setattr__(name, value)