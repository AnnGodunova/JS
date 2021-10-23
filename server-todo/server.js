const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log('URL = ', req.url);
  console.log('Original_URL = ', req.originalUrl);
  console.log('METHOD = ', req.method);
  console.log('HOST = ', req.headers.host);
  console.log('IsSecure = ', req.secure);
  console.log('BODY', req.body);
  console.log('QUERY', req.query);

  next();
});

app.post('/sum', function(req, res) {
    console.log('sum a+b');
    var sum = 0;
    sum = parseInt(req.body.a) + parseInt(req.body.b);
    res.status(200).json({ message: sum});
});

app.all('/test', (req, res) => {
  res.status(200).json({ message: 'KKKKKK'});
})


let arr = [];

app.post('/strings', function(req, res) {
  arr.push(req.body.teststring);
  res.status(200).json({ message: arr});
});

app.get('/strings', function(req, res){
  res.status(200).json({ message: arr});
});

app.delete('/strings/:index/:id', function(req, res){
  arr.splice(parseInt(req.params.index),parseInt(req.params.id));
  //delete arr[req.body.index];
  res.status(200).json({ message: arr});  
});

const db = require("./app/models");
db.sequelize.sync();

require("./app/routes/todo.routes")(app);

http.createServer(app).listen(3000, () => {
  console.log('Server is working on port 3000');
})