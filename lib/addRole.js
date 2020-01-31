const inquirer = require("inquirer");

const addRole = (db) => {
    let dep_array = [];

    db.query(`Select name, id FROM department`, (err, data) => {
        if(err) throw err;
        
        for(let i = 0; i < data.length; i++){
            dep_array.push(`${data[i].id} ${data[i].name}`);
        }

    });

    return inquirer.prompt([{
        type: "input", 
        name: "role",
        message: "Which role which you like to add?"
    },
    {
        type: "input",
        name: "salary",
        message: "What is the salary for this position?"
    },
    {
        type: "list", 
        name: "department",
        message: "Which department is this role in?",
        choices: dep_array
    }
]);
}

module.exports = {
    addRole: addRole
}