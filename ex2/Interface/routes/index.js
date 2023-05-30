var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/interface")
    .then(dados=>{
      axios.get("http://localhost:15030/count")
        .then(contador=>{
          res.render('listaDB', { contador: contador.data, plantas: dados.data });
        })
        .catch(erro=>{
          res.render('error', { error: erro,message:"Erro a contar" });
        })
    })
    .catch(erro=>{
    
      res.render('error', { error: erro,message:"Erro a obter lista de exames" });
    })
});

router.get('/especies/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/plantas?especie="+req.params.id)
      .then(dados=>{
        res.render('especie', { especies: dados.data, d:data });
      })
      .catch(erro=>{
        res.render('error', { error: erro,message:"Erro a obter lista de plantas da espécie" });
      })

  
});

router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/plantas/"+req.params.id)
      .then(dados=>{
        console.log(dados.data)
        res.render('planta', { planta: dados.data, d:data});
      })
      .catch(erro=>{
        res.render('error', { error: erro,message:"Erro a obter planta" });
      })

  
});

module.exports = router;
