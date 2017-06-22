//var dbConnection = require('../../config/dbConnection');

//modulo rota noticias
module.exports = function(application){
	
	//var connection = dbConnection();

	application.get('/noticias', function(req, res){
		application.app.controllers.noticias.noticias(application, req, res);
	});

	application.get('/noticia', function(req, res){
		application.app.controllers.noticias.noticia(application, req, res);
	});
};

