from models.base import BaseModel, Base
from sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import declarative_base

class Blogs(BaseModel, Base):
    __tablename__ = 'blogs'
    user_id = Column(Integer, ForeignKey('users.id'), primary_key=True)
    