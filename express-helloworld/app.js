var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello supreeth! how are u doing\n');
});
app.get('/mars',function (req, res){
  res.send('hello ICP team, its my first openshift application\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

