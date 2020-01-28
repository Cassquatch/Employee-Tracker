const inquirer = require("inquirer");
const allEmployees = require("./lib/viewEmployees");
const dbConnection = require("./lib/dbConnection");


//dbConnection.connection() is returning the createConnection, so db is becoming the connection here
const db = dbConnection.connection("placeholder_user", "placeholder_pass");


//use the connection credentials retrieved from dbConnection.connection() to start a new connection
db.connect( (err) => {
    if(err) throw new Error("Check authentication and privelegs on db");

    console.log(`Connected as id: ${db.threadId}`);
    db.end();
})
