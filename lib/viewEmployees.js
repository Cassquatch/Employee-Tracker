const inquirer = require("inquirer");


const viewEmployees = (db) => {
    let query = `SELECT emp.id, emp.first_name, emp.last_name, role.title, role.salary, dep.name as department, 
                CONCAT (mgr.first_name, " ", mgr.last_name) as manager
                FROM employee as emp
                LEFT JOIN role ON (emp.role_id = role.id)
                INNER JOIN department as dep ON (role.department_id = dep.id)
                LEFT JOIN employee as mgr ON (mgr.id = emp.manager_id)
                ORDER BY emp.id`;

                db.query(query, (err, data) => {
                    if (err) throw err;
                    
                    console.log(`\n`);
                    console.table(data);
                  
                });
}

module.exports = {
    viewEmployees: viewEmployees
}