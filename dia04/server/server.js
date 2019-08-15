let express = require('express');
let jwt = require('jsonwebtoken');
let body = require('body-parser');
let cors = require('cors');
let app = express();
let secret = 'minhachave';

let users = [
    {
        "login":"bruno",
        "senha":"123"
    },
    {
        "login": "yanne",
        "senha": "123"
    }
];


app.use(cors());// LIBERA O FILTRO
app.use(body.json()); //FORMATO JSON

//autorização - o usuaŕio é autorizado a entrar?
app.use('/adm', function(req, res, next){
    let erro = {success: false, msg: 'Erro de autenticação'};
    let authorization = req.header["authorization"];
    if(authorization){
        let token = authorization.split(' ')[1];
        console.log(JSON.stringify(authorization));
        console.log(token);
        jwt.verify(token, secret, function(err, decoded){
            if(err){
                res.status(403).json(erro);
                return //break
            }
            next();
        });
        return;
    }
    res.status(401).json(erro);
})

//se logar, lista os usuários
app.get('/adm/list', function(req, res){
    res.json(users);
})

app.post('/auth', function(req, res){
    let usuario = req.body;
    let msg = '';
    let resp = {msg};
    let logado = users.find((item) => usuario.login == item.login && usuario.senha == item.senha)
    if(logado){
        let token = jwt.sign({
            "login":logado.login
        }, secret);
        resp.token = token;
    } else {
        res.status(401).json({msg: "Usuario ou senha invalidos"})
        return
    }
    res.json(resp);
});

app.listen(3000, function(){
    console.log("Servidor iniciado na porta 3000");
});