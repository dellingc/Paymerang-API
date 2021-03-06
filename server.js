const express = require('express');
const app = express();
const rawData = require('./Data/data.json');
const { allData, indPayee } = require('./Controllers/index.js');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Vary: origin");
    next();
  });

app.get('/', (req, res) => res.send(allData()));
app.get('/:index', (req, res) => res.send(indPayee(req.params.index)));



app.listen(8000, () => console.log('Server listening on port 8000!'))