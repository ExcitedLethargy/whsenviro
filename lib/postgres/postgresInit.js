/*JS file to initialise connection with cloud (Heroku) hosted PostgreSQL database.*/

import pg from 'pg';
const { Client } = pg;
console.log("Identifying cloud database credentials...")
const vClient = new Client({
    host: "ec2-3-211-221-185.compute-1.amazonaws.com",
    database: "d27244dpd98p71",
    user: "luonvbuoxyfsey",
    password: "3e1f369d5fddf4aa3497bf52e384290fed56f11019b18eed01433bd4b8ad3f34",
    port: "5432",
    ssl: {
        rejectUnauthorized: false
    }
});
console.log("Setting up PostgreSQL connection.");
vClient.connect();
console.log("Connection successful.");