const inquirer = require("inquirer");

const startTracker =  () => {
    return inquirer.prompt({
        type: "list",
        name: "action",
        message: "Please choose an action from the list",
        choices: ["View Departments", "View Roles", "View Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Exit"]
    });
}

module.exports = {
   startTracker: startTracker
}