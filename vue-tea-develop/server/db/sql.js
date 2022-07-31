const mysql = require('mysql');
let connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:"1234",
	database:'vue_store'
})
module.exports = connection;