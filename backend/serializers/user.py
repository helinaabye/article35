from app import ma
from flask import request
from serialzilers.base import BaseSchema
from models.user import User
from marshmallow import fields, validates_schema, ValidationError

class UserSchema(ma.SQLAlchemyAutoSchema, BaseSchema):

	class Meta:
		model = User
		loaded_instance = True 
		exclude = ('password_hash', 'confirm_password_hash')
		load_only = ('email', 'password')

	username = fields.String(required=True)
	password = fields.String(required=True)
	blogs = fields.Nested('BlogSchema', many=True, exclude=('user_id'))

class PopulateUserSchema(ma.SQLAlchemyAutoSchema, BaseSchema):

	class Meta:
		loaded_instance = User 
		loaded_instance = True 
		exclude = ('password_hash', 'confirm_password_hash')
		load_only = ('email', 'password')

	password = fields.String(required=True)
	blogs = fields.Nested('BlogSchema', many=True, exclude=('update_at', 'created_at'))

	@validates_schema
	def check_passwords_match(self, data, **kwargs):
		if request.method == 'POST':
			if data['password'] != data['password_confrimation']:
				raise ValidationError(
					'Passwords do not match'
					'password_confrimation'
				)
	password_confirmation = fields.String(required=True)

