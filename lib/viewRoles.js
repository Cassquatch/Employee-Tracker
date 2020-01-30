const viewRoles = (db) => {
    let query = `SELECT title FROM role`;

    db.query(query, (err, data) => {
        if (err) throw err;

        console.log(`\n`);
        console.table(data);
    });
}

module.exports = {
    viewRoles: viewRoles
}