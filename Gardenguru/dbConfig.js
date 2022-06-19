require('dotenv').config();
// console.log('dbConfig 1');
const {Pool} = require('pg');
// console.log('dbConfig 2');
const isProduction = process.env.NODE_ENV === 'production';
// console.log('dbConfig 3');
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
console.log(process.env.DB_DATABASE);
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
// console.log('dbConfig 4');
const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString
});
// console.log('dbConfig 5');
module.exports = {pool};
// console.log('dbConfig 6');