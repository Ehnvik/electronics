# **electronics-api**

This repository contains instructions for integrating a Strapi backend server with endpoints for electronics such as computers, mobiles, audio_devices and televisions.

## Installation

To install the dependencies, run the following command in the createApi and the strapi-electronic directory of the project:

**npm i**

## Create .env

To get access to the servers and JWT-SECRET you need to create a **.env** file in the createApi folder with the following structure:

- PORT=8008
- BASE_URL="http://127.0.0.1:1337/api"
- JWT_SECRET="your-secret-password"

## Starting the Strapi Server

To start the Strapi server, navigate to the electronics-api/strapi-electronics directory and run the following command:

**npm run develop**

This will start the server at http://localhost:1337/api.

## Starting the Backend Server

To start the backend server, run the following command in the createApi directory of the project:

**npm start**

This will start the server at http://localhost:8008.

## Endpoints

The following endpoints are available for electronics:

- /computers
- /mobiles
- /audio-devices
- /televisions

To retrieve data from an endpoint, use a GET request to the appropriate URL, such as:
GET http://localhost:8008/televisions

To create a new item, use a POST request to the appropriate URL, such as:
POST http://localhost:8008/televisions

The request body should be in JSON format, with the following properties:

{
"data": {
"name": "string",
"description": "string",
"manufacturer": "string",
"price": number,
"screen_size": number
}
}

To update an existing item, use a PUT request to the appropriate URL, such as:
PUT http://localhost:8008/televisions/update/id

The request body should be in the same format as for creating a new item.

To delete an existing item, use a DELETE request to the appropriate URL, such as:
DELETE http://localhost:8008/televisions/delete/id

## Authentication

To perform POST, PUT, or DELETE requests, you must be logged in.

To register a new user, use a POST request to the following URL:

POST http://localhost:8008/users/register

The request body should be in JSON format, with the following properties:

{
"username": "string",
"password": "string"
}

To log in, use a POST request to the following URL:
POST http://localhost:8008/users/login

The request body should be in the same format as for registering a new user. This will return a JSON Web Token (JWT), which should be included in the Authorization header of subsequent requests.
