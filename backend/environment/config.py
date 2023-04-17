import os

db_URI = os.getenv('DATABASE_URL', 'postgres://localhost:5432/article35_db')
secret = os.getenv('SECRET', 'thisisarticle35_dbsecretkey.')