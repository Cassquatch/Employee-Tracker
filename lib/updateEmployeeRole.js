const inquirer = require("inquirer");

const updateEmployeeRole = (db) => {

    let employee_array = [];

    //get the employees from the DB to chooce which employee to update
    db.query(`SELECT first_name, last_name, id FROM employee`, (err, data) => {
        if (err) throw err;

        for (let i = 0; i < data.length; i++) {
            employee_array.push(`${data[i].id} ${data[i].first_name} ${data[i].last_name}`);
        }

    });



    let role_array = [];
    //get the roles and ids from DB so we can extract the role id from it with the correct title
    db.query(`SELECT title, id FROM role`, (err, data) => {
        if (err) throw err;

        for (let i = 0; i < data.length; i++) {
            role_array.push(`${data[i].id} ${data[i].title}`);
        }
    });
    console.log(employee_array);
    console.log(role_array);
    return inquirer.prompt([{
        type: "list",
        name: "employee",
        message: "Which employee would you like to update?",
        choices: employee_array
    },
    {
        type: "list",
        name: "role",
        message: "What role would you like to give?",
        choices: role_array
    }
    ]);
}

module.exports = {
    updateEmployeeRole: updateEmployeeRole
}