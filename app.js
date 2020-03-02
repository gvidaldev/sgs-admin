//Carregar Módulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

const home = require("./routes/home");
const sobre = require("./routes/sobre");
const contato = require("./routes/contato");
const servicos = require("./routes/servicos");
const path = require('path');

//Configuração
//Body Parser
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

//handlebars
app.engine('handlebars', handlebars({ defaultLayout: "main" }));
app.set('view engine', 'handlebars'); 

//Rotas
app.use('/home', home);
app.use('/sobre', sobre);
app.use('/contato', contato);
app.use('/servicos', servicos);

//Start Server
app.listen(3000, () => {
    console.log("Hello World");
});