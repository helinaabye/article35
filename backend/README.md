# Our Article35 WebApp Backend

#### Brief
* Collaborative development using Git and GitHub
* Develop a Full Stack Application
* Build a database and store information to it using MYSQL
* Navigate the database using Python & Flask with SQLAlchemy
* Emphasis on RESTful design to serve data programmatically
* Serve the API though a separate Front-End using React
#### Technologies Used
* Python & Flask
* Flask-SQLAlchemy
* Flask-Cors
* Flask-Bcrypt
* Git & GitHub
#### The App
In order to work as a team and develop coherently - we took time looking at the different components that we thought were key to this app, and worked though the development process methodically. We took extra care with designing our Database with regards to the relationships between tables. These are the steps we had identified-
1. Develop an understanding of what our user story would look like
2. Design the database backend, including relationship diagrams
3. Develop the core backend features as a group and get a clear understanding of the backend structure before diving in further
4. Gather the external APIs we would be using and initiate them on the backend
5. Attach the backend endpoints to the front end using React
6. Form a style guide - including a wireframe, colour pallette and logo
#### Design & SQL Relationships
Most of our first day was spent looking at what features we wanted to include in our app. I think that our vision for this app and how we saw people interacting with it informed what endpoints we wanted on our Database - which in turn allowed us to create a comprehensive relationship diagram. Getting a clear idea of the Database was key to a smooth development process down the line.

As for the user stroy we found that two pieces of design were important - firstly the ability to easily post blogs, add comments and likes to the blogs

#### The Database
With a clear idea of how we would like the backend to look and how the pieces might fir together we started working on the backend proper. Here is where we utilized technologies such as Python, Flask and SQLalchemy.

We identified that the place to start was with the Models we were providing to the Database. We were carful to provide all relevant fields to our Models and provided join tables where many to many relationships occurred.

Here is an example of the BaseModel which we used as a base to apply to all of our models, including some functions that would be useful in the future -

The Backend
With the models in place the next step was to design the endpoints for our API - for that we started by designing the CRUD operators in the controllers and carefully designed our sterilizers and secure route. We spent most of this time designing sterilizers to make sure that we were serving all the right information to our front end whilst preventing infinite loops.

Here is an example in the video controller using a router and secure route decorator. Here a user can post a nested comment - the nested comment data is passed additional fields and the video that had been commented on is returned -