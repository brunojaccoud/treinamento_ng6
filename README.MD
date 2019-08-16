#===================== DIA1 =====================#

DOCUMENTAÇÃO ANGULAR
https://angular.io/guide/

Básico

node js - node 15
angular cli - ng v

ng new nome_do_projeto
y
css ENTER

code . -- abre o diretório atual no vscode

Criar componente
ng g c aluno == angular generate componente nome_componente

rodar o projeto
ng s -o
ng s -o --port 1234

no construtor só entram os valores que serão inseridos pelo usuário, as variáveis em que o valor é calculado não entram no construtor
o construtor só serve para lógica e calculos relacionados à classe

variável com + à esquerda (+i) reforça o type da mesma

instalando o bootstrap
npm i bootstrap@4.3.1 -- instala a versão especificada 
npm i bootstrap -- instala a versão mais recente
npm i jquery

instalando e configurando json server --criado um projeto externo
npm i json-server -- instala
json-server cliente.json --inicia
https://www.npmjs.com/package/json-server -- outras infos

https://www.getpostman.com/ -- serve para testar o fluxo de dados e conexões de url - simulando requests

serviços --nome dos métodos em inglês
class --nome dos métodos em português - os nomes não podem ser iguais

**************************************************
#===================== DIA2 =====================#

material design
https://mdbootstrap.com/docs/angular/css/colors/ -- info das bibliotecas

//REGISTRAR O PROJETO
npm i npm-registry-client

//ADICIONAR O MATERIAL DESIGN AO PROJETO
ng add angular-bootstrap-md --add = comando disponível a partir do angular8 - adiciona todas as bibliotecas no angular.json

https://fontawesome.com/ --biblioteca de ícones (instalada com o bootstrap-md)


distros linux:
https://elementary.io/pt_BR/
https://www.linuxdescomplicado.com.br/2013/10/elementary-os-o-que-uma-distribuicao.html
https://www.linuxdescomplicado.com.br/2015/11/saiba-como-personalizar-o-ubuntuelementary-os-em-alguns-cliques.html
https://pt.stackoverflow.com/questions/8678/qual-o-linux-mais-completo-para-programadores

APIs DOS CORREIOS
https://postmon.com.br/

Bibliotecas de imagens e vídeos
http://www.jarallax.com/demo/
npm i jarallax --intalar

FONTS OPEN - Google
https://fonts.google.com/ -- font inserida no styles.css do src

Site de imagens
https://wall.alphacoders.com/?lang=Portuguese


**************************************************
#===================== DIA3 =====================#


MONGO DB
sudo mongod --ativa o servidor do mongo
sudo mongo --ativa o banco

se algo é executado com sucesso (criar banco ou tabela e etc o mongo não retorna nada)

criando objetos em collections ele retorna mensagem de sucesso:

{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("5d53f6eaa15f81c8ac595b2f"),
		ObjectId("5d53f6eaa15f81c8ac595b30")
	]
}


--mongo trabalha em JS

//cria e entra no banco
use aula03; --o comando 'use' cria algo (se não existir com mesmo banco e entra em algo que já existe)

tabelas == collections
registros = objetos

//consultar collections
show collections;

//criado collections e inserindo os dados
db.usuario.insertOne(
    {
        "codigo":100,
        "nome":"bruno",
        "email":"bruno@gmail.com"
    }
);

//consultando dados em collections
db.usuario.find(); --funciona como findAll

db.usuario.find().pretty(); --findAll que retorna os valores como json

db.usuario.insertMany([
    {
        "codigo":101,
        "nome":"yanne",
        "email":"yanne@gmail.com"
    },
    {
        "codigo":102,
        "nome":"leticia",
        "email":"leticia@gmail.com"
    }
]);

//insert errado
db.usuario.insertOne(
    {
        "cod":'1000', //erro
        "nome":"bruno_erro",
        "email":"bruno@gmail.com"
    }
)

//apagar dados numa collection
db.usuario.remove({
    "cod":"1000"
});

//inserindo com relacionamento --usuario tem endereco
db.usuario.insertOne({
    "codigo":103,
    "nome":"carol",
    "email":"carol@gmail.com",
    "endereco" : {
        "logradouro": "av rio branco",
        "bairro": "centro",
        "cidade": "rio de janeiro",
        "estado": "rj",
        "cep": "20040007"
    }
});

//busca pelo nome ou outro campo escolhido
db.usuario.find(
    {"nome":"bruno"}
);

//consultar todos os bancos criados no server
show dbs;

//apagar a collection inteira --drop table
db.usuario.drop();

//apagar todo o conteudo da collection
db.usuario.remove({});

//criar objeto forçando um ID criado, impedindo que o mongo crie seu próprio ObjectId
db.usuario.insertOne({
    "_id":"1",
    "nome":"joaquim",
    "email":joaquim@gmail.com",
    "foto":"foto.jpg"
});

**************************************************
para criar o package, digitar no terminal:
npm init
digitar as infos pedidas

o projeto é um projeto de mean:
M ongo
E xpress
A ngular
N ode


//pacotes e bibliotecas para trabalhar com um projeto mean
npm i cors --save           -permissao de acesso
npm i mongoose --save       -permissao para trabalhar com o mongo
npm i express --save        -linguagem de programação
npm i body-parser --save    -trabalhar com json
npm i mongodb --save        -servidor do mongo
npm i mongod --save         -banco
npm i nodemon --save        - servidor para rodar a aplicação node

nodemon server.js --startando o server criado

******************
Firebase Google 
https://console.firebase.google.com

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.3.5/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDADfOS94tI24ACjPQU7xlbAhfu9hXN8Dg",
    authDomain: "projetobmjda.firebaseapp.com",
    databaseURL: "https://projetobmjda.firebaseio.com",
    projectId: "projetobmjda",
    storageBucket: "",
    messagingSenderId: "679238946514",
    appId: "1:679238946514:web:44184a6d489ccfa4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

instalando firebase no projeto
npm i firebase --save		-conecta ao firebase
npm i angularfire2 --save	-conecta ao banco


**************************************************
#===================== DIA4 =====================#

TOKEN
https://jwt.io

https://imasters.com.br/back-end/autenticacao-json-web-token-jwt-em-node-js

bibliotecas animated
https://wowjs.uk/
https://daneden.github.io/animate.css/


**************************************************
#===================== DIA5 =====================#


Constantes são sempre declaradas com letra maiúscula

site de icones
https://www.iconfinder.com/


FIREBASE

instalar
npm i firebase-tools
npm i firebase
npm i angularfire2 --save
npm i firebase @angular/fire --save ---se tudo der errado
alias firebase="`npm config get prefix`/bin/firebase"

SCRIPT retirado do firebase da part de app - a parte de config deve ser incluída em environments.ts e prod:

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.4.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBepch1pGKovgahQpiQLbnYCdbJ222BL38",
    authDomain: "bmjda-ng8.firebaseapp.com",
    databaseURL: "https://bmjda-ng8.firebaseio.com",
    projectId: "bmjda-ng8",
    storageBucket: "",
    messagingSenderId: "920661244077",
    appId: "1:920661244077:web:2351f7f7c519ed9e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

----------------- DEPLOY -----------------
firebase login
n
se for deslogar: firebase logout

ng build --prod

firebase init
•   Y para continua o processo
•   Selecionar hosting com a tecla espaço
•   Selecionar projeto ou create a new Project (se não aparecer)
•   Public dist/nome_do_projeto
•   Y para criar
•   N para sobrescrever o index

firebase use --add
selecionar o seu projeto
reescrever o nome do projeto

firebase deploy

