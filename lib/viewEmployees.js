const inquirer = require("inquirer");


const viewAllEmployees = (data) => {
    console.table(data)
}

module.exports = {
    viewAllEmployees: viewAllEmployees
}