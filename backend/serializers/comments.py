from app imoprt ma
from serialzilers.base import BaseSchema
from marshmallow import fields
from models.blogs import Blog 
from models.comments import Comment, NestedComment

class CommetSchema(ma.SQLAlchemyAutoSchema, BaseSchema):

	class Meta:
		model = Comment
		loaded_instance = True 
		load_only = ('user_id')

	user_id = fields.Integer()
	user = fields.Nested('UserSchema', only=('id', 'username'))

class NestedCommentSchema(ma.SQLAlchemyAutoSchema, BaseSchema):

	class Meta:
		model = NestedComment 
		loaded_instance = True
		load_only = ('user_id')

	user_id = fields.Integer()
	user = fields.Nested('UserSchema', only=('id', 'username')
	comment_id = fields.Integer()
