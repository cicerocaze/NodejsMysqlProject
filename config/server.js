//Arquivo de configuração do servidor

//Importando o Express
var express = require('express');
//Importando o Consign
var consign = require('consign');
//Importando o Body-parser
var bodyParser = require('body-parser');
//Importando o express-validator
var expressValidator = require('express-validator');

//Executando o express
var app = express();
//Chamando propriedades do express
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

//Execução do consign deve vir depois do express
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);


module.exports = app;