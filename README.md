# My Application

This application is built using Node.js, Express, and MongoDB. It includes three collections: Users, Posts, and Comments, and provides CRUD operations for each.

## Available Routes

### Users
- `GET /api/users`: Retrieve all users
- `POST /api/users`: Create a new user
- `PUT /api/users/:id`: Update a user
- `DELETE /api/users/:id`: Delete a user

### Posts
- `GET /api/posts`: Retrieve all posts
- `POST /api/posts`: Create a new post
- `PUT /api/posts/:id`: Update a post
- `DELETE /api/posts/:id`: Delete a post

### Comments
- `GET /api/comments`: Retrieve all comments
- `POST /api/comments`: Create a new comment
- `PUT /api/comments/:id`: Update a comment
- `DELETE /api/comments/:id`: Delete a comment

## Instructions

1. Install dependencies: `npm install`
2. Start the server: `node app.js`
3. To populate the database with sample data, run: `node data/sampleData.js`
4. Access API endpoints at `http://localhost:3000/api`
