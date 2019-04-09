var express = require('express')

app = express();
port = 4000;

app.use("/", express.static(__dirname + '/output'));
app.listen(port);