const PORT = 3000;

const HOST = '0.0.0.0';

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.text());

require('./app/controller/gameController')(app);

app.listen(PORT, ()  => {
    console.log(`Servidor executando na porta ${PORT}`);
});

