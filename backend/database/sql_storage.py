#!/usr/bin/python3
"""
file: db_storage.py
Desc: Storage engine for the app
Authors: .....
Date Created: Apr 20 2023
"""

from models.user import User, Base
from models.blog import Blog
from models.event import Event
from models.tag import Tag
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session


class Storage():
    """Represents the storage engine"""
    __engine = None
    __session = None

    def __init__(self):
        """Initializes the MySql database"""
        self.__engine = create_engine("sqlite:///article35.db")

    def all(self, cls=None):
        """Query on the current database session"""
        if cls is None:
            objs = self.__session.query(Blog).all()
            objs.extend(self.__session.query(Event).all())
            objs.extend(self.__session.query(User).all())
            objs.extend(self.__session.query(Tag).all())
        else:
            if type(cls) == str:
                cls = eval(cls)
            objs = self.__session.query(cls)
        return {"{}.{}".format(type(o).__name__, o.id): o for o in objs}

    def new(self, obj):
        """Add new obj to the current database session."""
        self.__session.add(obj)

    def save(self):
        """Commit all changes to the current database session."""
        self.__session.commit()

    def delete(self, obj=None):
        """Delete obj from the current database session."""
        if obj is not None:
            self.__session.delete(obj)
            self.__session.commit()

    def reload(self):
        """reloads data from the database"""
        Base.metadata.create_all(self.__engine)
        sess_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(sess_factory)
        self.__session = Session

    def close(self):
        """close the current session"""
        self.__session.close()

    def get(self, cls, id):
        """Retrives one object based on class name and id"""
        objs = self.all()
        try:
            key = cls.__name__ + '.' + id
            obj = objs[key]
            return obj
        except KeyError:
            return None

    def count(self, cls=None):
        """Counts the number of objects in the storage"""
        if cls is None:
            return len(self.all())
        count = 0
        for obj in self.all().values():
            if type(obj) == cls:
                count += 1
        return count
