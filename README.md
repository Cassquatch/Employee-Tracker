# Employee-Tracker


# How to Connect to The Database
I will be pushing this with placeholder values in the tracker.js file, there you will see "const db = dbConnection.connection("your_user", "your_pass");".
You will need to create your own user credentials by using 
---> 
CREATE USER 'your_username'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON *.* TO 'your_username'@'localhost'; 
<---

Once you have created those credentials, you pass them into the dbConnection.connection(user, pass) function.
