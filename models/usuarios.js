/*var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

module.exports = function(){
	var usuarioSchema = mongoose.Schema({
		nome     : {type: String, trim: true},
		email    : {type: String, trim: true},
		site     : {type: String, trim: true},
		password : {type: String},
		data_cad : {type: Date, default: Date.now}
	});

	usuarioSchema.methods.generateHash = function(password){
		return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
	}

	return mongoose.model('Usuarios', usuarioSchema);
}*/

var mysql  = require('mysql');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(){
    var query = connection.query('SELECT * FROM tb_cadastro', function(err, rows, fields){

        console.log(rows);
        //var outputJSON = [];

        //for(var i in rows){
           // console.log(rows[i]);

            //console.log(JSON.stringify(rows[i].id));
            //JSON.stringify(rows[i].id);

            //outputJSON.push(rows);
        //}

        //for(row in rows){
        //    outputJSON.push(row);
        //}

        //return outputJSON.toJSON();
        //console.log(JSON.stringify(rows));


        //cb(err, rows);
    });

    //return result;

    //connection.end();
}



