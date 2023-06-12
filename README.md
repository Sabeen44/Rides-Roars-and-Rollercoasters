# Rides-Roars-and-Rollercoasters

## Description

This is a web application that allows users to search for theme parks and leave or view reviews for them. It provides an intuitive interface for users to explore various theme parks, view park details, and share their experiences through reviews.

## Features

Park Search: Users can search for theme parks by entering the park name in the search bar. The app will display a list of parks that match the search criteria.
Park Details: Users can view detailed information about each park, including the park name, location, and other relevant details.
Save Parks: Authenticated users can save parks to their profile for easy access later. The app keeps track of the saved parks for each user.
Review Parks: Authenticated users can leave reviews for parks they have visited. They can rate the park, provide a written review, and share their overall experience.
Remove Parks: Authenticated users can remove parks from their saved list if they no longer wish to have them saved.

## Technologies Used

React: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.
React Bootstrap: The UI components, such as forms, buttons, and cards, are implemented using React Bootstrap, which provides pre-styled components for faster development.
Apollo Client: Apollo Client is used for managing GraphQL queries and mutations, allowing seamless communication with the backend server.
GraphQL: The app uses GraphQL to query and mutate data from the server, enabling efficient and flexible data retrieval.
Node.js: The backend server is built with Node.js, a JavaScript runtime environment.
Express: Express is used as the web framework for the backend server, providing a robust and scalable infrastructure.
MongoDB: The app stores data in a MongoDB database, a NoSQL database that offers flexibility and scalability.
JWT: JSON Web Tokens (JWT) are used for user authentication and authorization, providing secure access to protected routes and user-specific data.
Getting Started

## Usage

Clone the repository and navigate to the project directory.
Install the dependencies by running npm install in both the root directory and the client directory.
Configure the environment variables by creating a .env file in the root directory and providing the necessary values.
Start the development server by running npm run develop in the root directory.
Access the app in your browser at http://localhost:3000.
For detailed instructions on deploying the app or running tests, please refer to the deployment guide and testing guide respectively.
