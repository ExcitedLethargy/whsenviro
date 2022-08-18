/*JS file to initialise connection with cloud (Heroku) hosted PostgreSQL database.*/

const pg = require('pg');
const {globalVariables} = require('../master/globalVariables.js');
/*NB: The standard option for connecting here is to use a PostgreSQL 'Client' which creates
a single connection instance between the client and the database. A 'Pool' can create 
multiple parallel connections to assist in performance, should there be many changes to make.*/
const { Pool } = pg; 
function postgresInit() {
    console.log("Initialising PostreSQL database connection.");
    console.log("Identifying cloud database credentials...")
        globalVariables.gPostgresPool = new Pool({
        host: "ec2-3-211-221-185.compute-1.amazonaws.com",
        database: "d27244dpd98p71",
        user: "luonvbuoxyfsey",
        password: "3e1f369d5fddf4aa3497bf52e384290fed56f11019b18eed01433bd4b8ad3f34",
        port: "5432",
        ssl: {
            rejectUnauthorized: false
        }
    });
    console.log("Credentials found. Attempting connection...");
    globalVariables.gPostgresPool.connect();
    console.log("PostgreSQL connection successful.");
}

module.exports = {
    postgresInit: postgresInit
}