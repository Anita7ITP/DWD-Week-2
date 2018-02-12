var express = require('express')
var app = express()

app.use(express.static('public'));


app.get('/robot.jpg', function (req, res) {
var fileToSend = "robot.jpg";
  res.sendfile(fileToSend, {root: './public'}); // Files inside "public" folder
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
