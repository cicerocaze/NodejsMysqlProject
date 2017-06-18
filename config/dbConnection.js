//Criação de conexão com o mysql
var mysql = require('mysql');

var connMySQL = function(){
	console.log('Conexão com o bd foi estabelecida');
		return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password: 'admin',
			database: 'portal_noticias'
		});
}

module.exports = function(){
	console.log('O autoload carregou o módulo de conexão com bd');
	return connMySQL;
}