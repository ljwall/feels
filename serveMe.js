var express = require('express'),
    morgan = require('morgan'),
    app = express();


app.use(morgan('dev'));
app.use(express.static('./'));


app.listen(5667);
console.log('Listening on port 5667');
