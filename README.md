# Ticket Management System

This is a simple Ticket Management System built using Node.js, Express, and MongoDB. The system allows users to create, retrieve, update, and delete support tickets through a RESTful API.

## Features

- Create a new support ticket.
- Retrieve all tickets.
- Retrieve a single ticket by its unique identifier.
- Update a ticket by its unique identifier.
- Delete a ticket by its unique identifier.
- Simple validation and error handling.

## Prerequisites

- Node.js (v20.x or higher)
- MongoDB (local or MongoDB Atlas)
- API testing tool (e.g., Postman)

1. Install the required dependencies
    
   express,mongoose,bodyparser

2.Setup MongoDB:

MongoDB is installed locally, ensure that the MongoDB service is running.

3. Start the server
   
   npm start

The server will be running on http://localhost:8000

API endpoints

1. Create a New Ticket
URL: /create
Method: POST
Request Body:
{
  "title": "Issue with login",
  "description": "Unable to log into the system",
  "status": "open"
}
Response:
201 Created: Returns the created ticket.

2. Retrieve All Tickets
URL: /getAllTickets
Method: GET
Response:
200 OK: Returns an array of all tickets.
404: User Not Found

3. Retrieve One ticket by unique id
URL:/getOneTicket/:id
Method: GET
Response:
200 OK: Returns the ticket of id mentioned
404: User Not Found

4. Update the ticket by unique id
URL: /update/:id
Method: PUT
Response: 
201: returns the updated ticket
404: User Not Found

5. Delete the ticket by unique id
URL: /delete/:id
Method: DELETE
Response:
201 Deleted: shows the delete message.
404: User Not Found

Database
MongoDB is used to store the ticket information. Each ticket has the following fields:

- title (String, required): The title of the ticket.
- description (String, required): A detailed description of the issue.
- status (String, default: "open"): Status of the ticket (open, in progress, closed).
- creationDate (Date, default: current date): Date the ticket was created.
- lastUpdatedDate (Date, default: current date): Date the ticket was last updated.


Error Handling
- Appropriate HTTP status codes are returned for success and error scenarios.
- Validation is performed for required fields, and appropriate error messages are returned.


Testing
You can test the API using a tool like Postman.
