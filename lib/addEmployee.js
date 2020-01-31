const inquirer = require("inquirer");

const addEmployee =  (db) => {
    let role_query = `SELECT title, id FROM role`;
    let role_array = [];
    
    //retrieving all of the roles from the db instead of hardcoding, so in the case of a new role being added, it will show up in this list when adding a new employee
    db.query(role_query, (err, data) => {
        if(err) throw err;

        for(let i = 0; i < data.length; i++){
            role_array.push(`${data[i].id} ${data[i].title}`);
         
        }
    });

    //retrieving all of the managers, so the new employee's manager can be chosen from the available managers in the database
    let mgr_query = `SELECT first_name, last_name, id FROM employee WHERE manager_id is null`;
    let mgr_array = [];
    
    db.query(mgr_query, (err, data) => {
        
        if(err) throw err;
        for(let i = 0; i < data.length; i++){
            mgr_array.push(`${data[i].id} ${data[i].first_name} ${data[i].last_name}`);
            
        }
    });

    return inquirer.prompt([{
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?"
    },
    {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?"
    },
    {
        type: "list",
        name: "role",
        choices: role_array,
        message: "What is this employee's role?"
    },
    {
        type: "list",
        name: "manager",
        choices: mgr_array,
        message: "Who is this employee's manager?"
    }
    ]);
}

module.exports = {
    addEmployee: addEmployee
}