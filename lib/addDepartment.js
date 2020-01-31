const inquirer = require("inquirer");

const addDepartment = () => {
    return inquirer.prompt({
        type: "input",
        name: "department",
        message: "Which department would you like to add?"
    })
}

module.exports = {
    addDepartment: addDepartment
}