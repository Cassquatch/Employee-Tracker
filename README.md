# Employee-Tracker
A CLI application that lets the user manage a set of employees.

# Built With
* Node.js
* MySQL
* Inquirer

# Functionality
This application allows the user to perform a list of commands on a database set of employees. You can view, add, or update the employee, department, and role tables from the command line. To get the required packages to use this application, you just need to run npm install in the main directory with package.json

# How to Connect to The Database
I will be pushing this with placeholder values in the tracker.js file, there you will see "const db = dbConnection.connection("your_user", "your_pass");".
You will need to create your own user credentials by using

---> 
CREATE USER 'your_username'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON *.* TO 'your_username'@'localhost'; 
<---

Once you have created those credentials, you pass them into the dbConnection.connection(user, pass) function.


 
 # Author
 Cassidy Fortner
