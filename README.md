
# Blog Web Application

This is a simple blog web application built with Node.js, Express.js, and EJS. The application allows users to create, view, edit, and delete blog posts. Posts are temporarily stored in memory and do not persist between sessions.

## Features

- **Post Creation**: Users can create new blog posts with a title, description, and markdown content.
- **Post Viewing**: The home page displays all blog posts with options to read more, edit, or delete each post.
- **Post Update/Delete**: Users can edit or delete existing posts as needed.
- **Responsive Design**: The application is styled with Bootstrap to ensure a good user experience on both desktop and mobile devices.

## Tech Stack

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for building web applications in Node.js.
- **EJS**: Templating engine for rendering dynamic HTML.
- **Bootstrap**: CSS framework for responsive design.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YashBhatt30/blog-web-app.git
   ```

2. Navigate to the project directory:

```bash

cd blog-web-app
```
3. Install the dependencies:
```bash
npm install
```


## Application Access

The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

- Navigate to the home page to view all blog posts.
- Click on "New Article" to create a new post.
- You can edit or delete posts directly from the post view.

## What I Learned

This project taught me several valuable skills:

- **Node.js and Express Basics**: I learned how to set up a basic web server using Node.js and Express.js, manage routes, and handle user input from forms.
- **Templating with EJS**: I understood how to generate dynamic HTML using EJS, which allows me to insert data into templates and manage front-end content more efficiently.
- **Handling Data without a Database**: Since the project doesn’t use a database, I learned to temporarily store and manage data in-memory (within the server), providing insight into handling basic data operations without persistence.
- **Responsive Design**: I deepened my understanding of CSS, specifically in creating responsive designs that look good on both desktop and mobile devices, including media queries, Flexbox, and basic Grid layouts.
- **Routing & URL Parameters**: I learned how to pass parameters in the URL for editing and deleting posts, which enhanced my understanding of routing in Express.js.
- **Project Structuring**: I improved my ability to structure a Node.js project with clear separation between views, routes, static files, and logic.

## Future Enhancements

- Add user authentication for personalized blog posts.
- Implement a database (MongoDB) to store blog posts permanently.
- Enhance the UI with more modern design elements.
- Add a rich text editor for creating posts.