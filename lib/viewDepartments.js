const viewDepartments = (db) => {
    let query = `SELECT name FROM department`;

    db.query(query, (err, data) => {
        if(err) throw err;

        console.log(`\n`);
        console.table(data);
    });
}

module.exports = {
    viewDepartments: viewDepartments
}