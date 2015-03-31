module.exports = function(app){

	var Usuario = app.models.usuarios;

    //console.log(Usuario);

	var UsuarioController = {
		index: function(req, res){
			console.log('Oi');
		},
		create: function(req, res){
			res.render('usuarios/create');
		}
	}

	return UsuarioController;

}