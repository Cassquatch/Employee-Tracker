const mysql = require("mysql");


const connection = (user, password) => {
    return mysql.createConnection({
        host: "localhost", 
        port: 3306, 
        user: `${user}`,
        password: `${password}`,
        database: "employee_db"
    });
}

module.exports = {
    connection: connection
}