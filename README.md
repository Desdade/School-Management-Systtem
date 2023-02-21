# School-Management-Systtem
How the end points from the code can be consumed
To consume the endpoints in the code provided, you can use a tool like Postman or simply make requests using a programming language of your choice.
Here's an example of how to use Postman to make requests to the endpoints:
1.	Open Postman and create a new request.
2.	Set the request method to "GET" or "POST" or "DELETE".
3.	For the GET requests, set the request URL to http://localhost:5000/student/GetStudentDetails and add the StudentID and Pin as query parameters. For the POST requests, set the request URL to http://localhost:5000/student/create_account, and add the student details as a JSON payload in the request body. For the DELETE requests, set the request URL to http://localhost:5000/student/delete, and add the StudentID and Pin as a JSON payload in the request body.
4.	Click "Send" to send the request to the server.
5.	The server will respond with a JSON payload containing the requested data or confirmation of the action taken.
