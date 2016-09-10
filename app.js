var express = require('express');
var app = express();
var jsonfile = require('jsonfile');
app.use('/assets', express.static('public'));
app.set('views',__dirname + '/public');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.get('/api', function (req, res) {
  res.send([{data: "data"},{data:"data"}]);
});
app.get('/', function (req, res) {
  res.render('views/index.html')
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
app.post('/Weights', function(req, res) {  
  var file = 'data.json';
  jsonfile.writeFile(file, req.body, function (err) {
    console.error(err);
  });
});