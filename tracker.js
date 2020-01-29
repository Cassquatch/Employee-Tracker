const inquirer = require("inquirer");
const allEmployees = require("./lib/viewEmployees");
const dbConnection = require("./db/dbConnection");
const startTracker = require("./lib/startTracker");
const ctable = require("console.table");


//dbConnection.connection() is returning the createConnection, so db is becoming the connection here
const db = dbConnection.connection("placeholder_user", "placeholder_pass");

//assign the startTracker function here to get the initial prompt
const tracker = startTracker.trackEmployees;

//use the connection credentials retrieved from dbConnection.connection() to start a new connection
db.connect((err) => {
    if (err) throw new Error("Check authentication and privelegs on db");

    console.log(`Connected as id: ${db.threadId}`);
    tracker().then((res) => {
        //running a switch to call functions based on choice
        switch (res.action) {
            case "View Departments":
                //function not implemented yet, just writing skeleton
                viewDepartments();
                break;

            case "View Roles":
                //function not implemented yet, just writing skeleton
                viewRoles();
                break;

            case "View Employees":
                allEmployees.viewEmployees();
                break;

            case "Exit":
                db.end();

        }
    });
})
