from datetime import *
from marshmallow import fields
from flask_marshmallow import Marshmallow 

class BaseSchema:

	created_at = fields.DateTime(format='%d-%m-%Y %H:%M:%S')
	updated_at = fields.DateTime(format='%d-%m-%Y %H:%M:%S')
