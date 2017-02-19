var express = require("express");
var bodyParser = require("body-parser");
var server = express();

var utilisateur = new Array(10);

server.use(bodyParser.json());
server.use(express.static(__dirname));

server.get("/login", function (req, res, next){
	var options = {root: __dirname};
	res.sendFile("login.html", options);
});
server.get("/accueil", function (req, res, next){
	var options = {root: __dirname};
	res.sendFile("accueil.html", options);
});
server.post("/confirm", function (req, res, next){
	for(var i = 0; i < 10; i++){
		if(req.body.identifiant == utilisateur.identifiant && req.body.mdp == utilisateur.mdp){
			res.status(200);
			res.send({
				redirect: "/minichat"
			});
		}
	}
});
server.get("/minichat", function (req, res, next){
	var options = {root: __dirname};
	res.sendFile("minichat.html", options);
});
server.listen(8080);