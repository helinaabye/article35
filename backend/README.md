# Our Article35 WebApp Backend

### Brief
* Collaborative development using Git and GitHub
* Develop a Full Stack Application
* Build a database and store information to it using MYSQL
* Navigate the database using Python & Flask with SQLAlchemy
* Emphasis on RESTful design to serve data programmatically
* Serve the API though a separate Front-End using React
### Technologies Used
* Python & Flask
* Flask-SQLAlchemy
* Flask-Cors
* Flask-Bcrypt
* Git & GitHub
### Our App
In order to work as a team and develop coherently - we took time looking at the different components that we thought were key to this app, and worked though the development process methodically. We took extra care with designing our Database with regards to the relationships between tables. These are the steps we had identified-
1. Develop an understanding of what our user story would look like
2. Design the database backend, including relationship diagrams
3. Develop the core backend features as a group and get a clear understanding of the backend structure before diving in further
4. Gather the external APIs we would be using and initiate them on the backend
5. Attach the backend endpoints to the front end using React
6. Form a style guide - including a wireframe, colour pallette and logo
### Design & SQL Relationships
Most of our first day was spent looking at what features we wanted to include in our app. we think that our vision for this app and how we saw people interacting with it informed what endpoints we wanted on our Database - which in turn allowed us to create a comprehensive relationship diagram. Getting a clear idea of the Database was key to a smooth development process down the line.
As for the user stroy we found that two pieces of design were important - firstly the ability to easily post blogs, add comments and likes to the blogs

### The Database
We identified that the place to start was with the Models we were providing to the Database. to provide all relevant fields to our Models and provided join tables where many to many relationships occurred.
Here is an example of the BaseModel which we used as a base to apply to all of our models, including some functions that would be useful in the future -

     class BaseModel:
         """The BaseModel class for all models"""
         id: str = Column(String(60), primary_key=True)
         created_at: DateTime = Column(DateTime, default=datetime.utcnow())
         updated_at: DateTime = Column(DateTime, default=datetime.utcnow())

         def __init__(self, *args: list, **kwargs: dict) -> None:
         """Initializes the BaseModel class with preferable attributes"""
            if kwargs:
               for k, v in kwargs.items():
                  if k != "__class__":
                    setattr(self, k, v)
               if kwargs.get("created_at", None) and type(self.created_at) is str:
                 self.created_at = datetime.strptime(kwargs["created_at"],
                                                    '%Y-%m-%dT%H:%M:%S.%f')
               else:
                 self.created_at = datetime.utcnow()
               if kwargs.get("updated_at", None) and type(self.updated_at) is str:
                 self.updated_at = datetime.strptime(kwargs["updated_at"],
                                                    '%Y-%m-%dT%H:%M:%S.%f')
               else:
                 self.updated_at = datetime.utcnow()
               if kwargs.get("id", None) is None:
                 self.id = str(uuid4())
            else:
               self.id = str(uuid4())
               self.created_at = datetime.utcnow()
               self.updated_at = datetime.utcnow()

The Backend
With the models in place the next step was to design the endpoints for our API - for that we started by designing the CRUD operators in the controllers and carefully designed our sterilizers and secure route. We spent most of this time designing sterilizers to make sure that we were serving all the right information to our front end whilst preventing infinite loops.

Here is an example in the video controller using a router and secure route decorator. Here a user can post a nested comment - the nested comment data is passed additional fields and the video that had been commented on is returned -