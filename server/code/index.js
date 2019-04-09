var express = require('express')

app = express();
port = 4000;

app.use("/", express.static('/output'));
app.listen(port);