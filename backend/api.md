# API Documentation

NOTE: In case of any unexpected response, please check the status code. Implemented status codes are: 200, 201, 404, 401, 400
### Users:
---
#### 1. /api/users/sign-up  [POST] => Registers a new user
	Required fields = {first_name, last_name, username, email, phone_number, password, is_admin = 'True' or 'False' string value}
	Register only one account as admin by setting the value of is_admin to 'True'. Make sure you send the values of is_admin as a string.
	
	Response: A user object or an error message (400 bad request). For the case of errors you can read the provided messages as response.
	Note: No validation is done from the backend unless it is critical.
	
#### 2. /api/users  -> [GET] => Retrives all registered users
	Response: A list of all registered users
#### 3. /api/users/user-id
	>> GET: Retrives a User object based on the user_id
	>> DELETE: Deletes a User object based on the user_id
	>> PUT: Updates a User object based on the user_id
		-> Allowed fields {bio: Text, and profile_picture}. No other fileds are allowed for update.
		-> expected file key for image is 'image'. Image must be in png format
#### 4. /api/images/user/user-id -> [GET] => Retrives profile picture of the user
	Response: An image of the user. If image is not found, then it responds a message as {'message': 'No image uploaded'}
#### 5. /api/users/sing-in -> [POST] => Authenticates the user
	Required fields = {username and password}
	Response: A user object if the user is successfully logged in, other wise it responds with 401 
		  unauthorized access: {"error": "Unauthorized"}  -> usually happens when username or password is not correct.
#### 6. /api/users/user-id/blogs -> [GET]  => Retrives all blogs posted by a specific user based on the user id
	Response: List of blog data
### Tags:
-
#### 1. /api/tags
	>> GET: Retrives all tags
	>> POST: Adds a new tag to the database. This work should be done by the admin.
	   Required field: name -> Name of the tag
	   Response: The new tag that is being added
	   Note: You cannot add the tag with the same name. Such type of error is handled from the backend.
	   
#### 2. /api/tag/tag_id
	>> GET: Retrives the tag based on its id
	>> DELETE: Deletes the tag based on its id
		- Response: The deleted tag object
	>> PUT: Updates the name of tag;
		Required field: name
		Responese: The updated tag object
### Blogs:
-
#### 1. /api/blogs
	>> GET: Retrives list of all blogs -> All approved or un approved blogs are retrived with this request
	>> POST: Adds a new blog post to the database.
		- Required field: [title, summery, content, user_id, links, image]
		- links must be a list of links like: ["http://hello.com", "https:world.tech"]. Elements in the array must have to be strings.
		- Expected key for the file is image. Image must be uploaded as type png.
		- Response: The new blog post object
		- Note: By default, all created blogs are not approved. Such action must be done by the admin
		
#### 2. /api/blogs/blog_id
	>> GET: Retrives the blog post object based on its id
	>> DELETE: Deletes the blog post from the database
	>> PUT: Updates the blog with all or one of the following properties: [title, content, summery, links]
		- Again links must be sent as the POST request
		- Response: The updated blog post
#### 3. /api/blogs/blog_id/tags
	>> GET: Retrives all tags attached to the post
	>> POST: Links tags to the post]
		- Required field is tag_ids
		- tag_ids must be list of tag ids like: ['tag_id_1', 'tag_id_2', ... ]
		- Response: Number of tags being linked to the blog post: Example - {"number_of_new_tags_added": 3}
#### 4. /api/blogs/blog_id/likes
	>> GET: Retrives the number of likes for a specific blog post: Example response - {'likes': 76}
	>> POST: Increases or decreases the number of likes for a specific post
		- Required field is status
		- status must be either 'up' or 'down': Example - {'status': 'up'} increases the number of likes by 1 and down decreases it.
		- Response: The updated blog object
		- Note: Initially the default count of likes is 0
#### 5. /api/blogs/blog_id/comments
	>> GET: Retrives a list of all comments for a specific blog post
#### 6. /api/blogs/blog_id/approve
	>> POST: Approves a single blog post
		- Required field is user_id
		- Response: The approved blog
		- Note: Only users with admin privilege can approve the blog.
	
#### 7. /api/blogs/unapproved
	>> GET: Retrives all unapproved blogs
		- Response: a list of all un  approved blog posts
#### 8. /api/blogs/approved
	>> GET: Retrives all approved blogs
		- Response: a list of all approved blog posts
