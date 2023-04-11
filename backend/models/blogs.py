from models.base import BaseModel
from models.base import Base
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship

class Blogs(BaseModel, Base):
    __tablename__ = 'blogs'
    id = Column(Integer(150), nullabel=True)
    user_id = Column(Integer(150), ForeignKey('users.id'), primary_key=True, nullable=False)    
    title = Column(String(200), nullable=False)
    blog_data= Column(String(5000), nullable=False)
    image_url = Column(String(1000), nullable=False)
    checked = Column(String(150), nullable=False)
