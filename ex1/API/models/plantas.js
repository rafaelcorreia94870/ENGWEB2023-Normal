var mongoose = require('mongoose');

var plantasSchema = new mongoose.Schema({
    "_id": String,
    "Id": Number,
    "Número de Registo": Number,
    "Código de rua": Number,
    "Rua": String,
    "Local": String,
    "Freguesia": String,
    "Espécie": String,
    "Nome Científico": String,
    "Origem": String,
    "Data de Plantação": String,
    "Estado": String,
    "Caldeira": String,
    "Tutor": String,
    "Implantação": String,
    "Gestor": String,
    "Data de actualização": String,
    "Número de intervenções": Number
});
/*
"Id": 20615557,
    "Número de Registo": 3,
    "Código de rua": 1685467,
    "Rua": "Rua Júlio Dinis",
    "Local": "Zambujeiro",
    "Freguesia": "Alcabideche",
    "Espécie": "pinheiro manso",
    "Nome Científico": "Pinus pinea",
    "Origem": "",
    "Data de Plantação": "",
    "Estado": "Adulto",
    "Caldeira": "Sim",
    "Tutor": "Sim",
    "Implantação": "Arruamento",
    "Gestor": "DGEV",
    "Data de actualização": "23/07/2021 19:50:54",
    "Número de intervenções": 6
    */

module.exports = new mongoose.model('plantas',plantasSchema);