//Carregar Módulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

const home = require("./routes/home");

//Configuração
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.use('/home', home);

//Start Server
app.listen(3000, () => {
    console.log("Hello World");
});