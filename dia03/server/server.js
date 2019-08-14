var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");
var url = "mongodb://localhost:27017";
var app = express();
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

//MOSTRA OS PARAMETROS PARA O USUARIO
app.get("/", function(req, res){
    res.send("GET /usuario <br> POST /usuario");
});

//LISTAR VIA GET - URL
app.get("/usuario", function(req, res){
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, database){
        if(err){
            console.log(err.err);
        } else {
            var db = database.db("aula03");
            db.collection("usuario").find().toArray(function (err, data){
                res.send(data);
                database.close();
            });
        }
    });
});

//gravar no mongo
app.post("/usuario", function(req, res){
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, database){
        if(err){
            console.log(err.err);
        } else {
            var db = database.db("aula03");
            console.log(req.body);
            var nome = req.body.nome;
            if(nome){
                db.collection("usuario").insertMany([
                    req.body
                ], function(err, documents){
                    res.send({error: err, affected: documents});
                })
            }
            database.close();
        }
    });
});

//executando o servidor
var server = app.listen(3344, "localhost", function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Executando na url: http://%s:%s", host, port);
});