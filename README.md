# CodeLabFinalProject

This is a school website consists of three pages, the first one is the Home page,  
the second is an Application Form, and the last page is the School Management System.  
  
In the Home page, there is information about the school with some pictures of students and teachers.  
The page is an HTML and css code only without using Vuejs.
  
The Application Form page is to apply to the school, there are also some rules and conditions in this page,  
that applicants should know.  
  
The website is a CRUD (Create, Read, Update, Delete) system, and the four processes are done by sending  
requests to the API (using axios library) with the methodes (POST, GET, PUT, DELETE).  
#### CREATE
By submitting the application form, student is added to the database with a status 'applicant'  
by sending POST request to the API.  
In the server side, new model is beeing created.
  
the Students Information Control Center is to manage students information,  
applicants information and students grades. This could be done by choose one of these three actions (click a  
button on the left side of the page). After choose one of them, the manager will be able to edit or remove  
student or applicant, and edit the students grades.  
#### READ
Sending GET request to get the array of students from database to array in the Vue instance (app)
  
#### UPDATE
two-way data binding between the input fields of editing modal and an object  
in Vue instance (app), Then sending a PUT request with the selected student (_id) and (editting object)  
as params. In the server side, using function findByIdAndUpdate to update the selected modal element.  
  
#### DELETE
sending DELETE request with the selected student (_id).  
In the server side, findByIdAndRemove function is used to delete the selected modal element.
