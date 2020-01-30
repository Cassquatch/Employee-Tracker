const inquirer = require("inquirer");
const allEmployees = require("./lib/viewEmployees");
const dbConnection = require("./db/dbConnection");
const manageEmployees = require("./lib/startTracker");
const listDepartments = require("./lib/viewDepartments");
const ctable = require("console.table");


//dbConnection.connection() is returning the createConnection, so db is becoming the connection here
const db = dbConnection.connection("cassquatch", "mrmeseekslookatme101!");

//assign the startTracker function here to get the initial prompt
const tracker = manageEmployees.startTracker;

//use the connection credentials retrieved from dbConnection.connection() to start a new connection
db.connect((err) => {
    if (err) throw new Error("Check authentication and priveleges on db");

    console.log(`Connected as id: ${db.threadId}`);
     trackEmployees();
});

//put tracker inside of a function i can recursively call it
const trackEmployees =  () => {

    tracker().then((res) => {
        //running a switch to call functions based on choice
        switch (res.action) {
            case "View Departments":
                //function not implemented yet, just writing skeleton passing db so i can use in departments function file
                listDepartments.viewDepartments(db);
                trackEmployees();
                break;
    
            case "View Roles":
                //function not implemented yet, just writing skeleton passing db so i can use in roles function file
                viewRoles(db);
                break;
    
            case "View Employees":
                //passing db in here so that i can use it in the view employee function
                
                allEmployees.viewEmployees(db);
                
                 trackEmployees();
                break;

                //when you add the functions to add employees, roles, and departments, try writing a function for the inquirer prompts, then a separate function that does the query
    
            case "Exit":
                db.end();
    
        }
    });
}
