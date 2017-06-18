//importando modulos de rotas
var app = require('./config/server');
//var rotaNoticias = require('./app/routes/noticias')(app);
//var rotaHome = require('./app/routes/home')(app);
//var rotaFormIncNoti = require('./app/routes/formulario_inclusao_noticia')(app);

//definindo porta listener e função callback
app.listen(3000, function(){
	console.log("Servidor rodando com o express");
});