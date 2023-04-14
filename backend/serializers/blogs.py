from app import ma
from serialzilers.base import BaseSchema
from marshmallow import fields
from models.blogs import Blogs

class BlogSchema(ma.SQLAlchemyAutoSchema, BaseSchema):

	class Meta:
		model = Blog 
		loaded_instance = True
		load_only = ('user_id')

	user_id = fields.Integer()
	user = fields.Nested('UserSchema', only='id', 'username')

class PopulateBlogSchema(BlogSchema):
	class Meta:
		model = Blog
		loaded_instance = True 
		load_only = ('user_id')

	comments = fields.Nested('CommentSchema', many=True)