const express = require('express');
const routes =  require('./api/routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(routes);

app.get('/', (req,res) => {
  res.status(200).json("Okay!");
});


app.get('*', (req,res) => {
  res.status(404).json("Endpoint not found!");
});

app.listen(3000);
