from flask import Blueprint
app_views = Blueprint('app_views', __name__, url_prefix='/api')

from api.views.blogs import *
from api.views.users import *
from api.views.tags import *
from api.views.projects import *
from api.views.events import *
from api.views.comments import *
from api.views.send_image import *
